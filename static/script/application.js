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
        document.querySelector("#main-header .login").addEventListener("click", (event) => {
            event.preventDefault();
            this.login("admin", "admin");
        });

        document.querySelector("#main-header .logout").addEventListener("click", (event) => {
            event.preventDefault();
            this.logout();
        });

        console.log("Application intialized");
    }

    updateHTML() {
        if(this.user) {
            // Update links when user is logged in
            document.querySelector("#main-header .login").style.display = "none";
            document.querySelector("#main-header .logout").style.display = "inline";
            document.querySelector("#main-header .register").style.display = "none";
            document.querySelector("#main-header .profile").style.display = "inline";
        } else {
            // Update links when user is not logged in
            document.querySelector("#main-header .login").style.display = "inline";
            document.querySelector("#main-header .logout").style.display = "none";
            document.querySelector("#main-header .register").style.display =
                "inline";
            document.querySelector("#main-header .profile").style.display = "none";

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
