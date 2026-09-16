// Poster elements
const poster = document.getElementById("poster");
const headline = document.getElementById("headline");
const circle = document.getElementById("circle");

// Input elements
const headlineInput = document.getElementById("headlineInput");
const textColor = document.getElementById("textColor");
const backgroundColor = document.getElementById("backgroundColor");
const circleColor = document.getElementById("circleColor");

const sizeInput = document.getElementById("sizeInput");
const xInput = document.getElementById("xInput");
const yInput = document.getElementById("yInput");
const rotateInput = document.getElementById("rotateInput");
const skewInput = document.getElementById("skewInput");

// Reusable function: changes text content
function changeText(element, text) {
  element.textContent = text;
}

// Reusable function: changes text color
function changeColor(element, color) {
  element.style.color = color;
}

// Reusable function: changes background color
function changeBackground(element, color) {
  element.style.backgroundColor = color;
}

// Reusable function: changes the small value display
function showValue(elementId, value, unit) {
  document.getElementById(elementId).textContent = value + unit;
}

// Reusable function:
// Reads ALL slider values and applies them to the headline.
function updateHeadline() {
  const size = sizeInput.value;
  const x = xInput.value;
  const y = yInput.value;
  const rotation = rotateInput.value;
  const skew = skewInput.value;

  headline.style.fontSize = size + "px";

  headline.style.transform =
    "translate(-50%, -50%) " +
    "translate(" + x + "px, " + y + "px) " +
    "rotate(" + rotation + "deg) " +
    "skewX(" + skew + "deg)";

  showValue("sizeValue", size, "px");
  showValue("xValue", x, "px");
  showValue("yValue", y, "px");
  showValue("rotateValue", rotation, "°");
  showValue("skewValue", skew, "°");
}

// Text-field interaction
headlineInput.addEventListener("input", function () {
  if (headlineInput.value === "") {
    changeText(headline, "MIDNIGHT");
  } else {
    changeText(headline, headlineInput.value);
  }
});

// Color-picker interactions
textColor.addEventListener("input", function () {
  changeColor(headline, textColor.value);
});

backgroundColor.addEventListener("input", function () {
  changeBackground(poster, backgroundColor.value);
});

circleColor.addEventListener("input", function () {
  changeBackground(circle, circleColor.value);
});

// Every slider calls the SAME reusable update function
sizeInput.addEventListener("input", updateHeadline);
xInput.addEventListener("input", updateHeadline);
yInput.addEventListener("input", updateHeadline);
rotateInput.addEventListener("input", updateHeadline);
skewInput.addEventListener("input", updateHeadline);

// Apply the default slider settings as soon as the poster loads
updateHeadline();