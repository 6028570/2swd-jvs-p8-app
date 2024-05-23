export class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    static async register(username, email, password) {
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            });
            const data = await response.json();
            if (response.ok) {
                return new User(data.username, data.email);
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            console.error('Registration error:', error);
            throw error;
        }
    }

    static async login(username, password) {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            const data = await response.json();
            if (response.ok) {
                return new User(data.username, data.email);
            } else {
                throw new Error(data.message);
            }
        } catch (error) {
            console.error('Login error:', error);
            throw error;
        }
    }
}
