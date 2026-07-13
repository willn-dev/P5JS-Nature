function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  loadPixels();

  print(pixelDensity(), pixels.length);


  let xoff = 0;

  for (let x = 0; x < width; x++) {

    let yoff = 0;

    for (let y = 0; y < height; y++) {
      let index = (x + y * width) * 4;
      let bright = map(noise(xoff, yoff), 0, 1, 0, 255);
      pixels[index] = bright; //R
      pixels[index + 1] = bright; // G
      pixels[index + 2] = bright; //B
      pixels[index + 3] = 255; //Alpha
      yoff += 0.01;
    }
    xoff+= 0.01;
  } 

  updatePixels();
}

function draw() {}
