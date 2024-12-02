document.getElementById('registrationForm').addEventListener('submit' , function(event){
    event.preventDefault();
     document.getElementById("successMessage").textContent = "Form submitted successfully!";
})

function validateForm() {
    let valid = true;
    clearErrors();


    
    // Full Name Validation
    const fullName = document.getElementById("fullname").value;
    if (fullName.length < 2) {
        showError("fullNameError", "Required, at least 2 characters.");
        valid = false;
    } 

 // Email 
 const email = document.getElementById("email").value;
 const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
 if (!emailPattern.test(email)) {
     showError("emailError", "Please enter a valid email address.");
     valid = false;
 }


     const password = document.getElementById("pwd").value;
     const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d@$!%*?&]{8,}$/
    if (!passwordPattern.test(password)) {
        showError("passwordError", "Required, at least 8 characters, 1 number, 1 special character.");
        valid = false;
    }

    // Confirm Password 
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
        showError("confPassError", "Passwords must match.");
        valid = false;
    }

    // Date of Birth 
    const dob = new Date(document.getElementById("birth").value);
    const age = calculateAge(dob);
    if (age < 18) {
        valid = false;
        document.getElementById("dobError").textContent = "You must be at least 18 years old.";
    }
    
    // Country 
    const country = document.getElementById("country").value;
    if (country ==="Select your country") {
        showError("countryError", "Please select your country.");
        valid = false;
    }

    // Profile Picture 
    const profilePic = document.getElementById("profilePicture").files[0];
    if (!profilePic) {
        showError("profilePicError", "Please upload a profile picture.");
        valid = false;
    } else if (profilePic.size > 2 * 1024 * 1024) { // 2MB size limit
        showError("profilePicError", "Profile picture must be under 2MB.");
        valid = false;
    }

    

 
    // Agree 
    const terms = document.getElementById("terms").checked;
    if (!terms) {
        showError("termsError", "You must agree to the terms and conditions.");
        valid = false;
    }

    // submit 
    let submit = document.getElementById("button1");
    submit.addEventListener("click" , function(){
       
    if (valid) {
       
    } 
    })



    return valid;
}
function showError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function clearErrors() {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(msg => msg.textContent = "")
}

function calculateAge(dob) {
    const today = new Date();
    const age = today.getFullYear() - dob.getFullYear();
    const month = today.getMonth() - dob.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < dob.getDate())) {
        return age - 1;
    }
    return age;
}
function resetForm() {
    clearErrors();
    document.getElementById("registrationForm").reset();
}
