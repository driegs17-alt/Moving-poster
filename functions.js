// Get the poster elements
const poster = document.getElementById("poster");
const headline = document.getElementById("headline");
const circle = document.getElementById("circle");

// Get the input elements
const headlineInput = document.getElementById("headlineInput");
const textColor = document.getElementById("textColor");
const backgroundColor = document.getElementById("backgroundColor");
const circleColor = document.getElementById("circleColor");

const sizeInput = document.getElementById("sizeInput");
const xInput = document.getElementById("xInput");
const yInput = document.getElementById("yInput");
const rotateInput = document.getElementById("rotateInput");
const skewInput = document.getElementById("skewInput");

// Reusable function: changes an element's color
function changeColor(element, color) {
  element.style.color = color;
}

// Reusable function: changes an element's background color
function changeBackground(element, color) {
  element.style.backgroundColor = color;
}

// Reusable function: updates the text inside an element
function changeText(element, text) {
  element.textContent = text;
}

// Reusable function: updates number labels beside sliders
function updateValueLabel(labelId, value, unit) {
  document.getElementById(labelId).textContent = value + unit;
}

// Reusable function: moves, rotates, and skews the headline
function transformHeadline() {
  const x = xInput.value;
  const y = yInput.value;
  const rotation = rotateInput.value;
  const skew = skewInput.value;

  headline.style.transform =
    `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))
     rotate(${rotation}deg)
     skewX(${skew}deg)`;
}

// Text field interaction
headlineInput.addEventListener("input", function () {
  changeText(headline, headlineInput.value || "MIDNIGHT");
});

// Color picker interactions
textColor.addEventListener("input", function () {
  changeColor(headline, textColor.value);
});

backgroundColor.addEventListener("input", function () {
  changeBackground(poster, backgroundColor.value);
});

circleColor.addEventListener("input", function () {
  changeBackground(circle, circleColor.value);
});

// Text-size slider interaction
sizeInput.addEventListener("input", function () {
  headline.style.fontSize = sizeInput.value + "px";
  updateValueLabel("sizeValue", sizeInput.value, "px");
});

// Position, rotation, and skew slider interactions
xInput.addEventListener("input", function () {
  transformHeadline();
  updateValueLabel("xValue", xInput.value, "px");
});

yInput.addEventListener("input", function () {
  transformHeadline();
  updateValueLabel("yValue", yInput.value, "px");
});

rotateInput.addEventListener("input", function () {
  transformHeadline();
  updateValueLabel("rotateValue", rotateInput.value, "°");
});

skewInput.addEventListener("input", function () {
  transformHeadline();
  updateValueLabel("skewValue", skewInput.value, "°");
});