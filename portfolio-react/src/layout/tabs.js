import { Link } from "react-router-dom";

const Tabs = () => {

    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link className="nav-link active" to="/profile">Profile</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/skills">Skills</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/career">Career</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/interests">Interests</Link>
            </li>
        </ul>
    );
}

export default Tabs;
