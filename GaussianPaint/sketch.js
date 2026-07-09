let paint;

function setup() {
    createCanvas(800, 600);
    paint = new Paint();
    background(220);
}

function draw() {
    paint.frame();
    paint.show();
}
