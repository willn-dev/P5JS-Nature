//making a fly that lands and flies again. 


class Fly{

    constructor() {
        this.x = width / 2; 
        this.y = height / 2;
        this.perlin_x = 0;
        this.perlin_y = 100000;
        this.flight_time = 0; // initially I put this within movement, but I dont want it to reset each time
        this.rest_time = 0;

        this.state = 'flying';
        //eventually there will be hunger, health, thirst etc
    }

    movement(){

      switch(this.state) {

        //----------------------------FLIGHT LOGIC--------------------------
        
        case 'flying':
          if (this.flight_time > 800){ //can land

            let chance_stop = random(1);
            if (chance_stop < 0.05){ //landing
              this.flight_time = 0;
              this.state = 'rest';
              break;
            }

            } else{ //still flying
              this.x = map(noise(this.perlin_x), 0, 1, 0, width);
              this.y = map(noise(this.perlin_y), 0, 1, 0, height);

              //increments
              this.flight_time += 1;
              this.perlin_x += 0.01;
              this.perlin_y += 0.01;
              break;
            };
        //-------------------------REST------------------------------------
        
        case 'rest':
          if (this.rest_time > 800){
            let get_up = random(1);

            if (get_up < 0.05){
              this.rest_time = 0;
              this.state = 'flying';
              break;
            }
          } 
          else{ 
            this.rest_time += 1;
            break;
          }
      }
    }

    show(){
      background(220);
      stroke(0);

      //body

      let black = color('black');
      fill(black);
      circle(this.x, this.y, 10);


      fill(255);
      triangle(this.x + 3, this.y, this.x + 20 , this.y + 5, this.x + 20, this.y - 5);
      triangle(this.x - 3, this.y, this.x - 20 , this.y + 5, this.x - 20, this.y - 5);

      //wings      
    }

}