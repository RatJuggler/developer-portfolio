import { Link } from "react-router-dom";


const Tabs = ({ aspect, dataFrom }) => {

    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link className={ aspect === "profile" ? "nav-link active" : "nav-link" } to={ "/profile/" + dataFrom }>Profile</Link>
            </li>
            <li className="nav-item">
                <Link className={ aspect === "skills" ? "nav-link active" : "nav-link" } to={ "/skills/" + dataFrom }>Skills</Link>
            </li>
            <li className="nav-item">
                <Link className={ aspect === "career" ? "nav-link active" : "nav-link" } to={ "/career/" + dataFrom }>Career</Link>
            </li>
            <li className="nav-item">
                <Link className={ aspect === "interests" ? "nav-link active" : "nav-link" } to={ "/interests/" + dataFrom }>Interests</Link>
            </li>
        </ul>
    );
}

export default Tabs;
