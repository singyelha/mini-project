function validateForm() {
    const indexNumber = document.getElementById('index-number').value;
    const citizenshipNumber = document.getElementById('citizenship-number').value;

    const isIndexValid = indexNumber.length === 12 && /^\d+$/.test(indexNumber);
    const isCitizenshipValid = citizenshipNumber.length === 11 && /^\d+$/.test(citizenshipNumber);

    // If both are valid, allow form submission
    if (isIndexValid && isCitizenshipValid) {
        return true;
    }

    // Show single error messages
    if (!isIndexValid) {
        alert("Invalid Index Number! Please enter exactly 12 digits.");
        return false; // Prevent form submission
    }

    if (!isCitizenshipValid) {
        alert("Invalid Citizenship Number! Please enter exactly 11 digits.");
        return false; // Prevent form submission
    }

    return true; // Should not reach here
}

function validateIndexNumber() {
    const indexNumberInput = document.getElementById('index-number');
    const indexError = document.getElementById('index-error');
    const citizenshipNumberInput = document.getElementById('citizenship-number');
    const genderSelect = document.getElementById('gender');

    if (indexNumberInput.value.length === 12 && /^\d+$/.test(indexNumberInput.value)) {
        indexNumberInput.classList.remove('invalid'); // Remove invalid class
        indexError.textContent = ""; // Clear index error message
        citizenshipNumberInput.disabled = false; // Enable Citizenship Number input
        genderSelect.disabled = false; // Enable Gender dropdown
    } else {
        indexNumberInput.classList.add('invalid'); // Add invalid class
        indexError.textContent = "Invalid Index Number! Please enter exactly 12 digits."; // Show error message
        citizenshipNumberInput.disabled = true; // Disable Citizenship Number input
        citizenshipNumberInput.value = ""; // Clear Citizenship Number input
        genderSelect.disabled = true; // Disable Gender dropdown
        genderSelect.selectedIndex = 0; // Reset to default
    }
}

function validateCitizenshipNumber() {
    const citizenshipNumberInput = document.getElementById('citizenship-number');
    const citizenshipError = document.getElementById('citizenship-error');

    if (citizenshipNumberInput.value.length === 11 && /^\d+$/.test(citizenshipNumberInput.value)) {
        citizenshipNumberInput.classList.remove('invalid'); // Remove invalid class
        citizenshipError.textContent = ""; // Clear citizenship error message
    } else {
        citizenshipNumberInput.classList.add('invalid'); // Add invalid class
        citizenshipError.textContent = "Invalid Citizenship Number! Please enter exactly 11 digits."; // Show error message
    }
}
 /* Sidebar toggle functions */
 function openSidebar() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeSidebar() {
    document.getElementById("mySidebar").style.width = "0";
}