class Controls {
    constructor(keys) {
        this.keys = this.assignKeys(keys);
        this.keysPressed = new Set();
        document.addEventListener("keydown", this.keydown.bind(this), false);
        document.addEventListener("keyup", this.keyup.bind(this), false);
    }

    assignKeys(keys) {
        let objVals = Object.values(keys),
            ret = {};
        for (let val of objVals) {
            ret[val] = true;
        }
        return ret;
    }

    keydown(e) {
        if (this.keys[e.key]) this.keysPressed.add(e.key);
        console.log("keydown: ", e.key)
    }

    keyup(e) {
        if (this.keys[e.key]) this.keysPressed.delete(e.key);
        console.log("keyup: ", e.key)
    }
}