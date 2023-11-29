function register() {
    // Dummy registration logic
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;

    // Display registration result
    var resultDiv = document.getElementById("registrationResult");
    resultDiv.innerHTML = "Registration successful for " + username + " with email " + email;
}
