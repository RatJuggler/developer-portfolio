import { useState } from "react";

const Footer = () => {

    let isNotificationAccepted = localStorage.getItem("isNotificationAccepted");
    if (isNotificationAccepted === null) {
        isNotificationAccepted = "no";
        localStorage.setItem("isNotificationAccepted", isNotificationAccepted);
    }
    const [notificationAccepted, setNotificationAccepted] = useState(isNotificationAccepted)

    const handleClick = () => {
        localStorage.setItem("isNotificationAccepted", "yes");
        setNotificationAccepted("yes");
    }

    return (
        <footer>
            { notificationAccepted === "no" &&
            <div id="cookie-banner" className="alert alert-dark text-center mb-0" role="alert">
                🍪 This website uses local storage to track if you've been told that it doesn't use cookies.
                <button id="acceptCookieNotification" type="button" className="btn btn-primary btn-sm ml-3"
                        onClick={ handleClick }>Um, OK</button>
            </div>
            }
        </footer>
    );
}

export default Footer;
