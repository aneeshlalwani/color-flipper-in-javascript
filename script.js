const colors = ["yellow", "green", "red", "#F15025", "rgba(133, 122, 200)"];

// Getting Elements
const button = document.getElementById("btn");
const color = document.querySelector(".color");

button.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * colors.length);
    console.log(randomNumber);
     document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return 
}