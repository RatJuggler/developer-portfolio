import { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Profile = () => {

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
        <div className="card">
            <div className="card-header">
                <div className="btn-group float-right">
                    <button type="button" className="btn btn-link" title="Add a new profile">
                        <FontAwesomeIcon icon={["fas", "plus"]} fixedWidth />
                    </button>
                    <button type="button" className="btn btn-link" title="Edit this profile">
                        <FontAwesomeIcon icon={["far", "edit"]} fixedWidth />
                    </button>
                    <button type="button" className="btn btn-link" title="Delete this profile">
                        <FontAwesomeIcon icon={["far", "trash-alt"]} fixedWidth />
                    </button>
                </div>
            </div>
            <div className="card-body">
                <form>
                    <fieldset disabled>
                        <div className="form-group">
                            <label htmlFor="description">Description</label>
                            <textarea className="form-control" id="description" rows="7" value={profile.description} readOnly />
                        </div>
                        <div className="row">
                            <div className="form-group col-xl-6">
                                <div className="row">
                                    <label htmlFor="email" className="col-md-2 col-form-label">Email</label>
                                    <div className="col-md-10">
                                        <input type="text" className="form-control" id="email" value={ profile.email } readOnly />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group col-xl-6">
                                <div className="row">
                                    <label htmlFor="linkedin" className="col-md-2 col-form-label">LinkedIn</label>
                                    <div className="col-md-10">
                                        <input type="text" className="form-control" id="linkedin" value={ profile.linkedin } readOnly />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-xl-6">
                                <div className="row">
                                    <label htmlFor="github" className="col-md-2 col-form-label">GitHub</label>
                                    <div className="col-md-10">
                                        <input type="text" className="form-control" id="github" value={ profile.github } readOnly />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group col-xl-6">
                                <div className="row">
                                    <label htmlFor="twitter" className="col-md-2 col-form-label">Twitter</label>
                                    <div className="col-md-10">
                                        <input type="text" className="form-control" id="twitter" value={ profile.twitter } readOnly />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    );
}

export default Profile;
