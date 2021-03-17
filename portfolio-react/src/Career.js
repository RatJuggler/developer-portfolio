import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./css/horizontal-carousel.css";

const Career = () => {

    const [career, setCareer] = useState({ loading: true, data: null });

    useEffect(() => {
        setCareer({ loading: true });
        fetch("/json/career.json")
            .then((res) => res.json())
            .then((data) => {
                setCareer({ loading: false, data: data });
            });
    }, [setCareer]);

    if (career.loading) return (<p>Loading...</p>);

    return (
        <div id="careerCarousel" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                {career.data.map(period => {
                    const itemClass = period.step === 1 ? "carousel-item active" : "carousel-item";
                    const stepId = "step" + period.id;
                    const descriptionId = "description" + period.id;
                    const imagePathId = "imagePath" + period.id;
                    const synopsisId = "synopsis" + period.id;
                    return (
                <div className={ itemClass } key={ period.id }>
                    <div className="card">
                        <div className="card-header">
                            <div className="btn-group float-right">
                                <button type="button" className="btn btn-link" title="Add a new career period">
                                    <FontAwesomeIcon icon={["fas", "plus"]} fixedWidth />
                                </button>
                                <button type="button" className="btn btn-link" title="Edit this career period">
                                    <FontAwesomeIcon icon={["far", "edit"]} fixedWidth />
                                </button>
                                <button type="button" className="btn btn-link" title="Delete this career period">
                                    <FontAwesomeIcon icon={["far", "trash-alt"]} fixedWidth />
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <form>
                                <fieldset disabled>
                                    <div className="row">
                                        <div className="col-md-2 text-center">
                                            <div className="display-1"><span aria-hidden="true">{ period.imagePath }</span></div>
                                        </div>
                                        <div className="col-md-10">
                                            <div className="row">
                                                <div className="form-group col-md-2">
                                                    <label htmlFor={ stepId }>Step</label>
                                                    <input type="text" className="form-control" id={ stepId } value={ period.step } readOnly />
                                                </div>
                                                <div className="form-group col-md-10">
                                                    <label htmlFor={ descriptionId }>Description</label>
                                                    <input type="text" className="form-control" id={ descriptionId } value={ period.description } readOnly />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Image</label>
                                                <div className="custom-file">
                                                    <input type="file" className="custom-file-input" id={ imagePathId } readOnly />
                                                    <label className="custom-file-label" htmlFor={ imagePathId }>{ period.imagePath }</label>
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor={ synopsisId }>Synopsis</label>
                                                <textarea className="form-control" id={ synopsisId } rows="3" value={ period.synopsis } readOnly />
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
                    );
                })}
            </div>
            <div className="row">
                <a className="carousel-control-prev col" href="#careerCarousel" role="button" data-slide="prev">
                    <FontAwesomeIcon icon={["fas", "angle-left"]} className="text-dark" fixedWidth />
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next col" href="#careerCarousel" role="button" data-slide="next">
                    <FontAwesomeIcon icon={["fas", "angle-right"]} className="text-dark" fixedWidth />
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    );
}

export default Career;
