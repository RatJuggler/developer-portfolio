import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./css/vertical-carousel.css";

const Interests = () => {

    const [interests, setInterests] = useState({ loading: true, data: null });

    useEffect(() => {
        setInterests({ loading: true })
        fetch("/json/interests.json")
            .then((res) => res.json())
            .then((data) => {
                setInterests({ loading: false, data: data });
            });
    }, [setInterests]);

    if (interests.loading) return (<p>Loading...</p>);

    return (
        <div id="interestsCarousel" className="vertical carousel slide" data-ride="carousel">
            <a className="carousel-control-prev w-auto" href="#interestsCarousel" role="button" data-slide="prev">
                <FontAwesomeIcon icon={["fas", "angle-up"]} className="text-dark" fixedWidth />
                <span className="sr-only">Previous</span>
            </a>
            <div className="carousel-inner">
                {interests.data.map(interest => {
                    const itemClass = interest.id === 1 ? "carousel-item active" : "carousel-item";
                    const titleId = "title" + interest.id;
                    const imagePathId = "imagePath" + interest.id;
                    const descriptionId = "description" + interest.id;
                    return (
                <div className={ itemClass } key={ interest.id }>
                    <div className="card">
                        <div className="card-header">
                            <div className="btn-group float-right">
                                <button type="button" className="btn btn-link" title="Add a new interest">
                                    <FontAwesomeIcon icon={["fas", "plus"]} fixedWidth />
                                </button>
                                <button type="button" className="btn btn-link" title="Edit this interest">
                                    <FontAwesomeIcon icon={["far", "edit"]} fixedWidth />
                                </button>
                                <button type="button" className="btn btn-link" title="Delete this interest">
                                    <FontAwesomeIcon icon={["far", "trash-alt"]} fixedWidth />
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <form>
                                <fieldset disabled>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <img className="card-img-top img-fluid" src={ interest.imagePath } alt={ interest.description } />
                                        </div>
                                        <div className="col-md-8">
                                            <div className="form-group">
                                                <label htmlFor={ titleId }>Interest</label>
                                                <input type="text" className="form-control" id={ titleId } value={ interest.title } readOnly />
                                            </div>
                                            <div className="form-group">
                                                <label>Image</label>
                                                <div className="custom-file">
                                                    <input type="file" className="custom-file-input" id={ imagePathId } readOnly />
                                                    <label className="custom-file-label" htmlFor={ imagePathId }>{ interest.imagePath }</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <label htmlFor={ descriptionId }>Description</label>
                                        <textarea className="form-control" id={ descriptionId } rows="3" value={ interest.description } readOnly />
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
                    );
                })}
            </div>
            <a className="carousel-control-next w-auto" href="#interestsCarousel" role="button" data-slide="next">
                <FontAwesomeIcon icon={["fas", "angle-down"]} className="text-dark" fixedWidth />
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}

export default Interests;
