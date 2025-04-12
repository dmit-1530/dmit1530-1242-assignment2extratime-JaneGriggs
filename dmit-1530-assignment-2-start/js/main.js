// Add an event listener to the toggle button class
let toggleButton = document.querySelector(".toggle-btn");

// Add the event listener on a click to the toggle-btn by selecting the menu class and adding the toggle to the class 'expanded' with the menu 
toggleButton.addEventListener("click", () => {
    document.querySelector(".menu").classList.toggle("expanded")
})

// Add an event listener to the shop button class
let shopButton = document.querySelector(".toggling");

// Add the event listener on a click to the shop-btn by selecting the menu class and adding the toggle to the class 'expanded' with the menu 
shopButton.addEventListener("click", () => {
    document.querySelector(".collapsed").classList.toggle("expanded")
})