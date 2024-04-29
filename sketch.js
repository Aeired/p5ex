
function setup() {
  createCanvas(400, 400, WEBGL);
  describe('a rotating spinning top');
}
 
let canvas=
  createCanvas(400, 400);

   canvas.parent('sketch2');


function draw() {
  
  background(400);
  fill(165, 132, 87);
  
  rotateX(frameCount * 0.01);
  rotateZ(frameCount * 0.01);
  
  cone(50,70);
  translate(0,-30)
  cylinder(5,80);
  
}