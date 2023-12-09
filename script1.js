function registerUser() {
    // Get values from the form
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Simple validation (you should add more robust validation)
    if (username && email && password) {
        alert("User registered successfully!\nUsername: " + username + "\nEmail: " + email);
        // You can add logic here to send registration data to the server
    } else {
        alert("Please fill in all fields");
    }
}
