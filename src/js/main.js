/* Javascript to show and hide a cookie banner using local storage. */
function hideCookieBanner() {
    localStorage.setItem("isNotificationAccepted", "yes");
    let cookieBanner = document.getElementById("cookie-banner");
    cookieBanner.style.display = "none";
}
function initializeCookieBanner() {
    let isNotificationAccepted = localStorage.getItem("isNotificationAccepted");
    if (isNotificationAccepted === null) {
        isNotificationAccepted = "no";
        localStorage.setItem("isNotificationAccepted", isNotificationAccepted);
    }
    if (isNotificationAccepted === "no") {
        let cookieBanner = document.getElementById("cookie-banner");
        cookieBanner.style.display = "block";
    }
}
window.addEventListener('load', initializeCookieBanner);
const el = document.getElementById("acceptCookieNotification");
el.addEventListener("click", hideCookieBanner, false);
