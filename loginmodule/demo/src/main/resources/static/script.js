function registerUser(event) {
    event.preventDefault();
    const user = document.getElementById("regUser").value;
    const pass = document.getElementById("regPass").value;
    localStorage.setItem(user, pass);
    alert("Registration successful!");
    window.location.href = "/login";
    return false;
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const user = document.getElementById("loginUser").value;
            const pass = document.getElementById("loginPass").value;
            const stored = localStorage.getItem(user);
            if (stored === pass) {
                localStorage.setItem("user", user);
                window.location.href = "/welcome";
            } else {
                alert("Invalid login");
            }
        });
    }
});
