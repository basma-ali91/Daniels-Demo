
window.addEventListener("scroll", function () {
    let navbar = document.getElementById("Nav")
    let home = document.getElementById("home");
    let scrollNav = window.scrollY;
    let homeHeight = home.scrollHeight;
    let toggeler = document.getElementById("toggler");


    if (scrollNav >= homeHeight) {
        navbar.style.backgroundColor = "#000";
        toggeler.style.backgroundColor = "#fff"
    }
    else {
        navbar.style.backgroundColor = "transparent";
    }
    
})
