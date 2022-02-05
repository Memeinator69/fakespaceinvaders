var asteroid, asteroidImage, asteroidGroup
var asteroid22, asteroid22Group
var asteroid3, asteroid3Group
var earth, earthImage
var heart, heartImage
var laser, laserImage, laserGroup
var spaceship, shipImage
var spaceImage  
var score = 0
var PLAY = 1
var END = 0
var gameState = PLAY
var reset, resetImage
var laserSound
var asteroidSound
var bgSound
var wall




function preload (){
    spaceImage = loadImage("images/space.jpeg")
    shipImage = loadAnimation("images/spaceship.png")
    laserImage = loadImage("images/laser.png")
    heartImage = loadImage("images/heart1.png")
    earthImage = loadImage("images/earth.png")
    asteroidImage = loadImage("images/asteroid1.png")
    explosion = loadAnimation("images/burst 1.png","images/burst 2.png")
    resetImage = loadImage("images/reset.png")
    laserSound = loadSound("sounds/laser.mp3")
    asteroidSound = loadSound("sounds/asteroid.mp3")
    bgSound = loadSound("sounds/bg.wav")

}
function setup (){
 createCanvas(1500,700);
   earth=createSprite(750, 600)
   earth.scale=2
   earth.addImage(earthImage) 
   spaceship=createSprite(750,550)
   spaceship.addAnimation("shipImage",shipImage)
   spaceship.addAnimation("explosion",explosion)
   spaceship.scale=0.2
   reset=createSprite(700,350)
   reset.addImage(resetImage)
   reset.visible=false
   wall=createSprite(750,680,1500,50)
   wall.visible=false

   laserGroup = new Group();
   asteroidGroup = new Group();
   asteroid22Group = new Group();
   asteroid3Group = new Group();

   

}
function draw(){
    background (spaceImage)
    
    textSize(25)
    fill("white")
    text("SCORE:"+ score,1350,650)
    

    console.log(asteroid22Group.yEach)

    if(gameState == PLAY){
      if(asteroidGroup.isTouching(laserGroup)){
        asteroidGroup.destroyEach()
        score = score+10
        asteroidSound.play();
      }
      if(asteroid22Group.isTouching(laserGroup)){
        asteroid22Group.destroyEach()
        score = score+10
        asteroidSound.play();
        
      }

      if(asteroid3Group.isTouching(laserGroup)){
        asteroid3Group.destroyEach()
        score = score+10
        asteroidSound.play();
      }
      
    if(keyWentDown("SPACE")){
      spawnLaser();
      laserSound.play();
      laserSound.volume=0.1

      
  }

  if(keyDown("A")){
    spaceship.x=spaceship.x-15
   }
   if(keyDown("D")){
       spaceship.x=spaceship.x+15

   }

      
        spawnAsteroid();
        spawnAsteroid2();
        spawnAsteroid3();


    }
    
    

      if(spaceship.isTouching(asteroid22Group)||spaceship.isTouching(asteroidGroup)||spaceship.isTouching(asteroid3Group)){
            spaceship.changeAnimation("explosion", explosion)
            asteroidGroup.setVelocityEach(0,0)
            asteroid22Group.setVelocityEach(0,0)
            asteroidGroup.destroyEach()
            asteroid22Group.destroyEach()
            asteroid3Group.setVelocityEach(0,0)
            asteroid3Group.destroyEach()
            gameState = END
            reset.visible=true
            asteroidSound.play();
         
      }

      if(wall.isTouching(asteroid22Group)||wall.isTouching(asteroidGroup)||wall.isTouching(asteroid3Group)){
        spaceship.changeAnimation("explosion", explosion)
        asteroidGroup.setVelocityEach(0,0)
        asteroid22Group.setVelocityEach(0,0)
        asteroidGroup.destroyEach()
        asteroid22Group.destroyEach()
        asteroid3Group.setVelocityEach(0,0)
        asteroid3Group.destroyEach()
        gameState = END
        reset.visible=true
        asteroidSound.play();
     
  }
     
      if(mousePressedOver(reset)){
        reset_1();
      }
    
        drawSprites();
}


function spawnLaser(){
    laser=createSprite(spaceship.x,spaceship.y-20)
    laser.velocityY=-30
    laser.addImage(laserImage)
    laser.scale=0.2

    laser.lifetime=17
    laserGroup.add(laser)
    
    

}
function spawnAsteroid(){
   if(frameCount%270===0){
       asteroid=createSprite(Math.round(random(100,1400)),50);
       asteroid.addImage(asteroidImage)
       asteroid.scale=0.2
       asteroid.velocityY=+2
       asteroidGroup.add(asteroid)
       asteroid.lifetime=400
       



   }

}

function spawnAsteroid2(){

  if(frameCount%300==0){
    asteroid22=createSprite(Math.round(random(100,1400)),50);
       asteroid22.addImage(asteroidImage)
       asteroid22.scale=0.2
       asteroid22.velocityY=+2
       asteroid22Group.add(asteroid22)
       asteroid22.lifetime=400

  }
}
  function spawnAsteroid3(){
    if(frameCount%330===0){
        asteroid3=createSprite(Math.round(random(100,1400)),50);
        asteroid3.addImage(asteroidImage)
        asteroid3.scale=0.2
        asteroid3.velocityY=+2
        asteroid3Group.add(asteroid3)
        asteroid3.lifetime=400
    } 

}

function reset_1(){
      reset.visible=false
      score = 0
      gameState = PLAY
      spaceship.changeAnimation("shipImage",shipImage)


 


}
