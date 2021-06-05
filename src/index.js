// VARIABLES
const WIDTH = 960
const HEIGHT = 800

var config = {
    type: Phaser.AUTO,
    width: 960, //32x30
    height: 800, //32x25
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config); // Create game object

function preload(){
    this.load.image('sky', 'imgs\\sky-bg.png');
    this.load.image("clouds","imgs\\clouds-bg.png");
    this.load.image("back hills", "imgs\\back-hills.png");
    this.load.image("mid hills","imgs\\middle-hills.png");
    this.load.image("front hills","imgs\\front-hills.png");
    this.load.image("3 block","imgs\\3-block-platform.png");
}

function create() {
    this.add.image(WIDTH/2,HEIGHT/2,'sky');
    this.add.image(WIDTH/2,HEIGHT/2,"clouds");
    this.add.image(WIDTH/2,HEIGHT/2,"back hills");
    this.add.image(WIDTH/2,HEIGHT/2,"mid hills");
    this.add.image(WIDTH/2,HEIGHT/2,"front hills");
    this.add.image(0,0,"3 block").setOrigin(10,HEIGHT-42);
}

function update() {
    
}