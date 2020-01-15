class Cell {
    constructor({bgImage, traversable, col}) {
        this.entities = [];
        this.traversable = traversable;
        this.bgImage = bgImage;
        this.col = col;
    }

    static getCorners(x, y) {
        return {
            topLeft: {x: x * level.cellSize, y: y * level.cellSize},
            topRight: {x: (x + 1) * level.cellSize, y: y * level.cellSize},
            botRight: {x: (x + 1) * level.cellSize, y: (y + 1) * level.cellSize},
            botLeft: {x: x * level.cellSize, y: (y + 1) * level.cellSize}
        }
    }

    static corners = {
        topLeft: ["topRight", "botLeft"],
        topRight: ["topLeft", "botRight"],
        botRight: ["topRight", "botLeft"],
        botLeft: ["topLeft", "botRight"]
    }
}
