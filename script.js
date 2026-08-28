const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    const message = document.getElementById("message");

    if (
        email === "admin@myerp.com" &&
        password === "1234"
    ) {

        message.style.color = "green";

        message.textContent = "Login successful!";

    } else {

        message.style.color = "red";

        message.textContent = "Incorrect email or password.";

    }

});