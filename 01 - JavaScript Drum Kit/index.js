window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
});

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener('transitionend', function (e) {
    if (e.propertyName !== 'transform') {
        return;
    };
    this.classList.remove("playing");
}));


function forBtn(event) {
    const key = event.target;
    const audio = document.querySelector(`audio[data-key="${key.getAttribute("data-key")}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
}
