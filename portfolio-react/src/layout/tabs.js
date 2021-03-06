import { Link } from "react-router-dom";


const Tabs = ({ setAspect, aspect, dataFrom }) => {

    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link onClick={ () => setAspect("profile") }
                      className={ aspect === "profile" ? "nav-link active" : "nav-link" }
                      to={ "/profile/" + dataFrom.source }>Profile</Link>
            </li>
            <li className="nav-item">
                <Link onClick={ () => setAspect("skills") }
                      className={ aspect === "skills" ? "nav-link active" : "nav-link" }
                      to={ "/skills/" + dataFrom.source }>Skills</Link>
            </li>
            <li className="nav-item">
                <Link onClick={ () => setAspect("career") }
                      className={ aspect === "career" ? "nav-link active" : "nav-link" }
                      to={ "/career/" + dataFrom.source }>Career</Link>
            </li>
            <li className="nav-item">
                <Link onClick={ () => setAspect("interests") }
                      className={ aspect === "interests" ? "nav-link active" : "nav-link" }
                      to={ "/interests/" + dataFrom.source }>Interests</Link>
            </li>
        </ul>
    );
}

export default Tabs;
