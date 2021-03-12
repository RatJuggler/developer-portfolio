import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Header = ({ aspect }) => {

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

    const [version] = useState("React version with static data");

    return (
        <header>
            <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light">
                <a className="navbar-brand" href="/">
                    <img src={ profile.avatarPath } width="30" height="30" className="d-inline-block align-top" alt="My profile avatar" />
                    Portfolio - { version }
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainMenu"
                        aria-controls="mainMenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="mainMenu">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="/" target="_blank" title="Open in new tab">
                                <FontAwesomeIcon icon={["fas", "home"]} fixedWidth />
                                <span>Home</span>
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="versionMenu" role="button" data-toggle="dropdown"
                               aria-haspopup="true" aria-expanded="false">
                                <FontAwesomeIcon icon={["fas", "cog"]} fixedWidth />
                                <span>Settings</span>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="versionMenu">
                                <span className="dropdown-header">Site Version</span>
                                <div className="dropdown-divider" />
                                <a className="dropdown-item" href={ "/static/" + aspect + ".html" }>Static HTML</a>
                                <a className="dropdown-item" href={ "/template/" + aspect + "/json" }>Template / Static JSON Files</a>
                                <a className="dropdown-item" href={ "/template/" + aspect + "/map" }>Template / Map Spring Service</a>
                                <a className="dropdown-item" href={ "/template/" + aspect + "/sql" }>Template / SQL Spring Service</a>
                                <Link className="dropdown-item" to={ "/" + aspect + "/json" }>React / Static JSON Files</Link>
                                <Link className="dropdown-item" to={ "/" + aspect + "/map" }>React / Map Spring Service</Link>
                                <Link className="dropdown-item" to={ "/" + aspect + "/sql" }>React / SQL Spring Service</Link>
                                <a className="dropdown-item"
                                   href={ "https://ratjuggler.github.io/developer-portfolio/static/" + { aspect } + ".html" }>
                                    Static HTML (GitHub Pages)
                                </a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="/" id="accountMenu" role="button" data-toggle="dropdown"
                               aria-haspopup="true" aria-expanded="false">
                                <FontAwesomeIcon icon={["fas", "user"]} fixedWidth />
                                <span>My Account</span>
                            </a>
                            <div className="dropdown-menu" aria-labelledby="accountMenu">
                                <span className="dropdown-header">{ profile.name }</span>
                                <div className="dropdown-divider" />
                                <button type="button" className="dropdown-item btn btn-link" data-toggle="modal"
                                        data-target="#signOutConfirmation">Sign out
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
