import { Link } from "react-router-dom";

const Tabs = ({ pathname }) => {

    const profileClass = pathname.endsWith("profile") ? "nav-link active" : "nav-link";
    const skillsClass = pathname.endsWith("skills") ? "nav-link active" : "nav-link";
    const careerClass = pathname.endsWith("career") ? "nav-link active" : "nav-link";
    const interestsClass = pathname.endsWith("interests") ? "nav-link active" : "nav-link";

    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link className={ profileClass } to="/profile">Profile</Link>
            </li>
            <li className="nav-item">
                <Link className={ skillsClass } to="/skills">Skills</Link>
            </li>
            <li className="nav-item">
                <Link className={ careerClass } to="/career">Career</Link>
            </li>
            <li className="nav-item">
                <Link className={ interestsClass } to="/interests">Interests</Link>
            </li>
        </ul>
    );
}

export default Tabs;
