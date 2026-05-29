
function showdata() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var course = document.getElementById("course").value;
    var city = document.getElementById("city").value;
    var labels= ["Name", "Email", "Course", "City"];
    var values= [name, email, course, city];
    var output = "";

    for (var i = 0; i < values.length; i++) {
        output += labels[i] + ": " + values[i] + "\n\n";
    }
    switch (course) {
        case "Web Development":
          output += "\nYou chose Web Development — build amazing websites!";
          break;
        case "Data Science":
          output += "\nYou chose Data Science — unlock insights from data!";
          break;
        case "AI":
          output += "\nYou chose Artificial Intelligence — shape the future!";
          break;
        case "Cybersecurity":
          output += "\nYou chose Cybersecurity — protect digital assets!";
          break;
        default:
          output += "\nPlease select a valid course.";
      }
       document.getElementById("displayText").textContent = output;
};

function checkfields() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var course = document.getElementById("course").value;
    var city = document.getElementById("city").value;

    if (name === "" || email === "" || course === "" || city === "") {
        alert("Please fill in all fields.");
        return false;
    }
}

function toggleDarkMode() {
      if (document.body.style.backgroundColor === "black") {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
      } else {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
      } 
}