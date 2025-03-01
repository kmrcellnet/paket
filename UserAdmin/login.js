document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Data login admin (bisa diganti dengan backend nanti)
    let adminUser = "admin";
    let adminPass = "admin123";

    if (username === adminUser && password === adminPass) {
        localStorage.setItem("isAdmin", "true"); // Simpan status login
        window.location.href = "dashboard.html"; // Arahkan ke dashboard
    } else {
        document.getElementById("error-message").innerText = "Username atau password salah!";
    }
});

