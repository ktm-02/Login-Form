// login.js

document.getElementById("loginform").addEventListener("click", function (event) {
    event.preventDefault() // Prevent form from submitting

    // Get the values from the input fields
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    // Simple validation (hardcoded for demo purposes)
    const validUsername = "admin"
    const validPassword = "1234"

    // Check if the input matches the predefined credentials
    if (username === validUsername && password === validPassword) {
        alert("Login successful!")
        window.location.href = "index.html" // Redirect to dashboard
    } else {
        document.getElementById("error").textContent = "Invalid username or password"
    }
});