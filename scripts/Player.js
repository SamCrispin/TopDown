class Player {
    constructor() {
        this.health = 100;
        this.speed = 5;
        this.width = 20;
        this.height = 40;
        this.x = 512;
        this.y = 512;
    }

    get pos() {
        return {x: this.x, y: this.y}
    }
}