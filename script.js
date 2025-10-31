var sectall = ["secthome", "section1", "section2", "section3", "section4"];
var btnall = ["btnhome", "btn1", "btn2", "btn3", "btn4"];
var currentSection = "secthome";

function view(sect, btn) {
    if (sect === currentSection) return;

    let oldSection = document.getElementById(currentSection);
    let newSection = document.getElementById(sect);

    // Slide out current section
    oldSection.style.animation = "slideOut 0.5s ease forwards";

    // After slide out, hide old and show new with slide in
    setTimeout(() => {
        oldSection.style.display = "none";
        newSection.style.display = "block";
        newSection.style.animation = "slideIn 0.5s ease forwards";
        currentSection = sect;
    }, 500);

    // Update button styles
    for (let i = 0; i < btnall.length; i++) {
        let button = document.getElementById(btnall[i]);
        button.classList.toggle("active", btn === btnall[i]);
    }
}

window.onload = function () {
    let home = document.getElementById("secthome");
    home.style.display = "block";
    home.style.animation = "slideIn 0.5s ease forwards";
    currentSection = "secthome";
    document.getElementById("btnhome").classList.add("active");
};
