//header

var darmowa = document.getElementById("darmowa");
var sticky = darmowa.offsetTop;

window.onscroll = function () {
    scrolldarmowa();
};

function scrolldarmowa() {  
    if (window.pageYOffset > sticky) {
        darmowa.classList.add("sticky")
    } else {
        darmowa.classList.remove("sticky");
    }
}; 

