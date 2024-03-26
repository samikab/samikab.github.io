
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




    function submitForm() {
    
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var phone = document.getElementById("phone").value;
        var Feedback = document.getElementById("Feedback").value;
        var phone_type = document.getElementById("phone_type").value;
    
       
        var gender = document.querySelector('input[name="gender"]:checked').value;
    
    
    
    
        var Aspect = [];
        var AspectCheckboxes = document.getElementsByName("Aspect");
        for (var i = 0; i < AspectCheckboxes.length; i++) {
            if (AspectCheckboxes[i].checked) {
                Aspect.push(AspectCheckboxes[i].value);
            }
        }
    
      
        var first_name = localStorage.setItem("name", name);
        var email_add = localStorage.setItem("email", email);
        var Tel = localStorage.setItem("phone", phone);
        var msg = localStorage.setItem("Feedback", Feedback);
        var tel_type = localStorage.setItem("phone_type", phone_type);
        var gen = localStorage.setItem("gender", gender);
        var Website_aspect = localStorage.setItem("Aspect", Aspect)
    }


    function changeColor() {
        document.body.style.backgroundColor = "#000";
        document.body.style.color = "#fff";
    } (edited)
  
    