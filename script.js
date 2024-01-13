const colors = [
                "yellow", "green", "red", "#F15025", "rgba(240,255,255)",
                "bluelight", "brown", "orange", "#F15025", "rgba(133, 122, 200)",
                "#FF00FF", "#00FFFF", "#800080", "#008080", "rgba(240,248,255)",
                "#ff7f50", "#dc143c", "#00ffff", "#ff1493", "#008000",	"#adff2f", 
                "#d3d3d3", "#ff8c00", "rgba(255,160,122)", "rgba(224,255,255)", "rgba(211,211,211)",
                "rgba(85,107,47)", "rgba(0,0,139)", "rgba(184,134,11)", "rgba(139,0,139)", 
                "rgba(0,255,0)", "darkgrey", "darkmagenta", "darkkhaki", "darkseagreen", "darksalmon", "darkred", "aquamarine", "blue", "chartreuse", "crimson",
              ];

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