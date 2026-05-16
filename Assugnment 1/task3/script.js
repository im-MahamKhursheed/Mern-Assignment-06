function checkMarks(marks) {
    if (marks >= 80) {
        alert("Excellent");
    } else if (marks >= 60) {
        alert("Good");
    } else {
        alert("Try Again");
    }
}
a=prompt("Enter your marks:");
checkMarks(a)