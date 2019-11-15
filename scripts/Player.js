class Player {
    constructor(keys) {
        this.health = 100;
        this.pos = createVector(512, 512);
        this.vel = createVector(0, 0);
        this.acc = createVector(0, 0);
        this.width = 30;
        this.height = 30;
        this.keys = keys;
        this.keysPressed = new Set();
        this.maxVel = 10;
        this.maxAcc = 2;
    }

    render() {
        fill("black");
        ellipse(this.pos.x, this.pos.y, this.width, this.height)
    }

    move() {
        let xPressed = false, yPressed = false;
        this.acc.set(0);
        for (let pressed of this.keysPressed) {
            switch (pressed) {
                case this.keys.left:
                    this.acc.x -= this.maxAcc;
                    xPressed = true;
                    break;
                case this.keys.right:
                    this.acc.x += this.maxAcc;
                    xPressed = true;
                    break;
                case this.keys.up:
                    this.acc.y -= this.maxAcc;
                    yPressed = true;
                    break;
                case this.keys.down:
                    this.acc.y += this.maxAcc;
                    yPressed = true;
                    break;
            }
        }
        if (this.keysPressed.size === 0) {
            this.acc = p5.Vector.mult(this.vel, -1)
        } else if (!xPressed) {
            this.acc.x = this.vel.x * -1
        } else if (!yPressed) {
            this.acc.y = this.vel.y * -1
        }
        this.acc.limit(this.maxAcc);
        this.vel.add(this.acc);
        this.vel.limit(this.maxVel);
        this.collide();
        this.pos.add(this.vel);
    }

    collide() {
        let v = this.pos.copy();
        v.add(this.vel.x + this.width/2, 0);
        if (!Level.getCellAtPos(v).traversable) this.vel.x = 0;

        v = this.pos.copy();
        v.add(this.vel.x - this.width/2, 0);
        if (!Level.getCellAtPos(v).traversable) this.vel.x = 0;

        v = this.pos.copy();
        v.add(0, this.vel.y + this.height/2);
        if (!Level.getCellAtPos(v).traversable) this.vel.y = 0;

        v = this.pos.copy();
        v.add(0, this.vel.y - this.height/2);
        if (!Level.getCellAtPos(v).traversable) this.vel.y = 0;
    }

    keyPress() {
        if (Object.values(this.keys).includes(key)) this.keysPressed.add(key);
    }

    keyRelease() {
        this.keysPressed.delete(key);
    }

    update() {
        this.move();
        this.render();
    }
}

//TODO: circular square collision