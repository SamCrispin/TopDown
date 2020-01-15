class Level {
    constructor() {
        this.cellSize = 64;
        this.data = levels["1"];
        this.width = this.data.length;
        this.height = this.data[0].length;
        this.size = this.width * this.height;
    }

    setup() {
        this.initialise();
    }

    initialise() {
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                let mapVal = this.data[j][i];
                this.data[j][i] = new Cell(cells[mapVal]);
            }
        }
    }

    render() {
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                fill(this.data[i][j].col);
                noStroke();
                square(j * this.cellSize, i * this.cellSize, this.cellSize)
            }
        }
    }

    static getCellAtPos(vec) {
        return level.data[Math.floor(vec.y / level.cellSize)][Math.floor(vec.x / level.cellSize)];
    }
}