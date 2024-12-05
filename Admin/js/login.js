/* Sidebar toggle functions */
function openSidebar() {
    document.getElementById("mySidebar").style.width = "250px";
}

function closeSidebar() {
    document.getElementById("mySidebar").style.width = "0";
}
function validateLogin() {
    const usernameInput = document.querySelector('input[name="username"]');
    const passwordInput = document.querySelector('input[name="password"]');
  
    const username = usernameInput.value.trim(); // Trim leading/trailing whitespace
    const password = passwordInput.value;
  
    // Validate username and password (more robust validation recommended)
    if (username === "admin" && password === "1234") {
      // Login successful: Redirect or display success message
      console.log("Login successful!"); // Replace with appropriate action (e.g., redirect)
    } else {
      alert("Invalid username or password. Please try again.");
      // Clear password field for better security
      passwordInput.value = "";
    }
  }