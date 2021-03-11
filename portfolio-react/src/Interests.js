import { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import "./css/vertical-carousel.css";

const Interests = () => {

    const [data] = useState([
            {
                "_classMap": "com.portfolio.map.domain.Interest",
                "_classSQL": "com.portfolio.sql.domain.Interest",
                "id": 1,
                "title": "Dinosaurs",
                "imagePath": "/img/Dinosaurs.jpg",
                "description": "I always wanted to be a paleontologist and though I ended up in IT they continue to fascinate me, I even built my own \"Dinosaur Of The Day\" twitter bot (@dinosauria_bot)."
            },
            {
                "_classMap": "com.portfolio.map.domain.Interest",
                "_classSQL": "com.portfolio.sql.domain.Interest",
                "id": 2,
                "title": "Video Games",
                "imagePath": "/img/VideoGames.jpg",
                "description": "I like playing video games and enjoy the variety and novelty of the environments they are often set in, as well as the ways they try to evolve and tell stories."
            },
            {
                "_classMap": "com.portfolio.map.domain.Interest",
                "_classSQL": "com.portfolio.sql.domain.Interest",
                "id": 3,
                "title": "History",
                "imagePath": "/img/History.jpg",
                "description": "I love reading about history, from Ancient Egypt and the Romans to the Medieval Ages, the English Civil War through to the Georgian era and the start of the industrial revolution."
            },
            {
                "_classMap": "com.portfolio.map.domain.Interest",
                "_classSQL": "com.portfolio.sql.domain.Interest",
                "id": 4,
                "title": "Maker Culture",
                "imagePath": "/img/MakerPi.jpg",
                "description": "Nothing more fun than fiddling with a Raspberry Pi, a soldering iron and some LEDs or trying to make a tensegrity structure. I have so far resisted the temptations of a 3D printer."
            },
            {
                "_classMap": "com.portfolio.map.domain.Interest",
                "_classSQL": "com.portfolio.sql.domain.Interest",
                "id": 5,
                "title": "Space",
                "imagePath": "/img/Space.jpg",
                "description": "Space is big. You just won't believe how vastly, hugely, mind-bogglingly big it is. I mean, you may think it's a long way down the road to the chemist's, but that's just peanuts to space”."
            }
        ]
    );

    return (
        <div id="interestsCarousel" className="vertical carousel slide" data-ride="carousel">
            <a className="carousel-control-prev w-auto" href="#interestsCarousel" role="button" data-slide="prev">
                <FontAwesomeIcon icon={["fas", "angle-up"]} className="text-dark" fixedWidth />
                <span className="sr-only">Previous</span>
            </a>
            <div className="carousel-inner">
                {data.map(interest => {
                    const itemClass = interest.id === 1 ? "carousel-item active" : "carousel-item";
                    const titleId = "title" + interest.id;
                    const imagePathId = "imagePath" + interest.id;
                    const descriptionId = "description" + interest.id;
                    return (
                <div className={ itemClass }>
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
