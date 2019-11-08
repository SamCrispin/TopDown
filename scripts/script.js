const player = new Player();
const level = new Level();
const loop = new GameLoop();
//loop.start();

let setup = () => {
    level.setup();
};

window.onload = setup;