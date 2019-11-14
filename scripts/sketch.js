let player, level;

function setup() {
    player = new Player({left: "ArrowLeft", right: "ArrowRight", up: "ArrowUp", down: "ArrowDown"});
    level = new Level();
    createCanvas(1024,1024);
    level.setup();
}

function draw() {
    level.render();
    player.update();
}

function keyPressed() {
    player.keyPress()
}

function keyReleased() {
    player.keyRelease()
}