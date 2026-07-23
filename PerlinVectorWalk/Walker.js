
class Walker{
    constructor(x,y){
        
        let a = map(noise(random(100000)), 0,1, -1,1);
        let b = noise(random(100000));
        
        this.position = createVector(x,y);
        this.velocity = createVector(a, b);
        this.velocity.limit(8);
        this.acceleration = createVector(0.001, 0.001);
    }

    step(){
        
        if (this.position.x > width || this.position.x < 0){
            this.velocity.mult(-1);
        }

        else if (this.position.y > height || this.position.y < 0){
            this.velocity.mult(-1);
        } else {
            let a = map(noise(random(100000)), 0,1, -1,1);
            let b = map(noise(random(100000)), 0, 1, -1, 1);

        }

        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
    }

    show(){
        stroke(225)
        circle(this.position.x, this.position.y, 10);
        fill(200);
    }
}