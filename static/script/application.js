import { User } from "./user.js";

export class Application {
    user = null;

    constructor() {
        document.addEventListener("DOMContentLoaded", () => {
            this.init();
        });
        console.log("Application created");
    }

    init() {
        this.updateHTML();
        const loginButton = document.querySelector("#main-header .login");
        const logoutButton = document.querySelector("#main-header .logout");

        if (loginButton) {
            loginButton.addEventListener("click", (event) => {
                event.preventDefault();
                this.login("admin", "admin");
            });
        }

        if (logoutButton) {
            logoutButton.addEventListener("click", (event) => {
                event.preventDefault();
                this.logout();
            });
        }

        console.log("Application initialized");
    }

    updateHTML() {
        if(this.user) {
            const loginButton = document.querySelector("#main-header .login");
            const logoutButton = document.querySelector("#main-header .logout");
            const registerButton = document.querySelector("#main-header .register");
            const profileButton = document.querySelector("#main-header .profile");

            if (loginButton) {
                loginButton.style.display = "none";
            }

            if (logoutButton) {
                logoutButton.style.display = "inline";
            }

            if (registerButton) {
                registerButton.style.display = "none";
            }

            if (profileButton) {
                profileButton.style.display = "inline";
            }
        } else {
            const loginButton = document.querySelector("#main-header .login");
            const logoutButton = document.querySelector("#main-header .logout");
            const registerButton = document.querySelector("#main-header .register");
            const profileButton = document.querySelector("#main-header .profile");

            if (loginButton) {
                loginButton.style.display = "inline";
            }

            if (logoutButton) {
                logoutButton.style.display = "none";
            }

            if (registerButton) {
                registerButton.style.display = "inline";
            }

            if (profileButton) {
                profileButton.style.display = "none";
            }
        }
    }

    login(username, password) {
        this.user = new User({
            username: username,
            password: password,
        });

        this.updateHTML();
    }

    logout() {
        this.user = null;
        this.updateHTML();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const app = new Application();
    app.updateHTML();

    const loginLink = document.getElementById("login-link");
    const logoutLink = document.getElementById("logout-link");

    if (loginLink) {
        loginLink.addEventListener("click", () => {
            app.login();
        });
    }

    if (logoutLink) {
        logoutLink.addEventListener("click", () => {
            app.logout();
        });
    }
});
