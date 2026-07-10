let pw;

function setup() {
    createCanvas(800, 600);
    background(220);
    pw = new Walker();
    
}

function draw() {
    pw.show();
    pw.step();

}
