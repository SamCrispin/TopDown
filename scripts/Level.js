class Level {
    constructor() {
        this.cellSize = 64;
        this.map = levels["1"];
        this.width = this.map.length;
        this.height = this.map[0].length;
        this.size = this.width * this.height;
    }

    setup() {
        this.initialise();
    }

    initialise() {
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                let mapVal = this.map[i][j];
                this.map[i][j] = new Cell(cells[mapVal]);
            }
        }
    }

    render() {
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                fill(level.map[i][j].col);
                noStroke();
                rect(i*this.cellSize, j * this.cellSize, this.cellSize, this.cellSize)
            }
        }
    }

    static getCellAtPos(x, y) {
        return cells[level.map[Math.floor(x / level.cellSize)][Math.floor(y / level.cellSize)]]
    }
}