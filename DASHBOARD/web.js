document.getElementById("registrationForm").addEventListener("submit", function(event){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Here you can perform validation checks and other operations before submission
  
    // For demonstration, let's just display the entered values
    var message = "Registration Successful!<br><br>Username: " + username + "<br>Email: " + email + "<br>Password: " + password;
    document.getElementById("message").innerHTML = message;
  });
  