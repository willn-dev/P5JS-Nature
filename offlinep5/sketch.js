let walker;


function setup() {
    createCanvas(800, 600);
    walker = new Walker();
    background(255);
}

function draw() {
    walker.step();
    walker.show();
}


