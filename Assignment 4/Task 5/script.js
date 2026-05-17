document.getElementById("clearButton").addEventListener("click", function() {
    var name = document.getElementById("Name").value;
    var email = document.getElementById("email").value;
    var university = document.getElementById("University").value;
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("University: " + university);
    document.getElementById("Name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("University").value = "";
});