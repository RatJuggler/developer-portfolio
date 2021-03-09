import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {

    const [profile] = useState({
        name: "John Chase",
        location: "Smallfield, Surrey, England",
        avatarPath: "img/Rat-Profile.svg",
        photoPath: "img/Photo.jpg",
        linkedin: "https://www.linkedin.com/in/john-chase-57973b12/",
        github: "https://github.com/RatJuggler",
        twitter: "https://twitter.com/ratjuggler"
    });

    return (
        <section>
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 mb-3">
                            <span className="spotlight"><img src={ profile.photoPath } alt={ profile.name } /></span>
                            <nav id="contactList" className="navbar-expand navbar-light">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link" href="mailto:{{ profile.email }}?subject=Developer%20Profile"
                                           target="_blank" rel="noopener noreferrer" title="E-mail">
                                            <FontAwesomeIcon icon={["fas", "at"]} fixedWidth />
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href={ profile.linkedin } title="LinkedIn">
                                            <FontAwesomeIcon icon={["fab", "linkedin"]} fixedWidth />
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href={ profile.github } title="Github">
                                            <FontAwesomeIcon icon={["fab", "github-square"]} fixedWidth />
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href={ profile.twitter } title="Twitter">
                                            <FontAwesomeIcon icon={["fab", "twitter-square"]} fixedWidth />
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-md-9">
                            <form>
                                <fieldset disabled>
                                    <div className="form-group">
                                        <label htmlFor="name">Name</label>
                                        <input type="text" className="form-control" id="name" value={ profile.name } />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-8">
                                            <label htmlFor="location">Location</label>
                                            <input type="text" className="form-control" id="location"
                                                   value={ profile.location } />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="status">Status</label>
                                            <select className="form-control" id="status">
                                                <option selected>Available</option>
                                                <option>Engaged</option>
                                            </select>
                                        </div>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
