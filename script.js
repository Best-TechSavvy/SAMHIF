var sectall = ["secthome", "section1", "section2", "section3", "section4"];
var btnall = ["btnhome", "btn1", "btn2", "btn3", "btn4"];
var currentSection = "secthome";
var width = window.innerWidth;

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

    if (width < 768) {
        document.getElementById("navbar").style.display = "none";
        document.getElementById("more").style.display = "block";
    }
}

//phone object bellow
function more(){
    var more = document.getElementById("more");
    var navbar = document.getElementById("navbar");
    navbar.style.display = "block";
    more.style.display = "none";
}
//phone object above

window.onload = function () {
    let home = document.getElementById("secthome");
    home.style.display = "block";
    home.style.animation = "slideIn 0.5s ease forwards";
    currentSection = "secthome";
    document.getElementById("btnhome").classList.add("active");
    
    var phone = ["more"];
    var computer = ["navbar"];

    if (width < 768) {
        for (let i = 0; i < phone.length; i++) {
            document.getElementById(phone[i]).style.display = "block";
        }
        for (let i = 0; i < computer.length; i++) {
            document.getElementById(computer[i]).style.display = "none";
        }
        document.getElementById("main").style.marginLeft = "0px";
    } else {
        for (let i = 0; i < phone.length; i++) {
            document.getElementById(phone[i]).style.display = "none";
        }
        for (let i = 0; i < computer.length; i++) {
            document.getElementById(computer[i]).style.display = "block";
        }
        document.getElementById("main").style.marginLeft = "200px";
    }
};
