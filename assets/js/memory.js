var canvas = document.getElementById("draw");
var ctx = canvas.getContext("2d");
// const img1 = new Image(); 
// const img2 = new Image();
// img1.src = '/images/Playground-Logo-transparent.png'; 
// img2.src = '/images/kush.png'; 
imgs = [im1, img2, img3, img4]
for (i = 0; i < 5; i++) {
    
    imgs[i] - new Image();
    imgs[i]
  }
var select_image = 1;
image = [{"image_src": '/images/Playground-Logo-transparent.png', "image_selected": 1 }]
var first_clickX = 0;
var first_clickY = 0;
let pairsDone = 0;


function drawText(text) {
    ctx.font = "bold 70px arial";
    ctx.fillStyle = "blue";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, 150, 150);
}
function load(target) {
    path = new Path2D();
    ctx.fillStyle = "rgb(255, 255, 0)";
    ctx.fillRect(10, 10, 135, 135);
    ctx.fillStyle = "rgb(255, 255, 0)";
    ctx.fillRect(155, 10, 135, 135);
    ctx.fillStyle = "rgb(255, 255, 0)";
    ctx.fillRect(10, 155, 135, 135);
    ctx.fillStyle = "rgb(255, 255, 0)";
    ctx.fillRect(155, 155, 135, 135);

    ctx.stroke(path);
}
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}
// images = [img1, img1, img2, img2];
console.log(toString(images[0]))
shuffle(images);
function clickCanvas(event) {
    var x = event.offsetX;
    var y = event.offsetY;
    if (x>=10 && x <=145) {
        if (y >= 10 && y <= 145) {
            ctx.drawImage(images[0], 35, 35, 90, 90); 
            if (select_image == 1) {
            
                select_image = images[0];
                console.log(select_image);
                console.log(images[0]);

                first_clickX = 35;
                first_clickY = 35;
            }
            
            else {
                if (select_image != images[0]) {
                    setTimeout(function() {
                        console.log("hello");
                        select_image = 1;
                        ctx.clearRect(35, 35, 90, 90);
                        ctx.clearRect(first_clickX, first_clickY, 90, 90);
                        ctx.fillStyle = "rgb(255, 255, 0)";
                        ctx.fillRect(35, 35, 90, 90);
                        ctx.fillRect(first_clickX, first_clickY, 90, 90);
                    }, 500);
                }
                if (select_image == images[0]) {
                    select_image = 1;
                    console.log("hello"); 
                    pairsDone++;
                    if (pairsDone == 2) {
                        drawText("finish");
                    }
                }
            }
        
            
        }
    }
    if (x>=155 && x <=290) {
        if (y >= 155 && y <= 290) {
            ctx.drawImage(images[1], 180, 180, 90, 90); 
            if (select_image == 1) {
                select_image = images[1];
                console.log(select_image);
                console.log(images[1]);
                first_clickX = 180;
                first_clickY = 180;
            }
            
            else {
                console.log(select_image, images[0]);
                if (select_image != images[1]) {
                    setTimeout(function() {
                        select_image = 1;
                        ctx.clearRect(180, 180, 90, 90);
                        ctx.clearRect(first_clickX, first_clickY, 90, 90);
                        ctx.fillRect(180, 180, 90, 90);
                        ctx.fillRect(first_clickX, first_clickY, 90, 90);
                    }, 500);
                    
                }
                if (select_image == images[1]) {
                    
                    select_image = 1;
                    
                    console.log("hello");
                    pairsDone++;
                    if (pairsDone == 2) {
                        drawText("finish");
                    }
                }
                
                
            }
            
        }
    }
    if (x>=155 && x <=290) {
        if (y >= 10 && y <= 145) {
            ctx.drawImage(images[2], 180, 35, 90, 90); 
            if (select_image == 1) {
                select_image = images[2];
                console.log(select_image);
                console.log(images[2]);
                first_clickX = 180;
                first_clickY = 35;
            }
            
            else {
                console.log(select_image, images[2], "both");
                if (select_image != images[2]) {
                    setTimeout(function() {
                        select_image = 1;
                        ctx.clearRect(180, 35, 90, 90);
                        ctx.clearRect(first_clickX, first_clickY, 90, 90);
                        ctx.fillRect(180, 35, 90, 90);
                        ctx.fillRect(first_clickX, first_clickY, 90, 90);
                    }, 500);
                    
                }
                if (select_image == images[2]) {
                    
                    select_image = 1;
                    console.log("hello");
                    pairsDone++;
                    if (pairsDone == 2) {
                        drawText("finish");
                    }
                }
                
                
            }
        }
    }
    if (x>=10 && x <=145) {
        if (y >= 155 && y <= 290) {
            ctx.drawImage(images[3], 35, 180, 90, 90);
            if (select_image == 1) {
                select_image = images[3];
                console.log(select_image);
                console.log(images[3]);
                first_clickX = 35;
                first_clickY = 180;
            }
            
            else {
                console.log(select_image, images[3], "both");
                if (select_image != images[3]) {
                    setTimeout(function() {
                        select_image = 1;
                        ctx.clearRect(35, 180, 90, 90);
                        ctx.clearRect(first_clickX, first_clickY, 90, 90);
                        ctx.fillRect(35, 180, 90, 90);
                        ctx.fillRect(first_clickX, first_clickY, 90, 90);
                    }, 500);
                    
                }
                if (select_image == images[3]) {
                   
                    select_image = 1;
                    console.log("hello");
                    
                    pairsDone++;
                    if (pairsDone == 2) {
                        drawText("finish");
                    }
                }
                
                
            }
        }
    }
    
    
    
}