var AM = new AssetManager();
var playerOne, playerTwo;
function Animation(spriteSheet, frameWidth, frameHeight, sheetWidth, frameDuration, frames, loop, scale) {
    this.spriteSheet = spriteSheet;
    this.frameWidth = frameWidth;
    this.frameDuration = frameDuration;
    this.frameHeight = frameHeight;
    this.sheetWidth = sheetWidth;
    this.frames = frames;
    this.totalTime = frameDuration * frames;
    this.elapsedTime = 0;
    this.loop = loop;
    this.scale = scale;
}

Animation.prototype.drawFrame = function (tick, ctx, x, y) {
    this.elapsedTime += tick;
    if (this.isDone()) {
        if (this.loop) this.elapsedTime = 0;
    }
    var frame = this.currentFrame();
    var xindex = 0;
    var yindex = 0;
    xindex = frame % this.sheetWidth;
    yindex = Math.floor(frame / this.sheetWidth);

    ctx.drawImage(this.spriteSheet,
        xindex * this.frameWidth, yindex * this.frameHeight,  // source from sheet
        this.frameWidth, this.frameHeight,
        x, y,
        this.frameWidth * this.scale,
        this.frameHeight * this.scale);
}

Animation.prototype.currentFrame = function () {
    return Math.floor(this.elapsedTime / this.frameDuration);
}

Animation.prototype.isDone = function () {
    return (this.elapsedTime >= this.totalTime);
}

// no inheritance
function Background(game, spritesheet) {
    this.x = 0;
    this.y = 0;
    this.spritesheet = spritesheet;
    this.game = game;
    this.ctx = game.ctx;
};

Background.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
        this.x, this.y, this.spritesheet.width, this.spritesheet.height);
};

Background.prototype.update = function () {
};

function Bar(game, spritesheet) {
    this.x = 0;
    this.y = 0;
    this.spritesheet = spritesheet;
    this.game = game;
    this.ctx = game.ctx;
};

Bar.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
        (100 - playerOne.healthPoint) * 5.7, 0,
        this.spritesheet.width - (200 - playerOne.healthPoint - playerTwo.healthPoint) * 5.7, this.spritesheet.height,
        (100 - playerOne.healthPoint) * 5.7, this.y,
        this.spritesheet.width - (200 - playerOne.healthPoint - playerTwo.healthPoint) * 5.7, this.spritesheet.height);
};

Bar.prototype.update = function () {
        //test health point
        if (this.game.num9){
            playerOne.healthPoint--;
            playerTwo.healthPoint--;
        } else if (this.game.num8){
            playerOne.healthPoint++;
            playerTwo.healthPoint++;
        }
};

AM.queueDownload("./GOKU/right/jumpUp.png");
AM.queueDownload("./GOKU/right/heavyBoxing.png");
AM.queueDownload("./GOKU/right/lightBoxing.png");
AM.queueDownload("./GOKU/right/goBack.png");
AM.queueDownload("./GOKU/right/goForward.png");
AM.queueDownload("./GOKU/right/wait.png");
AM.queueDownload("./GOKU/right/guard.png");
AM.queueDownload("./GOKU/right/hit.png");
AM.queueDownload("./GOKU/right/ki.png");
AM.queueDownload("./GOKU/right/super.png");
AM.queueDownload("./GOKU/right/superFlash.png");

AM.queueDownload("./GOKU/left/jumpUp.png");
AM.queueDownload("./GOKU/left/heavyBoxing.png");
AM.queueDownload("./GOKU/left/lightBoxing.png");
AM.queueDownload("./GOKU/left/goBack.png");
AM.queueDownload("./GOKU/left/goForward.png");
AM.queueDownload("./GOKU/left/wait.png");
AM.queueDownload("./GOKU/left/guard.png");
AM.queueDownload("./GOKU/left/hit.png");
AM.queueDownload("./GOKU/left/ki.png");
AM.queueDownload("./GOKU/left/super.png");
AM.queueDownload("./GOKU/left/superFlash.png");

AM.queueDownload("./RYU/left/jumpUp.gif");
AM.queueDownload("./RYU/left/middleBoxing.gif");
AM.queueDownload("./RYU/left/lightBoxing.gif");
AM.queueDownload("./RYU/left/lightKick.gif");
AM.queueDownload("./RYU/left/heavyKick.gif");
AM.queueDownload("./RYU/left/goBack.gif");
AM.queueDownload("./RYU/left/goForward.gif");
AM.queueDownload("./RYU/left/wait.gif");

AM.queueDownload("./RYU/right/jumpUp.gif");
AM.queueDownload("./RYU/right/middleBoxing.gif");
AM.queueDownload("./RYU/right/lightBoxing.gif");
AM.queueDownload("./RYU/right/lightKick.gif");
AM.queueDownload("./RYU/right/heavyKick.gif");
AM.queueDownload("./RYU/right/goBack.gif");
AM.queueDownload("./RYU/right/goForward.gif");
AM.queueDownload("./RYU/right/wait.gif");

AM.queueDownload("./img/StageChina.jpg");
AM.queueDownload("./img/bar.gif");
AM.queueDownload("./img/point.png");

AM.downloadAll(function () {
    var canvas = document.getElementById("gameWorld");
    var ctx = canvas.getContext("2d");
    var gameEngine = new GameEngine();
    gameEngine.init(ctx);
    gameEngine.start();

    gameEngine.addEntity(new Background(gameEngine, AM.getAsset("./img/StageChina.jpg")));
    playerOne = new Character(gameEngine, AM, 1, localStorage.getItem("selection1"));
    playerTwo = new Character(gameEngine, AM, 2, localStorage.getItem("selection2"));
    playerOne.setOpponent(playerTwo);
    playerTwo.setOpponent(playerOne);
    gameEngine.addEntity(playerOne);
    gameEngine.addEntity(playerTwo);
    gameEngine.addEntity(new Bar(gameEngine, AM.getAsset("./img/bar.gif")));

    console.log("All Done!");
});