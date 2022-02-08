window.onscroll = function() { myFunction() };

function myFunction() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById("nav").style.background = "#fff";
    } else {
        document.getElementById("nav").style.opacity = "#000";
    }
}