//Function to generate a pass
function generate(){

    //Slider to set the length of the password
    let complexity = document.getElementById("slider").value;

    //Values of a pass
    let values = "ABCDEFGHIJKLMNOPQRSTUVWZYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";

    //Loop for pass chars
    for(var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //Showing pass in textbox
    document.getElementById("display").value = password;

}

//Default length of pass (should be a good default for a secure pass)
document.getElementById("length").innerHTML = "Length: 25";

//Length of pass based on slider
document.getElementById("slider").oninput = function(){

    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "Length: " + document.getElementById("slider").value;
    }
    else{
        document.getElementById("length").innerHTML = "Length: 1";
    }

}

//Function of copy pass button
function copyPassword(){

    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password copied!");

}