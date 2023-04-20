var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function (game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            "name": "Robot Romp",
            "number": 1,
            "speed": -3,
            "gameItems": [
                { "type": "sawblade", "x": 400, "y": groundY },
                { "type": "sawblade", "x": 600, "y": groundY },
                { "type": "sawblade", "x": 900, "y": groundY },
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // TODO 6 and on go here
        // BEGIN EDITING YOUR CODE HERE

        //Hitzone creation
        var hitZoneSize = 10;
        var damageFromObstacle = 10;
        var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);

        sawBladeHitZone.x = 800;
        sawBladeHitZone.y = 260;
        game.addGameItem(sawBladeHitZone);

        //Animation
        var obstacleImage = draw.bitmap("img/sawblade.png");
        sawBladeHitZone.addChild(obstacleImage);
        obstacleImage.x = -20;
        obstacleImage.y = -25;

        //Sawblade Creation Function
        function createSawBlade(xvalue, yvalue) {
            var hitZoneSize = 20;
            var damageFromObstacle = 10;
            var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);

            sawBladeHitZone.x = xvalue;
            sawBladeHitZone.y = yvalue;
            game.addGameItem(sawBladeHitZone);

            var obstacleImage = draw.bitmap("img/sawblade.png");
            sawBladeHitZone.addChild(obstacleImage);
            obstacleImage.x = -20;
            obstacleImage.y = -25;

        }

        createSawBlade(1150, 350);
        createSawBlade(1500, 340);
        createSawBlade(1750, 255);
        createSawBlade(1900, 340)

        //Enemy Function
        function createEnemy(xvalue) {
            var enemy = game.createGameItem("enemy", 25);
            var redSquare = draw.rect(75, 75, "black");
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.addChild(redSquare);
            enemy.x = xvalue;
            enemy.y = groundY - 50;
            enemy.velocityX = -3;
            enemy.rotationalVelocity = 5;

            enemy.onPlayerCollision = function () {
                game.changeIntegrity(-10);
            };
            enemy.onProjectileCollision = function () {
                game.increaseScore(100);
                enemy.fadeout();
            }; 
        }
        function createMonster(xvalue) {
            var enemy = game.createGameItem("enemy", 25);
            var redSquare = draw.rect(50, 50, "black");
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.addChild(redSquare);
            enemy.x = xvalue;
            enemy.y = groundY - 50;
            enemy.velocityX = -1;
            enemy.onPlayerCollision = function () {
                game.changeIntegrity(-10);
            };
            enemy.onProjectileCollision = function () {
                game.increaseScore(100);
                enemy.fadeOut();
            };
            game.addGameItem(enemy);
        }
        createMonster(400)
        function createReward(xvalue) {
            var enemy = game.createGameItem("enemy", 25);
            var redSquare = draw.rect(50, 50, "Red");
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.addChild(redSquare);
            enemy.x = xvalue;
            enemy.y = groundY - 50;
            enemy.velocityX = -1;
            enemy.onPlayerCollision = function () {
                game.changeIntegrity(0);
            };
            enemy.onProjectileCollision = function () {
                game.changeIntegrity(50);
                game.increaseScore(100);
                enemy.fadeOut();
            };
            game.addGameItem(enemy);
        }
        createReward(800)
        // DO NOT EDIT CODE BELOW HERE
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if ((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}
