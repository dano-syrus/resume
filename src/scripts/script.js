document.onkeydown = function(event) {
    return false;
};

document.addEventListener("contextmenu", event => event.preventDefault());

particlesJS.load("particles-js", "./src/scripts/particles.json");
