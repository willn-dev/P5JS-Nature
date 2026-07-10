class Walker {
    constructor(){
        this.tx = 0;
        this.ty = 10000;
    }

    step(){
        this.x = map(noise(this.tx), 0, 1, 0, width);
        this.y = map(noise(this.ty), 0, 1, 0, height);

        this.tx += 0.01;
        this.ty += 0.01;

    }


    show(){
        background(220);
        stroke(0)
        circle(this.x, this.y, 20);
    }
}