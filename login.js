document.addEventListener("DOMContentLoaded", function () {
    const loginButton = document.getElementById("loginButton");
  
    loginButton.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent default form submission
  
      const username = document.getElementById("username").value.trim();
      const password = document.getElementById("password").value.trim();
  
      if (username === "" || password === "") {
        alert("Please enter username or password");
        return;
      }
  
      if (username !== "pragyansapkota" || password !== "pragyansapkota67") {
        alert("Please enter valid username or password");
        return;
      }
  
      // Redirect to project.html if credentials are correct
      window.location.href = "login.html";
    });
  });
  