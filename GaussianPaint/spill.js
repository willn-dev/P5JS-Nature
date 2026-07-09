class Paint{
    constructor(){
        this.x = width / 2;
        this.y = height / 2;
    }

    frame(){
        let xGaussian = randomGaussian(width / 2, 30);
        let yGaussian = randomGaussian(height /2, 30);
        this.x = xGaussian;
        this.y = yGaussian;
    }

    show(){
        stroke(0);
        circle(this.x, this.y, 10);
    }
}