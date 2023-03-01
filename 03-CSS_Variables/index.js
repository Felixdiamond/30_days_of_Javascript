const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach((input) => {
  input.addEventListener("change", handleUpdate);
});

inputs.forEach((input) => {
  input.addEventListener("mousemove", handleUpdate);
});

function getRandomItem(arr) {

  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item;
}


var lightGradients = ["#00d2ff", "#FF5F6D", "#A40606", "#380036"];
var lightGradientsCompliment = ["#928DAB", "#FFC371", "#D98324", "#0CBABA"];





body.style.background = 'linear-gradient(45deg, ' + getRandomItem(lightGradients) + ', ' + getRandomItem(lightGradientsCompliment) +')';


function getRandomItem(arr) {

  // get random index value
  const randomIndex = Math.floor(Math.random() * arr.length);

  // get random item
  const item = arr[randomIndex];

  return item;
}


document.getElementById("base").addEventListener("change", function(event) {
  document.getElementsByClassName("highlight")[0].style.color = event.target.value;
  document.getElementsByClassName("highlight")[1].style.color = event.target.value;
  document.getElementsByTagName("img")[0].style.borderColor = event.target.value;
})