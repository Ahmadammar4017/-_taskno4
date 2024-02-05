const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

// Simulated user credentials (replace this with an actual authentication mechanism)
const validUsername = 'user';
const validPassword = 'ABC012ab';

loginForm.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  if (username === validUsername && password === validPassword) {
    // Successful login - Redirect or display success message
    alert('Login successful!');
    // Redirect to a dashboard or another page
    // window.location.href = 'dashboard.html';
  } else {
    // Failed login - Display error message
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'Invalid username or password';
  }
});
