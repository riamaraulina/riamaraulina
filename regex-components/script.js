// Function to validate email
function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Function to validate password (minimal 6 karakter)
function validatePassword(password) {
    return password.length >= 6;
}

// Function to validate phone number (hanya angka)
function validatePhoneNumber(telepon) {
    const re = /^[0-9]+$/;
    return re.test(telepon);
}

// Function to validate age (hanya angka positif)
function validateAge(umur) {
    return umur > 0;
}

// Function to display error message
function showError(input, message) {
    const errorMessage = input.nextElementSibling;
    errorMessage.innerText = message;
}

// Function to clear error message
function clearError(input) {
    const errorMessage = input.nextElementSibling;
    errorMessage.innerText = "";
}

// Function to validate form
function validateForm() {
    const namaInput = document.getElementById("nama");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const teleponInput = document.getElementById("telepon");
    const umurInput = document.getElementById("umur");

    let isValid = true;

    if (namaInput.value.trim() === "") {
        showError(namaInput, "Nama harus diisi");
        isValid = false;
    } else {
        clearError(namaInput);
    }

    if (!validateEmail(emailInput.value)) {
        showError(emailInput, "Email tidak valid");
        isValid = false;
    } else {
        clearError(emailInput);
    }

    if (!validatePassword(passwordInput.value)) {
        showError(passwordInput, "Password minimal 6 karakter");
        isValid = false;
    } else {
        clearError(passwordInput);
    }

    if (!validatePhoneNumber(teleponInput.value)) {
        showError(teleponInput, "Nomor telepon hanya boleh berisi angka");
        isValid = false;
    } else {
        clearError(teleponInput);
    }

    if (!validateAge(umurInput.value)) {
        showError(umurInput, "Umur harus angka positif");
        isValid = false;
    } else {
        clearError(umurInput);
    }

    return isValid;
}

// Event listener for real-time validation
document.addEventListener("DOMContentLoaded", function() {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => {
        input.addEventListener("input", function() {
            validateForm();
        });
    });

    // Event listener for form submission
    const submitButton = document.querySelector("button[type='submit']");
    submitButton.addEventListener("click", function(event) {
        if (!validateForm()) {
            event.preventDefault(); // Prevent form submission if validation fails
        }
    });
});
