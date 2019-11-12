const player = new Player({left: "ArrowLeft", right: "ArrowRight", up: "ArrowUp", down: "ArrowDown"});
const level = new Level();
const loop = new GameLoop();

let setup = () => {
    level.setup();
    player.setup();
    loop.start();
};

window.onload = setup;