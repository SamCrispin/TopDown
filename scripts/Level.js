class Level {
    constructor() {
        this.cellSize = 64;
        this.map = levels["1"];
        this.width = this.map.length;
        this.height = this.map[0].length;
        this.size = this.width * this.height;
        this.renderLevel();
    }

    genMap() {
        let arr = [];
        for (let i = 0; i < this.size; i++) {
            arr[i] = {};
        }
        return arr;
    }

    pos(x, y) {
        return this.map[y * this.width + x];
    }

    renderLevel() {
        let div;
        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                div = document.createElement("div");
                div.style.width = this.cellSize + "px";
                div.style.height = this.cellSize + "px";
                div.style.left = (i % this.width) * this.cellSize + "px";
                div.style.top = ((i / this.width) >> 0) * this.cellSize + "px";
                div.className = "mapCell";
                div.style.backgroundImage = cells[this.map[i][j]];

                document.getElementById("map").appendChild(div);
            }
        }
    }
}