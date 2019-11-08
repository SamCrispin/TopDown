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
        this.renderLevel();
    }

    initialise() {
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                let mapVal = this.map[i][j];
                this.map[i][j] = new Cell(cells[mapVal]);
            }
        }
    }

    renderLevel() {
        let div;
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                div = document.createElement("div");
                div.style.width = this.cellSize + "px";
                div.style.height = this.cellSize + "px";
                div.style.left = i * this.cellSize + "px";
                div.style.top = j * this.cellSize + "px";
                div.style.backgroundImage = this.map[i][j].bgImage;
                div.className = "mapCell";

                document.getElementById("map").appendChild(div);
            }
        }
    }
}