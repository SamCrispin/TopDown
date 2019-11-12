class GameLoop {
    start() {
        this.loop = setInterval(this.loopFunc, 20)
    }

    stop() {
        clearInterval(this.loop);
    }

    loopFunc() {
        player.update();
        //move entities
        //render
    }
}