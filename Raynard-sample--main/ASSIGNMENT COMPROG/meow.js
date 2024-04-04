function togglePassword() {
    var passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        document.querySelector('button').textContent = "Hide Password";
    } else {
        passwordField.type = "password";
        document.querySelector('button').textContent = "Show Password";
    }
}
