// Parts of the poster we change
let poster = document.getElementById("poster");
let word = document.getElementById("word");
let circle = document.getElementById("circle");
let posterNumber = document.getElementById("poster-number");

// Inputs
let wordInput = document.getElementById("word-input");
let posterColor = document.getElementById("poster-color");
let circleColor = document.getElementById("circle-color");
let headlineColor = document.getElementById("headline-color");

let headlineX = document.getElementById("headline-x");
let headlineY = document.getElementById("headline-y");
let headlineScale = document.getElementById("headline-scale");

let circleX = document.getElementById("circle-x");
let circleY = document.getElementById("circle-y");
let circleScale = document.getElementById("circle-scale");

let numberRotate = document.getElementById("number-rotate");

// Outputs that display the slider values
let headlineXOutput = document.querySelector("output[for='headline-x']");
let headlineYOutput = document.querySelector("output[for='headline-y']");
let headlineScaleOutput = document.querySelector("output[for='headline-scale']");

let circleXOutput = document.querySelector("output[for='circle-x']");
let circleYOutput = document.querySelector("output[for='circle-y']");
let circleScaleOutput = document.querySelector("output[for='circle-scale']");

let numberRotateOutput = document.querySelector("output[for='number-rotate']");

// Reusable function: updates the visible output below each slider
function updateOutput(element, input) {
  element.textContent = input.value;
}

// Reusable function: changes poster text
function changeText(element, textInput) {
  element.textContent = textInput.value;
}

// Reusable function: changes an element's background color
function changeBackgroundColor(element, colorInput) {
  element.style.backgroundColor = colorInput.value;
}

// Reusable function: changes an element's text color
function changeTextColor(element, colorInput) {
  element.style.color = colorInput.value;
}

// Reusable function: moves an object based on two range sliders
function changePosition(element, xInput, yInput) {
  element.style.transform =
    "translate(" + xInput.value + "px, " + yInput.value + "px)";
}

// Reusable function: moves and scales an object
function changePositionAndScale(element, xInput, yInput, scaleInput) {
  element.style.transform =
    "translate(" + xInput.value + "px, " + yInput.value + "px) " +
    "scale(" + scaleInput.value + ")";
}

// Reusable function: rotates an object
function changeRotation(element, rotationInput) {
  element.style.transform =
    "rotate(" + rotationInput.value + "deg)";
}

// Text input changes the word on the poster
wordInput.addEventListener("input", function () {
  changeText(word, wordInput);
});

// Color inputs change real poster elements
posterColor.addEventListener("input", function () {
  changeBackgroundColor(poster, posterColor);
});

circleColor.addEventListener("input", function () {
  changeBackgroundColor(circle, circleColor);
});

headlineColor.addEventListener("input", function () {
  changeTextColor(word, headlineColor);
});

// HEADLINE SLIDERS: manipulate the large word
headlineX.addEventListener("input", function () {
  changePositionAndScale(word, headlineX, headlineY, headlineScale);
  updateOutput(headlineXOutput, headlineX);
});

headlineY.addEventListener("input", function () {
  changePositionAndScale(word, headlineX, headlineY, headlineScale);
  updateOutput(headlineYOutput, headlineY);
});

headlineScale.addEventListener("input", function () {
  changePositionAndScale(word, headlineX, headlineY, headlineScale);
  updateOutput(headlineScaleOutput, headlineScale);
});

// CIRCLE SLIDERS: manipulate the red circle
circleX.addEventListener("input", function () {
  changePositionAndScale(circle, circleX, circleY, circleScale);
  updateOutput(circleXOutput, circleX);
});

circleY.addEventListener("input", function () {
  changePositionAndScale(circle, circleX, circleY, circleScale);
  updateOutput(circleYOutput, circleY);
});

circleScale.addEventListener("input", function () {
  changePositionAndScale(circle, circleX, circleY, circleScale);
  updateOutput(circleScaleOutput, circleScale);
});

// NUMBER SLIDER: rotates the background graphic
numberRotate.addEventListener("input", function () {
  changeRotation(posterNumber, numberRotate);
  updateOutput(numberRotateOutput, numberRotate);
});

// Apply the default slider values when the page first loads
changePositionAndScale(word, headlineX, headlineY, headlineScale);
changePositionAndScale(circle, circleX, circleY, circleScale);
changeRotation(posterNumber, numberRotate);

updateOutput(headlineXOutput, headlineX);
updateOutput(headlineYOutput, headlineY);
updateOutput(headlineScaleOutput, headlineScale);

updateOutput(circleXOutput, circleX);
updateOutput(circleYOutput, circleY);
updateOutput(circleScaleOutput, circleScale);

updateOutput(numberRotateOutput, numberRotate);