const canvas = document.getElementById("draw");
const ctx = canvas.getContext("2d");

const palleteToggleBtn = document.querySelector(".show-palette");
const colorPalette = document.getElementById("colorPalette");
const gradientSwitch = document.getElementById("gradientSwitch");
const colorPicker = document.getElementById("colorPicker");
const brushSettingsBtn = document.querySelector(".brush-settings");
const rangeInput = document.getElementById("rangeInput");
const brushMenuBtn = document.querySelector(".brush-menu");
const pencilButton = document.getElementById("pencilButton");
const markerButton = document.getElementById("markerButton");
const penButton = document.getElementById("penButton");
const brushButton = document.getElementById("brushButton");
const pencill = document.querySelector(".pencill");
const markerr = document.querySelector(".markerr");
const penn = document.querySelector(".penn");
const brushh = document.querySelector(".brushh");
var isErasing = false

canvas.width = (window.innerWidth - ((25 / 100) * window.innerWidth));
canvas.height = (window.innerHeight - ((30 / 100) * window.innerHeight));

let drawingColor = "#000000";

ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 7;
// ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;

let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

function toggleRange() {
  if (brushMenuBtn.style.display === "none") {
    colorPalette.style.display = "none";
    brushMenuBtn.style.display = "flex";
  } else {
    brushMenuBtn.style.display = "none";
  }
}

function togglePalette() {
  if (colorPalette.style.display === "none") {
    brushMenuBtn.style.display = "none";
    colorPalette.style.display = "flex";
  } else {
    colorPalette.style.display = "none";
  }
}

function getRange() {
  return rangeInput.value;
}

rangeInput.addEventListener("change", () => {
  currentTool = 0;
  ctx.lineWidth = getRange();
});

function toggleColorPicker() {
  if (gradientSwitch.checked) {
    colorPicker.disabled = true;
  } else {
    colorPicker.disabled = false;
  }
}

function getColor() {
  return colorPicker.value;
}

function isGradientChecked() {
  return gradientSwitch.checked;
}

brushSettingsBtn.addEventListener("click", () => {
  toggleRange();
});

// Set up the pencil tool
var pencil = {
  size: 1,
  color: "black",
  strokeWeight: 3,
  endPointStyle: "round",
  lineStyle: "solid",
};

// Set up the marker tool
var marker = {
  size: 5,
  color: "red",
  opacity: 0.8,
  blendingMode: "multiply",
};

// Set up the pen tool
var pen = {
  size: 3,
  color: "blue",
  endPointStyle: "round",
};

var brush = {
  size: 20,
  endPointStyle: "round",
}

// Set the current tool to the pencil tool
var currentTool = brush;

// Set up event listeners for the tool buttons
pencilButton.addEventListener("click", function () {
  // Switch to the pencil tool when the pencil button is clicked
  currentTool = pencil;
  this.classList.toggle("active");
  pencill.classList.toggle("active");
  markerButton.classList.remove("active");
  penButton.classList.remove("active");
  brushButton.classList.remove("active");
  markerr.classList.remove("active");
  penn.classList.remove("active");
  brushh.classList.remove("active");
});

markerButton.addEventListener("click", function () {
  // Switch to the marker tool when the marker button is clicked
  this.classList.toggle("active");
  markerr.classList.toggle("active");
  currentTool = marker;
  pencilButton.classList.remove("active");
  penButton.classList.remove("active");
  brushButton.classList.remove("active");
  pencill.classList.remove("active");
  penn.classList.remove("active");
  brushh.classList.remove("active");
});

penButton.addEventListener("click", function () {
  // Switch to the pen tool when the pen button is clicked
  this.classList.toggle("active");
  penn.classList.toggle("active");
  currentTool = pen;
  pencilButton.classList.remove("active");
  markerButton.classList.remove("active");
  brushButton.classList.remove("active");
  pencill.classList.remove("active");
  markerr.classList.remove("active");
  brushh.classList.remove("active");
});

brushButton.addEventListener("click", function () {
  // Switch to the pen tool when the pen button is clicked
  this.classList.toggle("active");
  brushh.classList.toggle("active");
  currentTool = brush;
  pencilButton.classList.remove("active");
  markerButton.classList.remove("active");
  penButton.classList.remove("active");
  pencill.classList.remove("active");
  markerr.classList.remove("active");
  penn.classList.remove("active");
});

const draw = (e) => {
  if (!isDrawing) return;
  if (currentTool == pencil) {
    ctx.strokeStyle = isGradientChecked()
      ? `hsl(${hue}, 100%, 50%)`
      : currentTool.color;
    ctx.lineWidth = currentTool.size;
    ctx.lineCap = currentTool.endPointStyle;
    ctx.setLineDash(currentTool.lineStyle === "dashed" ? [5, 5] : []);
  } else if (currentTool == marker) {
    ctx.strokeStyle = isGradientChecked()
      ? `hsl(${hue}, 100%, 50%)`
      : currentTool.color;
    ctx.lineWidth = currentTool.size;
    ctx.globalAlpha = currentTool.opacity;
    ctx.globalCompositeOperation = currentTool.blendingMode;
  } else if (currentTool == pen) {
    ctx.lineWidth = currentTool.size;
    ctx.strokeStyle = isGradientChecked()
      ? `hsl(${hue}, 100%, 50%)`
      : currentTool.color;
    ctx.lineCap = currentTool.endPointStyle;
  } else if (currentTool == brush) {
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.lineWidth = currentTool.size;
    ctx.strokeStyle = isGradientChecked() ? `hsl(${hue}, 100%, 50%)` : getColor();
    ctx.lineCap = currentTool.endPointStyle;
  }
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
};

canvas.addEventListener("mousedown", (e) => {
  if (isErasing) {
    erase(e.clientX, e.clientY, getRange());
  } else {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
    saveCanvasState();
  }
});


canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => (isDrawing = false));
canvas.addEventListener("mouseout", () => (isDrawing = false));

// Get the toolbar and items
const toolbar = document.querySelector(".toolbar");
const items = document.querySelector(".items");

// Add a click event listener to the toolbar
toolbar.addEventListener("click", () => {
  // Toggle the active class on the toolbar and items
  brushMenuBtn.style.display = "none";
  colorPalette.style.display = "none";
  toolbar.classList.toggle("active");
  items.classList.toggle("active");
});

const saveBtn = document.querySelector(".save-me");
const loadBtn = document.querySelector(".load-me");

// Add a click event listener to the save button
saveBtn.addEventListener("click", () => {
  // Get the current date and time
  const now = new Date();
  const timestamp = now
    .toISOString()
    .slice(0, 19)
    .replace(/-/g, "")
    .replace(/:/g, "");

  // Convert the canvas to a data URL
  const dataURL = canvas.toDataURL();

  // Create a new link element
  const link = document.createElement("a");

  // Set the href of the link to the data URL
  link.href = dataURL;

  // Set the download attribute of the link to "nineDraws-<timestamp>.png"
  link.download = `nineDraws-${timestamp}.png`;

  // Append the link to the document
  document.body.appendChild(link);

  // Click the link to trigger the download
  link.click();

  // Remove the link from the document
  document.body.removeChild(link);
});

// Add a click event listener to the load button
loadBtn.addEventListener("click", () => {
  // Create a new input element of type "file"
  const input = document.createElement("input");
  input.type = "file";

  // Add a change event listener to the input
  input.addEventListener("change", () => {
    // Create a new FileReader object
    const reader = new FileReader();

    // Add a load event listener to the reader
    reader.addEventListener("load", () => {
      // Create a new image element
      const img = new Image();

      // Set the source of the image to the result of the reader
      img.src = reader.result;

      // Add a load event listener to the image
      img.addEventListener("load", () => {
        // Draw the image on the canvas
        ctx.drawImage(img, 0, 0);
      });
    });

    // Read the file as a data URL
    reader.readAsDataURL(input.files[0]);
  });

  // Click the input element to trigger the file selection dialog
  input.click();
});

// Initialize an empty array to store the canvas states
const canvasStates = [];

// Initialize the current state index to -1
let currentStateIndex = -1;

// Add a function to save the current canvas state
function saveCanvasState() {
  // Increment the current state index
  currentStateIndex++;

  // Remove any states after the current state index
  canvasStates.splice(currentStateIndex);

  // Push the current canvas state to the array
  canvasStates.push(canvas.toDataURL());
}

// Add a function to undo the last action
function undo() {
  // Check if the current state index is greater than 0
  if (currentStateIndex > 0) {
    // Decrement the current state index
    currentStateIndex--;

    // Create a new image element
    const img = new Image();

    // Set the source of the image to the previous canvas state
    img.src = canvasStates[currentStateIndex];

    // Add a load event listener to the image
    img.addEventListener("load", () => {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the image on the canvas
      ctx.drawImage(img, 0, 0);
    });
  }
}

// Add a function to redo the last undone action
function redo() {
  // Check if the current state index is less than the last index of the canvas states array
  if (currentStateIndex < canvasStates.length - 1) {
    // Increment the current state index
    currentStateIndex++;

    // Create a new image element
    const img = new Image();

    // Set the source of the image to the next canvas state
    img.src = canvasStates[currentStateIndex];

    // Add a load event listener to the image
    img.addEventListener("load", () => {
      // Clear the canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw the image on the canvas
      ctx.drawImage(img, 0, 0);
    });
  }
}

// Add a keydown event listener to the document
document.addEventListener("keydown", (event) => {
  // Check if the Ctrl key is pressed and the Z key is pressed
  if (event.ctrlKey && event.key === "z") {
    // Prevent the default behavior of the event
    event.preventDefault();

    // Undo the last action
    undo();
  }

  // Check if the Ctrl key is pressed and the Y key is pressed
  if (event.ctrlKey && event.key === "y") {
    // Prevent the default behavior of the event
    event.preventDefault();

    // Redo the last undone action
    redo();
  }
});

const redoEle = document.querySelector(".redo-me");
const undoEle = document.querySelector(".undo-me");

redoEle.addEventListener("click", () => {
  redo();
});

undoEle.addEventListener("click", () => {
  undo();
});

const clearBtn = document.querySelector(".clear-me");

clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

palleteToggleBtn.addEventListener("click", () => {
  togglePalette();
});



function erase(x, y, size) {
  ctx.save();
  ctx.beginPath();
  ctx.arc(x, y, size / 2, 0, 2 * Math.PI);
  ctx.clip();
  ctx.clearRect(x - size / 2, y - size / 2, size, size);
  ctx.restore();
}

const eraser = document.querySelector(".erase-me");

eraser.addEventListener("click", () => {
  isErasing = true
});

canvas.addEventListener("mousemove", function (e) {
  // Erase on the canvas when the mouse is moved
  if (isErasing) {
    erase(e.clientX, e.clientY, brush.size);
  }
});

canvas.addEventListener("mouseup", function (e) {
  // Stop erasing when the mouse button is released
  isErasing = false;
});


const notification = document.querySelector("#notification");

function showNotification() {
  notification.style.display = "block";
  setTimeout(() => {
    notification.style.display = "none";
  }, 2000);
}

eraser.addEventListener("click", () => {
  isErasing = true;
  showNotification();
});
