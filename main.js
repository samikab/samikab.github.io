
//Greet Viwers 
function myFunction() {
    var name = prompt("Enter Name!");
    var greeting = "HI " + name + "! WELCOME TO MY WEBSITE!!";
    document.getElementById("greeting").innerHTML=greeting;}

// Increase image size once clicked 
function ChangeImageSize(){
    var img = document.getElementById("Pic");
    img.style.height = "1000px";
    img.style.width = "700px"; }

function showDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.style.display = 'block';
}

function hideDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    dropdown.style.display = 'none';}