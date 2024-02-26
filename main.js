function myFunction() {
    var name = prompt("Enter Name!");
    var greeting = "HI " + name + "! WELCOME TO MY WEBSITE!!";
    document.getElementById("greeting").innerHTML=greeting;}

function ChangeImageSize(){
    var img = document.getElementById("Pic");
    img.style.height = "1000px";
    img.style.width = "700px"; }