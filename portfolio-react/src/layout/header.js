import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {

    const [profile] = useState({
        avatarPath: "img/Rat-Profile.svg",
        name: "John Chase"
    });
    const [version] = useState("0.0.1");

    return (
        <header>
            <nav className="navbar fixed-top navbar-expand-md navbar-light bg-light">
                <a className="navbar-brand" href="/">
                    <img src={ profile.avatarPath } width="30" height="30" className="d-inline-block align-top"
                         alt="My profile avatar" />
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
                                <a className="dropdown-item" href="/">Static HTML</a>
                                <a className="dropdown-item" href="/">Template / Static JSON Files</a>
                                <a className="dropdown-item" href="/">Template / Map Spring Service</a>
                                <a className="dropdown-item" href="/">Template / SQL Spring Service</a>
                                <a className="dropdown-item"
                                   href="https://ratjuggler.github.io/developer-portfolio/static/{{ pageName }}.html">Static HTML
                                    (GitHub Pages)</a>
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
