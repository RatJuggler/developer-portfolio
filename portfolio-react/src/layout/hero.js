import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = () => {

    const [profile] = useState({
        "_classMap": "com.portfolio.map.domain.Profile",
        "_classSQL": "com.portfolio.sql.domain.Profile",
        "id": 1,
        "name": "John Chase",
        "location": "Smallfield, Surrey, England",
        "status": "Available",
        "avatarPath": "/img/Rat-Profile.svg",
        "photoPath": "/img/Photo.jpg",
        "description": "I am a Senior Developer with extensive SDLC experience. I have a proven track record of delivering bespoke solutions to meet demanding customer needs and growing those solutions to keep up with a changing market. I enjoy collaborating with a diverse team to build and promote a good working environment geared at delivering high-quality solutions.\n\nSelect one of the tabs to find out more about me.",
        "email": "john.chase3@outlook.com",
        "linkedin": "https://www.linkedin.com/in/john-chase-57973b12/",
        "github": "https://github.com/RatJuggler",
        "twitter": "https://twitter.com/ratjuggler"
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
                                        <input type="text" className="form-control" id="name" value={ profile.name } readOnly />
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-md-8">
                                            <label htmlFor="location">Location</label>
                                            <input type="text" className="form-control" id="location"
                                                   value={ profile.location } readOnly />
                                        </div>
                                        <div className="form-group col-md-4">
                                            <label htmlFor="status">Status</label>
                                            <select className="form-control" id="status" value="Available" readOnly>
                                                <option>Available</option>
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
