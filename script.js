// Welcome message
console.log("Urban Vogue Website Loaded");

// Alert welcome message
alert("Welcome to Urban Vogue!");

// Add to cart buttons
const buttons = document.querySelectorAll(".add-cart");

buttons.forEach(button => {

    button.addEventListener("click", () => {

        alert("Item added to cart!");

    });

});


function validateForm() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if(name === "" || email === "" || message === "") {

        alert("Please fill in all fields");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}


// =======================
// ADD TO CART BUTTONS
// =======================

const cartButtons = document.querySelectorAll(".add-cart");

cartButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert("Item added to cart!");

    });

});


// =======================
// LOGIN BUTTON
// =======================

const loginButton = document.querySelector(".login-btn");

if(loginButton){

    loginButton.addEventListener("click", () => {

        alert("Login Successful!");

    });

}


// =======================
// REGISTER BUTTON
// =======================

const registerButton = document.querySelector(".register-btn");

if(registerButton){

    registerButton.addEventListener("click", () => {

        alert("Registration Successful!");

    });

}

// =======================
// PLACE ORDER BUTTON
// =======================

const orderButton = document.querySelector(".order-btn");

if(orderButton){

    orderButton.addEventListener("click", () => {

        alert("Your order has been placed successfully!");

    });

}