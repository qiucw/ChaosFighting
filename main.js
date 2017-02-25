var AM = new AssetManager();
var playerOne, playerTwo;
function Animation(spriteSheet, frameWidth, frameHeight, sheetWidth, frameDuration, frames, loop, scale) {
    this.spriteSheet = spriteSheet;
    this.frameWidth = frameWidth;
    this.frameDuration = frameDuration;
    this.frameHeight = frameHeight;
    this.sheetWidth = sheetWidth;
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
        //test health Point
        if (this.game.num9){
            playerOne.healthPoint--;
            playerTwo.healthPoint--;
        } else if (this.game.num8){
            playerOne.healthPoint++;
            playerTwo.healthPoint++;
        }
};
AM.queueDownload("./godzilla/right/jumpUp.png");
AM.queueDownload("./godzilla/right/heavyBoxing.png");
AM.queueDownload("./godzilla/right/lightBoxing.png");
AM.queueDownload("./godzilla/right/goBack.png");
AM.queueDownload("./godzilla/right/goForward.png");
AM.queueDownload("./godzilla/right/wait.png");
AM.queueDownload("./godzilla/right/guard.png");
AM.queueDownload("./godzilla/right/hit.png");
AM.queueDownload("./godzilla/right/ki.png");
AM.queueDownload("./godzilla/right/super.png");
AM.queueDownload("./godzilla/right/superFlash.png");
AM.queueDownload("./godzilla/superSound.mp3");

AM.queueDownload("./godzilla/left/jumpUp.png");
AM.queueDownload("./godzilla/left/heavyBoxing.png");
AM.queueDownload("./godzilla/left/lightBoxing.png");
AM.queueDownload("./godzilla/left/goBack.png");
AM.queueDownload("./godzilla/left/goForward.png");
AM.queueDownload("./godzilla/left/wait.png");
AM.queueDownload("./godzilla/left/guard.png");
AM.queueDownload("./godzilla/left/hit.png");
AM.queueDownload("./godzilla/left/ki.png");
AM.queueDownload("./godzilla/left/super.png");
AM.queueDownload("./godzilla/left/superFlash.png");

AM.queueDownload("./goku/right/jumpUp.png");
AM.queueDownload("./goku/right/heavyBoxing.png");
AM.queueDownload("./goku/right/lightBoxing.png");
AM.queueDownload("./goku/right/goBack.png");
AM.queueDownload("./goku/right/goForward.png");
AM.queueDownload("./goku/right/wait.png");
AM.queueDownload("./goku/right/guard.png");
AM.queueDownload("./goku/right/hit.png");
AM.queueDownload("./goku/right/ki.png");
AM.queueDownload("./goku/right/super.png");
AM.queueDownload("./goku/right/superFlash.png");
AM.queueDownload("./goku/superSound.mp3");

AM.queueDownload("./goku/left/jumpUp.png");
AM.queueDownload("./goku/left/heavyBoxing.png");
AM.queueDownload("./goku/left/lightBoxing.png");
AM.queueDownload("./goku/left/goBack.png");
AM.queueDownload("./goku/left/goForward.png");
AM.queueDownload("./goku/left/wait.png");
AM.queueDownload("./goku/left/guard.png");
AM.queueDownload("./goku/left/hit.png");
AM.queueDownload("./goku/left/ki.png");
AM.queueDownload("./goku/left/super.png");
AM.queueDownload("./goku/left/superFlash.png");

AM.queueDownload("./itachi/left/jumpUp.png");
AM.queueDownload("./itachi/left/heavyBoxing.png");
AM.queueDownload("./itachi/left/lightBoxing.png");
AM.queueDownload("./itachi/left/goBack.png");
AM.queueDownload("./itachi/left/wait.png");
AM.queueDownload("./itachi/left/guard.png");
AM.queueDownload("./itachi/left/hit.png");
AM.queueDownload("./itachi/left/ki.png");
AM.queueDownload("./itachi/left/super.png");
AM.queueDownload("./itachi/left/superFlash.png");
AM.queueDownload("./itachi/superSound.mp3");

AM.queueDownload("./itachi/right/jumpUp.png");
AM.queueDownload("./itachi/right/heavyBoxing.png");
AM.queueDownload("./itachi/right/lightBoxing.png");
AM.queueDownload("./itachi/right/goBack.png");
AM.queueDownload("./itachi/right/wait.png");
AM.queueDownload("./itachi/right/guard.png");
AM.queueDownload("./itachi/right/hit.png");
AM.queueDownload("./itachi/right/ki.png");
AM.queueDownload("./itachi/right/super.png");
AM.queueDownload("./itachi/right/superFlash.png");

AM.queueDownload("./img/StageChina.jpg");
AM.queueDownload("./img/bar.gif");
AM.queueDownload("./img/point.png");
AM.queueDownload("./img/hit.mp3");

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
    if (localStorage.getItem("selection2") == 0){
        gameEngine.ai = true;
    }
    gameEngine.addEntity(playerOne);
    gameEngine.addEntity(playerTwo);
    gameEngine.addEntity(new Bar(gameEngine, AM.getAsset("./img/bar.gif")));

    console.log("All Done!");
});