
function Character(game, asset, playerNumber, characterNumber) {

    this.asset = asset;
    this.number = playerNumber;
    this.goF = false;
    this.goB = false;
    this.jump = false;
    this.k = false;
    this.lightB = false;
    this.middleB = false;
    this.h = false;
    this.sup = false;
    this.g = false;
    this.opponent = null;
    this.healthPoint = 100;
    this.power = 0;
    this.y = 400;
    this.speed = 300;
    this.game = game;
    this.ctx = game.ctx;
    if (characterNumber == 1){
        if (playerNumber == 1){
            this.animation = new Animation(asset.getAsset("./RYU/right/wait.gif"), 62, 93, 6, 0.10, 6, true, 3);
            this.ki = new Animation(asset.getAsset("./RYU/right/wait.gif"), 62, 93, 6, 0.10, 6, true, 3);
            this.hit = new Animation(asset.getAsset("./RYU/right/wait.gif"), 62, 93, 6, 0.10, 6, true, 3);
            this.goForward = new Animation(asset.getAsset("./RYU/right/goForward.gif"), 66, 92, 6, 0.25, 6, true, 3);
            this.goBack = new Animation(asset.getAsset("./RYU/right/goBack.gif"), 63.4, 91, 6, 0.25, 6, true, 3);
            this.super = new Animation(asset.getAsset("./RYU/right/heavyKick.gif"), 122, 94, 5, 0.12, 5, false, 3);
            this.guard = new Animation(asset.getAsset("./RYU/right/lightKick.gif"), 116, 94, 5, 0.12, 5, false, 3);
            this.lightBoxing = new Animation(asset.getAsset("./RYU/right/lightBoxing.gif"), 94, 91, 3, 0.12, 3, false, 3);
            this.middleBoxing = new Animation(asset.getAsset("./RYU/right/middleBoxing.gif"), 115, 95, 5, 0.12, 5, false, 3);
            this.jumpUp = new Animation(asset.getAsset("./RYU/right/jumpUp.gif"), 58, 109, 8, 0.12, 8, false, 3);
            this.x = 200;
        } else{
            this.animation = new Animation(asset.getAsset("./RYU/right/wait.gif"), 62, 93, 6, 0.10, 6, true, 3);
            this.ki = new Animation(asset.getAsset("./RYU/right/wait.gif"), 62, 93, 6, 0.10, 6, true, 3);
            this.hit = new Animation(asset.getAsset("./RYU/right/wait.gif"), 62, 93, 6, 0.10, 6, true, 3);
            this.goForward = new Animation(asset.getAsset("./RYU/left/goForward.gif"), 66, 92, 6, 0.25, 6, true, 3);
            this.goBack = new Animation(asset.getAsset("./RYU/left/goBack.gif"), 63.4, 91, 6, 0.25, 6, true, 3);
            this.super = new Animation(asset.getAsset("./RYU/left/heavyKick.gif"), 122, 94, 5, 0.12, 5, false, 3);
            this.guard = new Animation(asset.getAsset("./RYU/left/lightKick.gif"), 116, 94, 5, 0.12, 5, false, 3);
            this.lightBoxing = new Animation(asset.getAsset("./RYU/left/lightBoxing.gif"), 94, 91, 3, 0.12, 3, false, 3);
            this.middleBoxing = new Animation(asset.getAsset("./RYU/left/middleBoxing.gif"), 115, 95, 5, 0.12, 5, false, 3);
            this.jumpUp = new Animation(asset.getAsset("./RYU/left/jumpUp.gif"), 58, 109, 8, 0.12, 8, false, 3);
            this.x = 1050;
        }
    } else if (characterNumber == 2){
        if (playerNumber == 1){
            this.animation = new Animation(asset.getAsset("./GOKU/right/wait.png"), 48, 86, 2, 0.10, 2, true, 3);
            this.goForward = new Animation(asset.getAsset("./GOKU/right/goForward.png"), 76, 79, 2, 0.25, 2, true, 3);
            this.goBack = new Animation(asset.getAsset("./GOKU/right/goBack.png"), 57, 78, 2, 0.25, 2, true, 3);
            this.lightBoxing = new Animation(asset.getAsset("./GOKU/right/lightBoxing.png"), 87, 78, 2, 0.12, 2, false, 3);
            this.middleBoxing = new Animation(asset.getAsset("./GOKU/right/heavyBoxing.png"), 80, 89, 2, 0.2, 2, false, 3);
            this.jumpUp = new Animation(asset.getAsset("./GOKU/right/jumpUp.png"), 40, 91, 3, 0.18, 3, false, 3);
            this.guard = new Animation(asset.getAsset("./GOKU/right/guard.png"), 37, 88, 1, 0.12, 1, true, 3);
            this.hit = new Animation(asset.getAsset("./GOKU/right/hit.png"), 56, 91, 1, 0.12, 1, true, 3);
            this.ki = new Animation(asset.getAsset("./GOKU/right/ki.png"), 60, 96, 2, 0.12, 2, true, 3);
            this.super = new Animation(asset.getAsset("./GOKU/right/super.png"), 53, 77, 13, 0.12, 13, false, 3);
            this.flash = new flash(this.game, asset.getAsset("./GOKU/right/superFlash.png"), 0, 0);
            this.point1 = new point(this.game, asset.getAsset("./img/point.png"), 0, 620);
            this.point2 = new point(this.game, asset.getAsset("./img/point.png"), 0, 620);
            this.point3 = new point(this.game, asset.getAsset("./img/point.png"), 0, 620);
            this.game.addEntity(this.flash);
            this.game.addEntity(this.point1);
            this.game.addEntity(this.point2);
            this.game.addEntity(this.point3);
            this.x = 220;
        } else {
            this.animation = new Animation(asset.getAsset("./GOKU/left/wait.png"), 48, 86, 2, 0.10, 2, true, 3);
            this.goForward = new Animation(asset.getAsset("./GOKU/left/goForward.png"), 76, 79, 2, 0.25, 2, true, 3);
            this.goBack = new Animation(asset.getAsset("./GOKU/left/goBack.png"), 57, 78, 2, 0.25, 2, true, 3);
            this.lightBoxing = new Animation(asset.getAsset("./GOKU/left/lightBoxing.png"), 87, 78, 2, 0.12, 2, false, 3);
            this.middleBoxing = new Animation(asset.getAsset("./GOKU/left/heavyBoxing.png"), 80, 89, 2, 0.2, 2, false, 3);
            this.jumpUp = new Animation(asset.getAsset("./GOKU/left/jumpUp.png"), 40, 91, 3, 0.18, 3, false, 3);
            this.guard = new Animation(asset.getAsset("./GOKU/left/guard.png"), 37, 88, 1, 0.12, 1, true, 3);
            this.hit = new Animation(asset.getAsset("./GOKU/left/hit.png"), 56, 91, 1, 0.12, 1, true, 3);
            this.ki = new Animation(asset.getAsset("./GOKU/left/ki.png"), 60, 96, 2, 0.12, 2, true, 3);
            this.super = new Animation(asset.getAsset("./GOKU/left/super.png"), 53, 77, 12, 0.12, 12, false, 3);
            this.flash = new flash(this.game, asset.getAsset("./GOKU/left/superFlash.png"), 0, 0);
            this.point1 = new point(this.game, asset.getAsset("./img/point.png"), 0, 620);
            this.point2 = new point(this.game, asset.getAsset("./img/point.png"), 0, 620);
            this.point3 = new point(this.game, asset.getAsset("./img/point.png"), 0, 620);
            this.game.addEntity(this.flash);
            this.game.addEntity(this.point1);
            this.game.addEntity(this.point2);
            this.game.addEntity(this.point3);
            this.x = 1000;

        }
    }
}

Character.prototype.setOpponent = function(opponent) {
    this.opponent = opponent;
};

Character.prototype.draw = function () {
    var n;
    if (this.number == 1) {
        n = 0;
    } else {
        n = 3;
    }
    if (this.jump){
        this.jumpUp.drawFrame(this.game.clockTick, this.ctx, this.x - this.jumpUp.frameWidth * n, this.y);
    }else if (this.middleB){
        this.middleBoxing.drawFrame(this.game.clockTick, this.ctx, this.x - this.middleBoxing.frameWidth * n, this.y);
    }else if (this.sup){
        this.super.drawFrame(this.game.clockTick, this.ctx, this.x - this.super.frameWidth * n, this.y);
    }else if (this.g){
        this.guard.drawFrame(this.game.clockTick, this.ctx, this.x - this.guard.frameWidth * n, this.y);
    }else if (this.lightB){
        this.lightBoxing.drawFrame(this.game.clockTick, this.ctx, this.x - this.lightBoxing.frameWidth * n, this.y);
    }else if (this.k){
        this.ki.drawFrame(this.game.clockTick, this.ctx, this.x - this.ki.frameWidth * n, this.y);
    }else if (this.goF){
        this.goForward.drawFrame(this.game.clockTick, this.ctx, this.x - this.goForward.frameWidth * n, this.y);
    }else if (this.goB){
        this.goBack.drawFrame(this.game.clockTick, this.ctx, this.x - this.goBack.frameWidth * n, this.y);
    }else if (this.h){
        this.hit.drawFrame(this.game.clockTick, this.ctx, this.x - this.goBack.frameWidth * n, this.y);
    }else {
        this.animation.drawFrame(this.game.clockTick, this.ctx, this.x - this.animation.frameWidth * n, this.y);
    }
}

Character.prototype.update = function () {
    console.log(this.power);
    if (this.number == 1) {
        if (this.game.u && this.k != true && this.sup != true&& this.h != true) {
            this.g = true;
        } else {
            this.g = false;
            if (this.game.s && this.sup != true && this.h != true) {
                this.k = true;
                if (this.power < 300){
                    this.power += 1;
                }
            } else {
                this.k = false;
                if (this.game.i && this.power >= 100 && this.h != true) {
                    this.sup = true;
                    if (this.super.isDone()) {
                        this.super.elapsedTime = 0;
                        this.game.i = false;
                        this.sup = false;
                        this.power -= 100;
                    }
                }
                if (this.super.currentFrame() > 2){
                    this.flash.x = this.x + 150 ;
                    this.flash.y = this.y;
                }
                if (this.sup != true) {
                    this.flash.x = 0;
                    this.flash.y = 720;
                    if (this.game.w && this.h != true) {
                        this.jump = true;
                    } else if (this.game.j && this.canAttack() && this.h != true) {
                        this.lightB = true;
                    } else if (this.game.k && this.canAttack() && this.h != true) {
                        this.middleB = true;
                    } else {
                        if (this.game.d && this.h != true) {
                            this.goF = true;
                            if (this.animation.elapsedTime < this.animation.totalTime && this.x + this.goForward.frameWidth * 4 < this.opponent.x)
                                this.x += this.game.clockTick * this.speed;
                        } else {
                            this.goF = false;
                        }
                        if (this.game.a && this.h != true) {
                            this.goB = true;
                            if (this.animation.elapsedTime < this.animation.totalTime && this.x > 0)
                                this.x -= this.game.clockTick * this.speed;
                        } else {
                            this.goB = false;
                        }
                    }
                }
            }
        }
    } else {
        if (this.game.num4 && this.k != true && this.super != true&& this.h != true) {
            this.g = true;
        } else {
            this.g = false;
            if (this.game.down && this.super != true && this.h != true) {
                this.k = true;
                if (this.power < 300){
                    this.power += 1;
                }
            } else {
                this.k = false;
                if (this.game.num5 && this.power >= 100 && this.h != true) {
                    this.sup = true;
                    if (this.super.isDone()) {
                        this.super.elapsedTime = 0;
                        this.game.num5 = false;
                        this.sup = false;
                        this.power -= 100;
                    }
                }
                if (this.super.currentFrame() > 2){
                    this.flash.x = this.x - 350 - this.super.frameWidth * 3 ;
                    this.flash.y = this.y;
                }
                if (this.sup != true) {
                    this.flash.x = 2000;
                    this.flash.y = 1000;
                    if (this.game.up && this.h != true) {
                        this.jump = true;
                    } else if (this.game.num1 && this.canAttack() && this.h != true) {
                        this.lightB = true;
                    } else if (this.game.num2 && this.canAttack() && this.h != true) {
                        this.middleB = true;
                    } else {
                        if (this.game.num4 && this.h != true) {
                            this.g = true;
                        } else {
                            this.g = false;
                        }
                        if (this.game.left && this.h != true) {
                            this.goF = true;
                            if (this.animation.elapsedTime < this.animation.totalTime && this.x - this.goForward.frameWidth * 4 > this.opponent.x)
                                this.x -= this.game.clockTick * this.speed;
                        } else {
                            this.goF = false;
                        }
                        if (this.game.right && this.h != true) {
                            this.goB = true;
                            if (this.animation.elapsedTime < this.animation.totalTime && this.x < 1280)
                                this.x += this.game.clockTick * this.speed;
                        } else {
                            this.goB = false;
                        }
                    }
                }
            }
        }
    }

    if (this.jump) {
        if (this.jumpUp.isDone()) {
            this.y -= 8;
            this.jumpUp.elapsedTime = 0;
            this.jump = false;
        }
        var jumpDistance = this.jumpUp.elapsedTime / this.jumpUp.totalTime;
        var totalHeight = 300;

        if (jumpDistance > 0.5)
            jumpDistance = 1 - jumpDistance;

        var height = totalHeight * (-4 * (jumpDistance * jumpDistance - jumpDistance));
        this.y = 400 - height;
    } else {
        if (this.sup) {
            if (this.super.isDone()) {
                this.super.elapsedTime = 0;
                this.sup = false;
            }
        }
        if (this.g) {
            if (this.guard.isDone()) {
                this.guard.elapsedTime = 0;
                this.g = false;
            }
        }
        if (this.lightB) {
            if (this.lightBoxing.isDone()) {
                this.lightBoxing.elapsedTime = 0;
                this.lightB = false;
            }
        }
        if (this.middleB) {
            if (this.middleBoxing.isDone()) {
                this.middleBoxing.elapsedTime = 0;
                this.middleB = false;
            }
        }
    }

    if (Math.abs(this.x - this.opponent.x) < 350 === true && Math.abs(this.y - this.opponent.y) < 150 && (this.lightB || this.middleB)){

        if (this.lightB){
            this.opponent.h = true;
            if (this.opponent.g){
                this.opponent.healthPoint -= 0.15;
                // this.power += 0.25;
            } else {
                this.opponent.healthPoint -= 0.3;
                // this.power += 0.5;
            }
        }
        if (this.middleB){
            this.opponent.h = true;
            if (this.opponent.g){
                this.opponent.healthPoint -= 0.3;
                // this.power += 0.5;
            } else {
                this.opponent.healthPoint -= 0.6;
                // this.power += 1;
            }
        }

    } else if (this.flash.x != 2000 && Math.abs(this.flash.x + this.flash.spritesheet.width - this.opponent.x) < 350 && Math.abs(this.y - this.opponent.y) < 150){
        this.opponent.h = true;
        if (this.opponent.g){
            this.opponent.healthPoint -= 0.2;
            this.opponent.h = true;
            // this.power += 2;
        } else {
            this.opponent.healthPoint -= 0.4;
            this.opponent.h = true;
            // this.power += 4;
        }
    }else {
        this.opponent.h = false;
    }

    if (this.power >= 300 ){
        if (this.number == 1){
            this.point1.x = 160;
        } else {
            this.point1.x = 1020;
        }
        this.point1.y = 620;
    }else {
        this.point1.x = 1280;
        this.point1.y = 720;
    }
    if (this.power >= 200 ){
        if (this.number == 1){
            this.point2.x = 100;
        } else {
            this.point2.x = 1080;
        }
        this.point2.y = 620;
    } else {
        this.point2.x = 1280;
        this.point2.y = 720;
    }
    if (this.power >=100
    ){
        if (this.number == 1){
            this.point3.x = 40;
        } else {
            this.point3.x = 1140;
        }
        this.point3.y = 620;
    } else {
        this.point3.x = 1280;
        this.point3.y = 720;
    }


    if (this.healthPoint < 0 || this.opponent.healthPoint < 0){
        window.location.href = "index.html";
    }
}

Character.prototype.canAttack = function(){
    return !this.opponent.lightB && !this.opponent.middleB && !this.jump;
}

function flash(game, spritesheet, x, y) {
    this.x = x;
    this.y = y;
    this.spritesheet = spritesheet;
    this.game = game;
    this.ctx = game.ctx;
};

flash.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
        this.x, this.y, this.spritesheet.width * 2, this.spritesheet.height * 2);
};

flash.prototype.update = function () {

};

function point(game, spritesheet, x, y) {
    this.x = x;
    this.y = y;
    this.spritesheet = spritesheet;
    this.game = game;
    this.ctx = game.ctx;
};

point.prototype.draw = function () {
    this.ctx.drawImage(this.spritesheet,
        this.x, this.y, this.spritesheet.width, this.spritesheet.height);
};

point.prototype.update = function () {
};