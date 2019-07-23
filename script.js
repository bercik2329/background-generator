var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");

body.style.background =
  "linear-gradient(to right," + color1.value + "," + color2.value;
+")";

css.textContent = body.style.background + ";";

var button = document.createElement("button");
document.body.appendChild(button);
button.textContent = "Wylosuj Gradient";

function random_rgb() {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return "rgba(" + o(r() * s) + "," + o(r() * s) + "," + o(r() * s) + ")";
}

var color = random_rgb();

function randomGradient() {
  body.style.background =
    "linear-gradient(to right," + random_rgb() + "," + random_rgb();
  +")";
  css.textContent = body.style.background + ";";
}

function bodyChangeColor() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + "," + color2.value;
  +")";

  css.textContent = body.style.background + ";";
}

color1.addEventListener("input", bodyChangeColor);

color2.addEventListener("input", bodyChangeColor);

button.addEventListener("click", randomGradient);
