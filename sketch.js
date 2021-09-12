var canvas,ob,score,ground,invground;
var backgroundImage,plr_1,plr_2, plr1_img, plr2_img, track;

function preload(){
ob = loadImage('obstacle.png')
bg = loadImage('backgroundimg.png')
}
function setup(){
createCanvas(600,500);
plr_1 = createSprite(10,245,10,10);
plr_2 = createSprite(10,545,10,10);
ground = createSprite(50,45,250,20)
//     ground.x= ground.width /2;
ground.velocityX= -3

obstaclesGroup = new Group();
}
function draw(){
    background(0)
spawnObstacles();
console.log(ground.x)
if (ground.x < 0){
    ground.x = ground.width/2;
  }
if(keyDown("space")){
    plr_2.velocityY=-4
  } 
  if(keyDown("space")){
    plr_1.velocityY=-4
  }
      drawSprites();


}
function spawnObstacles(){
    if (frameCount % 60 === 0){
      var obstacle = createSprite(400,165,10,40);
       obstacle.velocityX = -6;
      if(score%100===0){
        obstacle.velocityX=obstacle.velocityX-1;
        
         }
       //generate random obstacles
         obstacle.addImage(ob)
      
       //assign scale and lifetime to the obstacle           
       obstacle.scale = 0.5;
       obstacle.lifetime = 300;
      
      //add each obstacle to the group
       obstaclesGroup.add(obstacle);
    }
   }