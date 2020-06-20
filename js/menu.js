const menu = document.querySelector(".burger");
const nav = document.querySelector(".navigation");
const header = document.querySelector(".head");
const sec = document.getElementsByTagName("section");
const logo = document.getElementById("logo");

menu.addEventListener("click", function () {
    nav.classList.toggle("menu_on");
    menu.classList.toggle("menu_img");
})
window.onscroll = function () {
    scroll();
}

function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        header.style.height = "15vh";
        sec[0].style.marginTop = "15vh";
        logo.style.height = "13vh"
    } else {
        header.style.height = "20vh";
        sec[0].style.marginTop = "15vh";
        logo.style.height = "15vh"
    }
}