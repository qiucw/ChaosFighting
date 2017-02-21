window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function (/* function */ callback, /* DOMElement */ element) {
                window.setTimeout(callback, 1000 / 60);
            };
})();

function GameEngine() {
    this.entities = [];
    this.ctx = null;
    this.surfaceWidth = null;
    this.surfaceHeight = null;
}

GameEngine.prototype.init = function (ctx) {
    this.ctx = ctx;
    this.surfaceWidth = this.ctx.canvas.width;
    this.surfaceHeight = this.ctx.canvas.height;
    this.timer = new Timer();
    this.startInput();
    console.log('game initialized');
}

GameEngine.prototype.startInput = function () {
    console.log('Starting input');

    var getXandY = function (e) {
        var x = e.clientX - that.ctx.canvas.getBoundingClientRect().left;
        var y = e.clientY - that.ctx.canvas.getBoundingClientRect().top;

        if (x < 1024) {
            x = Math.floor(x / 32);
            y = Math.floor(y / 32);
        }
        return { x: x, y: y };
    }

    var that = this;

    this.ctx.canvas.addEventListener("keydown", function (e) {
        if (e.code === "KeyJ") that.j = true;
        if (e.code === "KeyW") that.w = true;
        if (e.code === "KeyK") that.k = true;
        if (e.code === "KeyU") that.u = true;
        if (e.code === "KeyI") that.i = true;
        if (e.code === "KeyD") that.d = true;
        if (e.code === "KeyA") that.a = true;
        if (e.code === "KeyS") that.s = true;
        if (e.code === "KeyL") that.l = true;
        if (e.code === "ArrowUp") that.up = true;
        if (e.code === "ArrowLeft") that.left = true;
        if (e.code === "ArrowRight") that.right = true;
        if (e.code === "ArrowDown") that.down = true;
        if (e.code === "Numpad1") that.num1 = true;
        if (e.code === "Numpad2") that.num2 = true;
        if (e.code === "Numpad4") that.num4 = true;
        if (e.code === "Numpad5") that.num5 = true;
        if (e.code === "Numpad9") that.num9 = true;
        if (e.code === "Numpad8") that.num8 = true;
    }, false);

    this.ctx.canvas.addEventListener("keyup", function (e) {
        if (e.code === "KeyJ") that.j = false;
        if (e.code === "KeyW") that.w = false;
        if (e.code === "KeyK") that.k = false;
        if (e.code === "KeyU") that.u = false;
        // if (e.code === "KeyI") that.i = false;
        if (e.code === "KeyD") that.d = false;
        if (e.code === "KeyA") that.a = false;
        if (e.code === "KeyS") that.s = false;
        if (e.code === "KeyL") that.l = false;
        if (e.code === "ArrowUp") that.up = false;
        if (e.code === "ArrowLeft") that.left = false;
        if (e.code === "ArrowRight") that.right = false;
        if (e.code === "ArrowDown") that.down = false;
        if (e.code === "Numpad1") that.num1 = false;
        if (e.code === "Numpad2") that.num2 = false;
        if (e.code === "Numpad4") that.num4 = false;
        // if (e.code === "Numpad5") that.num5 = false;
        if (e.code === "Numpad9") that.num9 = false;
        if (e.code === "Numpad8") that.num8 = false;
    }, false);

    console.log('Input started');
}



GameEngine.prototype.start = function () {
    console.log("starting game");
    var that = this;
    (function gameLoop() {
        that.loop();
        requestAnimFrame(gameLoop, that.ctx.canvas);
    })();
}



GameEngine.prototype.addEntity = function (entity) {
    console.log('added entity');
    this.entities.push(entity);
}

GameEngine.prototype.draw = function () {
    this.ctx.clearRect(0, 0, this.surfaceWidth, this.surfaceHeight);
    this.ctx.save();
    for (var i = 0; i < this.entities.length; i++) {
        this.entities[i].draw(this.ctx);
    }
    this.ctx.restore();
}

GameEngine.prototype.update = function () {
    var entitiesCount = this.entities.length;

    for (var i = 0; i < entitiesCount; i++) {
        var entity = this.entities[i];

        entity.update();
    }
}

GameEngine.prototype.loop = function () {
    this.clockTick = this.timer.tick();
    this.update();
    this.draw();
}

function Timer() {
    this.gameTime = 0;
    this.maxStep = 0.05;
    this.wallLastTimestamp = 0;
}

Timer.prototype.tick = function () {
    var wallCurrent = Date.now();
    var wallDelta = (wallCurrent - this.wallLastTimestamp) / 1000;
    this.wallLastTimestamp = wallCurrent;

    var gameDelta = Math.min(wallDelta, this.maxStep);
    this.gameTime += gameDelta;
    return gameDelta;
}

function Entity(game, x, y) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.removeFromWorld = false;
}

Entity.prototype.update = function () {

}