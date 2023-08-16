const canvas = document.getElementById("draw");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#BADA55";
ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = 35;
// ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;

let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

const draw = (e) => {
  if (!isDrawing) return;
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
};

canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
  saveCanvasState();
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