
// Store initial credentials for demonstration purposes
var initialUsername = 'user';
var initialPassword = 'password';

document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  
  // Check if username and password are valid
  if (username === initialUsername && password === initialPassword) {
    // Clear any previous error messages
    document.getElementById('error-message').innerText = '';
    
    // Redirect to home page or perform any action upon successful login
    alert('Login successful!');
    // window.location.href = 'home.html'; // Uncomment this line to redirect to home page
  } else {
    document.getElementById('error-message').innerText = 'Invalid username or password';
  }
});

document.getElementById('signup-link').addEventListener('click', function(event) {
  event.preventDefault();
  document.querySelector('.login-container').style.display = 'none';
  document.querySelector('.signup-container').style.display = 'block';
});

document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  // Get values from the signup form
  var newFirstName = document.getElementById('new-firstname').value.trim();
  var newLastName = document.getElementById('new-lastname').value.trim();
  var newEmail = document.getElementById('new-email').value.trim();
  var newUsername = document.getElementById('new-username').value.trim();
  var newPassword = document.getElementById('new-password').value;

  // Validate first name
  if (newFirstName.length === 0) {
    document.getElementById('signup-error-message').innerText = 'Please enter your first name.';
    return;
  }

  // Validate last name
  if (newLastName.length === 0) {
    document.getElementById('signup-error-message').innerText = 'Please enter your last name.';
    return;
  }

  // Validate username
  if (newUsername.length === 0) {
    document.getElementById('signup-error-message').innerText = 'Please enter a username.';
    return;
  }

  // Check if first name contains numbers or special characters
  if (!/^[a-zA-Z]+$/.test(newFirstName)) {
    document.getElementById('signup-error-message').innerText = 'First name must only contain letters.';
    return;
  }

  // Check if last name contains numbers or special characters
  if (!/^[a-zA-Z]+$/.test(newLastName)) {
    document.getElementById('signup-error-message').innerText = 'Last name must only contain letters.';
    return;
  }

  // Check if first name contains spaces
  if (/\s/.test(newFirstName)) {
    document.getElementById('signup-error-message').innerText = 'First name must not contain spaces.';
    return;
  }

  // Check if last name contains spaces
  if (/\s/.test(newLastName)) {
    document.getElementById('signup-error-message').innerText = 'Last name must not contain spaces.';
    return;
  }

  // Validate username
  if (newUsername.includes(' ')) {
    document.getElementById('signup-error-message').innerText = 'Username must not contain spaces.';
    return;
  }

  // Validate the password
  var passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{5,}$/; // At least 5 characters, one capital letter, and one special character
  if (!passwordRegex.test(newPassword)) {
    document.getElementById('signup-error-message').innerText = 'Password must be at least 5 characters long, contain at least one capital letter, and one special character (!@#$%^&*()_+).';
    return;
  }

  // Validate email
  if (!newEmail.includes('@')) {
    document.getElementById('signup-error-message').innerText = 'Invalid email address.';
    return;
  }
  
  // Update initial credentials with new ones
  initialUsername = newUsername;
  initialPassword = newPassword;

  // Perform signup functionality (for demonstration purpose, just alert the success)
  alert('Signup successful!');
  
  // Clear any previous error messages
  document.getElementById('signup-error-message').innerText = '';
  
  // Go back to login after successful signup
  document.querySelector('.signup-container').style.display = 'none';
  document.querySelector('.login-container').style.display = 'block';
});
