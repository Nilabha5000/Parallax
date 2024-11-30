const canvas = document.getElementById("canv");
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;

const backGroundLayer1 = new Image();
backGroundLayer1.src = "parallax_forest_pack/parallax_forest_pack/layers/parallax-forest-back-trees.png";
const backGroundLayer2 = new Image();
backGroundLayer2.src = "parallax_forest_pack/parallax_forest_pack/layers/parallax-forest-front-trees.png";
const backGroundLayer3 = new Image();
backGroundLayer3.src = "parallax_forest_pack/parallax_forest_pack/layers/parallax-forest-lights.png";
const backGroundLayer4 = new Image();
backGroundLayer4.src = "parallax_forest_pack/parallax_forest_pack/layers/parallax-forest-middle-trees.png";
let x = 0;
let x2 = 272;
let gameSpeed = 12;
function animate(){
    ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);

    ctx.drawImage(backGroundLayer4,x,0);
    ctx.drawImage(backGroundLayer4,x2,0);

    if(x < -272) x = 272+x2-gameSpeed;
    else
       x -= gameSpeed;
       if(x2 < -272) x2 = 272+x-gameSpeed;
       else
          x2 -= gameSpeed;
    
    requestAnimationFrame(animate);
}
animate();