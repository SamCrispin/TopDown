class Player {
    constructor(keys) {
        this.health = 100;
        this.pos = new Vector({x: 512, y: 512});
        this.keys = keys
    }

    setup() {
        this.render();
        this.controls = new Controls(this.keys);
    }

    render() {
        this.div = document.createElement("div");
        this.div.style.position = "absolute";
        this.div.style.left = this.pos.x + "px";
        this.div.style.bottom = this.pos.y + "px";
        this.div.style.width = "64px";
        this.div.style.height = "64px";
        this.div.style.backgroundImage = "url('assets/images/player.png')";

        document.getElementById("map").appendChild(this.div);
    }

    move() {
        if (this.controls.keysPressed.has(this.keys.left)) this.pos.acc.x = -3;
        if (this.controls.keysPressed.has(this.keys.right)) this.pos.acc.x = 3;
        if (this.controls.keysPressed.has(this.keys.up)) this.pos.acc.y = 3;
        if (this.controls.keysPressed.has(this.keys.down)) this.pos.acc.y = -3;
        if (this.controls.keysPressed.size === 0) this.pos.acc = Vector.mult(this.pos.acc, 0);
    }

    update() {
        this.move();
        this.pos.update();
        //console.log("x: " + this.pos.x + ", y: " + this.pos.y);
        //console.log("x: " + this.pos.acc.x + ", y: " + this.pos.acc.y);
        this.div.style.left = this.pos.x + "px";
        this.div.style.bottom = this.pos.y + "px";
    }
}