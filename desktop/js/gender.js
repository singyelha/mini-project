// Handle the Next button click
function handleNext() {
    var gender = document.getElementById("gender").value;
    
    // Check if gender is selected
    if (!gender) {
        alert("Please select your gender.");
        return;
    }

    // Redirect based on the gender selected
    if (gender === "male") {
        window.location.href = "block.html"; // Redirect to block.html for male
    } else if (gender === "female") {
        window.location.href = "fblock.html"; // Redirect to fblock.html for female
    } else {
        alert("Please select a valid gender.");
    }
}