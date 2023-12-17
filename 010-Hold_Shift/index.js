const checkboxes = Array.from(document.querySelectorAll('.inbox input[type="checkbox"]'));
let lastCheckedIndex;

function runCheck(e) {
  if (e.shiftKey && this.checked) {
    const currentIndex = checkboxes.indexOf(this);
    const min = Math.min(lastCheckedIndex, currentIndex);
    const max = Math.max(lastCheckedIndex, currentIndex);
    checkboxes.slice(min, max + 1).forEach(checkbox => checkbox.checked = true);
  }
  lastCheckedIndex = checkboxes.indexOf(this);
}

checkboxes.forEach((checkbox, index) => {
  checkbox.addEventListener("click", runCheck);
});