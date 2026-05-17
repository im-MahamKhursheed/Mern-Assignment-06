document.getElementById("inputField").addEventListener("input", function() {
    var inputValue = this.value;
    var outputElement = document.getElementById("displayText");
    outputElement.textContent = inputValue;
});