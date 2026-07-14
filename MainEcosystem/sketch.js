let fly;

function setup() {
    createCanvas(800, 600);
    background(220);
    fly = new Fly();
}

function draw() {
    fly.show();
    fly.movement();
}
