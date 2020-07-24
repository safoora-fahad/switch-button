let darkMode = false;
let lightMode = true;

function switchTheme() {
    if (darkMode === false) {
        darkMode = true;
        lightMode = false;
        document.querySelector("body").style.backgroundColor = "black";
        document.querySelector("body").style.color = "white";
    } else if (darkMode === true) {
        darkMode = false;
        lightMode = true;
        document.querySelector("body").style.backgroundColor = "white";
        document.querySelector("body").style.color = "black";
    }
}