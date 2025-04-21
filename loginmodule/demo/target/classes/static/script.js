document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const user = document.getElementById("loginUser").value;
            const pass = document.getElementById("loginPass").value;
            const stored = localStorage.getItem(user);
            if (stored === pass){
                localStorage.setItem("user", user);
                window.location.href = "/welcome";
            } else {
                alert("Invalid login");
            }
        });
    }
});
