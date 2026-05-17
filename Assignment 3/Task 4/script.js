document.getElementById("hide/show").addEventListener("click", function() {
    var element = document.getElementById("text");
    if (element.style.display === "none") {
        element.style.display = "block";   }
    else {        element.style.display = "none";
    }
});
