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
  var newUsername = document.getElementById('new-username').value;
  var newPassword = document.getElementById('new-password').value;

  // Validate the password
  var passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{5,}$/; // At least 5 characters, one capital letter, and one special character
  if (!passwordRegex.test(newPassword)) {
    document.getElementById('signup-error-message').innerText = 'Password must be at least 5 characters long, contain at least one capital letter, and one special character (!@#$%^&*()_+).';
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
