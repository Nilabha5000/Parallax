const canvas = document.getElementById("canv");
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width;
const CANVAS_HEIGHT = canvas.height;
let gameSpeed = 5;
let isPaused = false;
const backGroundLayer1 = new Image();
backGroundLayer1.src = "parallax_forest_pack/parallax_forest_pack/layers/parallax-forest-back-trees.png";
const backGroundLayer2 = new Image();
backGroundLayer2.src = "parallax_forest_pack/parallax_forest_pack/layers/parallax-forest-front-trees.png";

const backGroundLayer3 = new Image();
backGroundLayer3.src = "parallax_forest_pack/parallax_forest_pack/layers/parallax-forest-middle-trees.png";
const backgroundLayer4 = new Image();
backgroundLayer4.src = "parallax_forest_pack/parallax_forest_pack/layers/parallax-forest-lights.png"
window.addEventListener("load",()=>{
    
    const slider = document.getElementById("slider");
    const speedViewer = document.getElementById("showGameSpeed");
    slider.addEventListener("change",(event)=>{
        gameSpeed = event.target.value;
        speedViewer.innerHTML = gameSpeed;

    });
     document.addEventListener("keyup",(event)=>{
         if(event.key === "p"){
            if(!isPaused)
                isPaused = true;
            else
              isPaused = false;
         }
     });
    
    class Layer {
        constructor(image, speedModifier) {
            this.image = image;
            this.speedModifier = speedModifier;
            this.speed = gameSpeed * speedModifier;
            this.x = 0;
            this.y = 0;
        }
    
        update() {
            this.speed = gameSpeed * this.speedModifier;
    
            // Loop the background when it moves out of view
            if (this.x <= -CANVAS_WIDTH) {
                this.x = 0;
            }
            
            if(!isPaused)
               this.x -= this.speed;
        }
    
        draw() {
            // Draw the image twice to create a seamless effect
            ctx.drawImage(this.image, this.x, this.y, CANVAS_WIDTH, CANVAS_HEIGHT);
            ctx.drawImage(this.image, this.x + CANVAS_WIDTH, this.y, CANVAS_WIDTH, CANVAS_HEIGHT);
        }
    }
    
    // Create multiple layers
    const layers = [
        new Layer(backGroundLayer1, 3),
        new Layer(backGroundLayer3, 2),
        new Layer(backgroundLayer4,0.9),
        new Layer(backGroundLayer2, 0.7)

    ];
    
    function animate() {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    
        // Update and draw each layer
        layers.forEach((layer) => {
            layer.update();
            layer.draw();
        });
    
        requestAnimationFrame(animate);
    }
    
    animate();
    
});
