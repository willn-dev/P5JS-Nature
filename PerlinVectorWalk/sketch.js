let walkerarr = [];

function setup() {
    createCanvas(800, 600);
    for(let i = 0; i < 100; i++){
        let x = random(0,800);
        let y = random(0,600);
        walkerarr.push(new Walker(x,y));
    }
}

function draw() {
    background(0);
    for (const walker of walkerarr){
        walker.step();
        walker.show();
    }
}
