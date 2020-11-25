/* Show and hide a cookie banner using a local storage flag. */

const cookieBanner = document.getElementById("cookie-banner");

window.addEventListener('load', () => {
    let isNotificationAccepted = localStorage.getItem("isNotificationAccepted");
    if (isNotificationAccepted === null) {
        isNotificationAccepted = "no";
        localStorage.setItem("isNotificationAccepted", isNotificationAccepted);
    }
    if (isNotificationAccepted === "no") {
        cookieBanner.style.display = "block";
    }
});

document.getElementById("acceptCookieNotification")
    .addEventListener("click", () => {
    localStorage.setItem("isNotificationAccepted", "yes");
    cookieBanner.style.display = "none";
});
