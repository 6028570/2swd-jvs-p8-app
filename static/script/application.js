export class User {
    constructor(username) {
        this.username = username;
    }
}

export class Application {
    constructor() {
        console.log("Constructor called");
        this.userLoggedIn = false;
        this.currentUser = null;
    }

    updateDOM() {
        const loginLink = document.getElementById("login-link");
        const logoutLink = document.getElementById("logout-link");

        if (this.userLoggedIn) {
            loginLink.style.display = "none";
            logoutLink.style.display = "block";
        } else {
            loginLink.style.display = "block";
            logoutLink.style.display = "none";
        }
    }

    login() {
        const username = prompt("Enter your username:");
        if (username) {
            this.currentUser = new User(username);
            this.userLoggedIn = true;
            this.updateDOM();
        }
    }

    logout() {
        this.currentUser = null;
        this.userLoggedIn = false;
        this.updateDOM();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const app = new Application();
    app.updateDOM();

    const loginLink = document.getElementById("login-link");
    const logoutLink = document.getElementById("logout-link");

    loginLink.addEventListener("click", () => {
        app.login();
    });

    logoutLink.addEventListener("click", () => {
        app.logout();
    });
});
