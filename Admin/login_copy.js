// Assuming a backend API endpoint to handle login requests
async function loginUser(username, password) {
    try {
        const response = await fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            const data = await response.json();
            // Handle successful login (e.g., redirect to dashboard)
            window.location.href = 'dashboard.html';
        } else {
            alert('Invalid username or password. Please try again.');
        }
    } catch (error) {
        console.error('Error logging in:', error);
        alert('An error occurred. Please try again later.');
    }
}

// Event listener for form submission
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    loginUser(username, password);
});