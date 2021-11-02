var clickDesplegaMenu = document.getElementById("clickAqui");
var menu1 = document.getElementById("li1");
var menu2 = document.getElementById("li2");
var menu3 = document.getElementById("li3");
var body = document.getElementById("body");
var div = document.getElementById("div");

clickDesplegaMenu.addEventListener("click", function() {

    menu1.style.top = "0";
    menu2.style.top = "0";
    menu3.style.top = "0";

})

div.addEventListener("click", function() {

    menu1.style.top = "-100vw";
    menu2.style.top = "-100vw";
    menu3.style.top = "-100vw";

})