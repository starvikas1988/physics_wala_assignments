// Q5. You're creating a basic login system. Make a login function with two things: a username and a
// password. Check if the username is "admin" and the password is "12345". If they're both correct, show "Login
// successful"; if not, show "Invalid credentials."

function login(username, password) {
    // Check if the username and password match the expected values
    if (username === "admin" && password === "12345") {
        return "Login successful";
    } else {
        return "Invalid credentials";
    }
}

// Example usage:
const enteredUsername = 'admin'
const enteredPassword = '12345'

const loginResult = login(enteredUsername, enteredPassword);
console.log(loginResult);
