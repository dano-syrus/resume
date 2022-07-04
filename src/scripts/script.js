document.onkeydown = (event) => {
    return false;
};

emitter.setMaxListeners();

document.addEventListener("contextmenu", async (event) => {
    event.preventDefault();
});
