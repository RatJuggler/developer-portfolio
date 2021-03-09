const Tabs = () => {

    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a className="nav-link active" href="/">Profile</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Skills</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Career</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/">Interests</a>
            </li>
        </ul>
    );
}

export default Tabs;
