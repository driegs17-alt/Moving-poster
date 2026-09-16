// =========================================================
// POSTER LAB — INTERACTIVE COMPOSITION SYSTEM
// Every template uses the same HTML elements and controls.
// =========================================================

// Poster elements
const poster = document.getElementById("poster");
const word = document.getElementById("word");
const circle = document.getElementById("circle");
const posterNumber = document.getElementById("poster-number");
const posterKicker = document.getElementById("poster-kicker");
const posterDate = document.getElementById("poster-date");
const posterLocation = document.getElementById("poster-location");

// Interface elements
const templateSelect = document.getElementById("template-select");
const templateName = document.getElementById("template-name");
const templateDescription = document.getElementById("template-description");
const templateStatus = document.getElementById("template-status");
const resetButton = document.getElementById("reset-button");
const statusMessage = document.getElementById("status-message");

// Text and color inputs
const wordInput = document.getElementById("word-input");
const headlineColor = document.getElementById("headline-color");
const circleColor = document.getElementById("circle-color");
const posterColor = document.getElementById("poster-color");

// Headline inputs
const headlineX = document.getElementById("headline-x");
const headlineY = document.getElementById("headline-y");
const headlineScale = document.getElementById("headline-scale");
const headlineSpacing = document.getElementById("headline-spacing");
const headlineRotate = document.getElementById("headline-rotate");

// Shape inputs
const circleX = document.getElementById("circle-x");
const circleY = document.getElementById("circle-y");
const circleScale = document.getElementById("circle-scale");
const circleRotate = document.getElementById("circle-rotate");
const circleBorder = document.getElementById("circle-border");
const circleOpacity = document.getElementById("circle-opacity");

// Composition inputs
const posterPadding = document.getElementById("poster-padding");
const numberRotate = document.getElementById("number-rotate");

// Output elements
const headlineXOutput = document.querySelector("output[for='headline-x']");
const headlineYOutput = document.querySelector("output[for='headline-y']");
const headlineScaleOutput = document.querySelector("output[for='headline-scale']");
const headlineSpacingOutput = document.querySelector("output[for='headline-spacing']");
const headlineRotateOutput = document.querySelector("output[for='headline-rotate']");

const circleXOutput = document.querySelector("output[for='circle-x']");
const circleYOutput = document.querySelector("output[for='circle-y']");
const circleScaleOutput = document.querySelector("output[for='circle-scale']");
const circleRotateOutput = document.querySelector("output[for='circle-rotate']");
const circleBorderOutput = document.querySelector("output[for='circle-border']");
const circleOpacityOutput = document.querySelector("output[for='circle-opacity']");

const posterPaddingOutput = document.querySelector("output[for='poster-padding']");
const numberRotateOutput = document.querySelector("output[for='number-rotate']");

// Eight template presets. A template changes visual identity,
// while all slider variables remain reusable across every template.
const templates = {
  citrus: {
    order: "01 / 08",
    label: "Citrus FM",
    description: "Swiss-inspired color, oversized type, and neo-brutalist geometry.",
    headline: "CITRUS FM",
    kicker: "Independent Sound + Print Festival",
    date: "AUGUST 16–17 · 2026",
    location: "ATHENS, GEORGIA",
    number: "FM—26",
    colors: {
      poster: "#f9eb35",
      circle: "#ff4b30",
      headline: "#ffffff"
    }
  },
  velvet: {
    order: "02 / 08",
    label: "Velvet",
    description: "A nocturnal editorial system for club culture, fashion, and late-night sound.",
    headline: "VELVET",
    kicker: "After Dark / Volume 02",
    date: "FRIDAY 11PM — LATE",
    location: "ATHENS, GEORGIA",
    number: "02:AM",
    colors: {
      poster: "#170d22",
      circle: "#8c2cff",
      headline: "#fce8ff"
    }
  },
  signal: {
    order: "03 / 08",
    label: "Signal",
    description: "A fluorescent digital-rave identity built for speed, data, and nightlife.",
    headline: "SIGNAL",
    kicker: "Frequency / Motion / Night",
    date: "SYSTEM OPEN — 22:00",
    location: "ATHENS NODE / GA",
    number: "404",
    colors: {
      poster: "#07100e",
      circle: "#a6ff00",
      headline: "#a6ff00"
    }
  },
  archive: {
    order: "04 / 08",
    label: "Archive",
    description: "An analog exhibition system inspired by collections, artifacts, and print history.",
    headline: "ARCHIVE",
    kicker: "Objects / Images / Memory",
    date: "SEPTEMBER 04—28",
    location: "SOUTHERN PRINT ARCHIVE",
    number: "1984",
    colors: {
      poster: "#d9c5a2",
      circle: "#e8d8bc",
      headline: "#2a2118"
    }
  },
  mono: {
    order: "05 / 08",
    label: "Mono",
    description: "An international typographic system that uses contrast, grid, and reduction.",
    headline: "MONO",
    kicker: "International Typography Forum",
    date: "OCT 10 / 09:00—18:00",
    location: "HALL A / ATHENS",
    number: "05",
    colors: {
      poster: "#f4f2ed",
      circle: "#ffffff",
      headline: "#0a0a0a"
    }
  },
  orbit: {
    order: "06 / 08",
    label: "Orbit",
    description: "A speculative space-age system for future culture, science, and technology.",
    headline: "ORBIT",
    kicker: "Future Culture Observatory",
    date: "NOVEMBER 16 / 2086",
    location: "LOW EARTH ORBIT",
    number: "O—6",
    colors: {
      poster: "#090e2a",
      circle: "#7d5cff",
      headline: "#f6f1ff"
    }
  },
  studio: {
    order: "07 / 08",
    label: "Studio",
    description: "A restrained contemporary-gallery identity for design, architecture, and objects.",
    headline: "STUDIO",
    kicker: "Material / Form / Space",
    date: "OPENING / THURSDAY 7PM",
    location: "GALLERY 07 · ATHENS",
    number: "07",
    colors: {
      poster: "#e8e4dc",
      circle: "#b8a288",
      headline: "#1f1d1a"
    }
  },
  pulp: {
    order: "08 / 08",
    label: "Pulp",
    description: "A risograph-inspired indie-print identity with tactile color and playful energy.",
    headline: "PULP",
    kicker: "Small Press / Big Noise",
    date: "SATURDAY / 12—6PM",
    location: "THE PRINT YARD · ATHENS",
    number: "VOL.8",
    colors: {
      poster: "#f4d7bd",
      circle: "#f4cb3f",
      headline: "#23396b"
    }
  }
};

const templateClasses = [
  "template-citrus",
  "template-velvet",
  "template-signal",
  "template-archive",
  "template-mono",
  "template-orbit",
  "template-studio",
  "template-pulp"
];

// Reusable function: writes a formatted value below a slider.
function updateOutput(element, input, suffix = "") {
  element.textContent = input.value + suffix;
}

// Reusable function: changes text in any poster element.
function changeText(element, text) {
  element.textContent = text;
}

// Reusable function: changes an element's background color.
function changeBackgroundColor(element, color) {
  element.style.backgroundColor = color;
}

// Reusable function: changes an element's text color.
function changeTextColor(element, color) {
  element.style.color = color;
}

// Reusable function: moves, scales, and rotates the headline.
function updateHeadlineTransform() {
  word.style.transform =
    "translate(-50%, -50%) " +
    "translate(" + headlineX.value + "px, " + headlineY.value + "px) " +
    "scale(" + headlineScale.value + ") " +
    "rotate(" + headlineRotate.value + "deg)";
}

// Reusable function: moves, scales, and rotates the shape.
function updateCircleTransform() {
  circle.style.transform =
    "translate(" + circleX.value + "px, " + circleY.value + "px) " +
    "scale(" + circleScale.value + ") " +
    "rotate(" + circleRotate.value + "deg)";
}

// Reusable function: rotates the poster's background number.
function updateNumberRotation() {
  posterNumber.style.transform = "rotate(" + numberRotate.value + "deg)";
}

// Reusable function: updates every output label.
function updateAllOutputs() {
  updateOutput(headlineXOutput, headlineX, " px");
  updateOutput(headlineYOutput, headlineY, " px");
  updateOutput(headlineScaleOutput, headlineScale, "×");
  updateOutput(headlineSpacingOutput, headlineSpacing, " px");
  updateOutput(headlineRotateOutput, headlineRotate, "°");

  updateOutput(circleXOutput, circleX, " px");
  updateOutput(circleYOutput, circleY, " px");
  updateOutput(circleScaleOutput, circleScale, "×");
  updateOutput(circleRotateOutput, circleRotate, "°");
  updateOutput(circleBorderOutput, circleBorder, " px");
  circleOpacityOutput.textContent = Math.round(circleOpacity.value * 100) + "%";

  updateOutput(posterPaddingOutput, posterPadding, " px");
  updateOutput(numberRotateOutput, numberRotate, "°");
}

// Reusable function: applies all current input values to the poster.
function renderPoster() {
  changeText(word, wordInput.value || "POSTER LAB");
  changeBackgroundColor(poster, posterColor.value);
  changeBackgroundColor(circle, circleColor.value);
  changeTextColor(word, headlineColor.value);

  word.style.letterSpacing = headlineSpacing.value + "px";
  circle.style.borderWidth = circleBorder.value + "px";
  circle.style.opacity = circleOpacity.value;
  poster.style.padding = posterPadding.value + "px";

  updateHeadlineTransform();
  updateCircleTransform();
  updateNumberRotation();
  updateAllOutputs();
}

// Reusable function: applies one visual system and its content preset.
function applyTemplate(templateKey) {
  const selectedTemplate = templates[templateKey];

  poster.classList.remove(...templateClasses);
  poster.classList.add("template-" + templateKey);

  changeText(word, selectedTemplate.headline);
  changeText(posterKicker, selectedTemplate.kicker);
  changeText(posterDate, selectedTemplate.date);
  changeText(posterLocation, selectedTemplate.location);
  changeText(posterNumber, selectedTemplate.number);

  wordInput.value = selectedTemplate.headline;
  posterColor.value = selectedTemplate.colors.poster;
  circleColor.value = selectedTemplate.colors.circle;
  headlineColor.value = selectedTemplate.colors.headline;

  templateName.textContent = selectedTemplate.label.toUpperCase();
  templateDescription.textContent = selectedTemplate.description;
  templateStatus.textContent = selectedTemplate.order + " — " + selectedTemplate.label;
  statusMessage.textContent = "Template loaded: " + selectedTemplate.label + ".";

  renderPoster();
}

// Reusable function: restores the selected template's defaults.
function resetCurrentDesign() {
  applyTemplate(templateSelect.value);
  statusMessage.textContent = "Design reset to the " + templates[templateSelect.value].label + " preset.";
}

// Template selection
templateSelect.addEventListener("change", function () {
  applyTemplate(templateSelect.value);
});

resetButton.addEventListener("click", function () {
  resetCurrentDesign();
});

// Text and color controls
wordInput.addEventListener("input", renderPoster);
headlineColor.addEventListener("input", renderPoster);
circleColor.addEventListener("input", renderPoster);
posterColor.addEventListener("input", renderPoster);

// Headline controls
headlineX.addEventListener("input", renderPoster);
headlineY.addEventListener("input", renderPoster);
headlineScale.addEventListener("input", renderPoster);
headlineSpacing.addEventListener("input", renderPoster);
headlineRotate.addEventListener("input", renderPoster);

// Shape controls
circleX.addEventListener("input", renderPoster);
circleY.addEventListener("input", renderPoster);
circleScale.addEventListener("input", renderPoster);
circleRotate.addEventListener("input", renderPoster);
circleBorder.addEventListener("input", renderPoster);
circleOpacity.addEventListener("input", renderPoster);

// Composition controls
posterPadding.addEventListener("input", renderPoster);
numberRotate.addEventListener("input", renderPoster);

// Initialize the page with the selected visual system.
applyTemplate(templateSelect.value);
