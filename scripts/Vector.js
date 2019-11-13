class Vector {
    constructor({x, y}, maxVel = 5, maxAcc = 3) {
        this.x = x;
        this.y = y;
        this.vel = {x: 0, y: 0};
        this.maxVel = maxVel;
        this.acc = {x: 0, y: 0};
        this.maxAcc = maxAcc;
    }

    get mag() {
        return Math.sqrt(this.vel.x*this.vel.x + this.vel.y*this.vel.y);
    }

    get angle() {
        return Math.atan(this.vel.y / this.vel.x);
    }

    update()  {
        this.vel.x += this.acc.x;
        this.vel.y += this.acc.y;

        this.x += this.vel.x;
        this.y += this.vel.y;
    }

    collisionDetection(width, height) {
        if (!Level.getCellAtPos(this.x + width, this.y).traversable) {
            this.x -= (this.x + width) % level.cellSize;
            this.vel.x = -this.vel.x;
        } else if (!Level.getCellAtPos(this.x - width, this.y).traversable) {
            this.x += (this.x - width) % level.cellSize;
            this.vel.x = -this.vel.x;
        }
        if (!Level.getCellAtPos(this.x, this.y + height).traversable) {
            this.y -= (this.y + width) % level.cellSize;
            this.vel.y = -this.vel.y;
        } else if (!Level.getCellAtPos(this.x, this.y - height).traversable) {
            this.y += (this.y - width) % level.cellSize;
            this.vel.y = -this.vel.y;
        }
    }

    normaliseVel() {
        if (this.mag > this.maxVel) {
            this.vel = Vector.mult(this.vel, this.maxVel/this.mag);
        }
    }

    normaliseAcc() {
        let mag = Math.sqrt(this.vel.x*this.vel.x + this.vel.y*this.vel.y);
        if (mag > this.maxAcc) {
            this.acc = Vector.mult(this.acc, this.maxAcc/mag);
        }
    }

    static dist(v1, v2) {
        return Math.sqrt((v1.x - v2.x)*(v1.x - v2.x) + (v1.y - v2.y)*(v1.y - v2.y))
    }

    static angle(v1, v2) {
        let res = Math.atan2(v2.y-v1.y, v2.x-v1.x);
        return (res < 0) ? res + Math.PI * 2 : res;
    }

    static mult(o, scalar) {
        return {x: o.x * scalar, y: o.y * scalar};
    }
}