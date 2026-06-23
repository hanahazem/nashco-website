function showNumbers() {
    let numbers = document.getElementById("orderNumbers");

    if (numbers.style.display === "block") {
        numbers.style.display = "none";
    } else {
        numbers.style.display = "block";
    }
}