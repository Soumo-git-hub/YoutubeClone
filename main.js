document.getElementById('search-btn').addEventListener('click', function () {
    let query = document.getElementById('search-bar').value;
    alert("You searched for: " + query);

    document.getElementById('login-btn').addEventListener('click', function () {
        let username = document.getElementById('username').value;
        let password = document.getElementById('password').value;

        if (username === "admin" && password === "password") {
            alert("Login successful!");
        } else {
            alert("Invalid credentials, try again.");
        }
    });

});

