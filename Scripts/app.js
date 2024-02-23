class User {
    constructor(firstName, lastName, username, email, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
    }
}



"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function

let app;
(function(app){

    // Declare Function Variables here...



    /**
     * Variable initialization in this function
     *
     */
    function Start()
    {
        $("#loginForm").submit(validateLogin);
        $("#registerButton").click(validateForm);
        Main();
    }


        function clearForm()
        {
            $("#registerForm")[0].reset();
        }


    function validateLogin(event) {
        event.preventDefault();

        var username = $("input[name='username']").val();
        var password = $("input[name='password']").val();

        if (isValidLogin(username, password)) {
            
            insertUsername(username);
            console.log("Login successful!");
        } else {
            console.log("Invalid username or password");
        }
    }

    function isValidLogin(username, password) {
 
        var validUser = new User("Lab2", "Lab2");
        return username === validUser.username && password === validUser.password;
    }

    function insertUsername(username) {
        
        var usernameListItem = $('<li class="nav-item navbar-text">' + username + '</li>');
        $("#loginLogoutLink").before(usernameListItem);
    }

    function validateForm(event) {

        event.preventDefault();

        var firstName = $("input[name='firstName']").val();
        if (firstName.length < 2) {
            displayErrorMessage("First Name must be at least 2 characters");
            return;
        }

        var lastName = $("input[name='lastName']").val();
        if (lastName.length < 2) {
            displayErrorMessage("Last Name must be at least 2 characters");
            return;
        }
        
        var email = $("input[name='email']").val();
        if (email.length < 8 || email.indexOf('@') === -1) {
            displayErrorMessage("Email must be at least 8 characters long and contain '@'");
            return;
        }

        var password = $("input[name='password']").val();
        var confirmPassword = $("input[name='confirmPassword']").val();

        if (password.length < 6 || password !== confirmPassword) {
            displayErrorMessage("Passwords must match and be at least 6 characters long");
            return;
        }

        var user = new User(
            $("input[name='firstName']").val(),
            $("input[name='lastName']").val(),
            $("input[name='username']").val(),
            $("input[name='email']").val(),
            password
        );

        console.log("User Information:", user);
  
        hideErrorMessage();
        clearForm();
        console.log("Registration successful!");
    }
 
    function displayErrorMessage(message) {
       
        $("#ErrorMessage").text(message).show();
    }
    function hideErrorMessage() {
        
        $("#ErrorMessage").hide();
    }

    /**
     * Main Program entry point is here
     *
     */
    function Main()
    {
       
    }
    
    

    window.addEventListener("load", Start);
})(app || (app = {}));

