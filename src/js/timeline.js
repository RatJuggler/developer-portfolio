const s2b = document.getElementById("scroll2Bottom");
const s2t = document.getElementById("scroll2Top");

window.addEventListener("scroll", () => {
    s2t.style.opacity = window.scrollY > 800 ? "1" : "0";
    s2b.style.opacity = window.scrollY > 800 ? "0" : "1";
});

s2b.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo(0, document.body.scrollHeight);
});

s2t.addEventListener("click", (event) => {
    event.preventDefault();
    window.scrollTo(0, 0);
});
