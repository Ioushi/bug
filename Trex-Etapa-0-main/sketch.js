
var rest
var game0
var tb
var bird
var gameO
var res
var tc
var gn
var gc
var nuven
var soloinvisivel
var solo
var imagemsolo
var bordas
var trex ,trex_running;
var pontuação = 0
var mjg = "jogando"
          function preload(){
      trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    imagemsolo=loadImage("ground2.png")
  nuvens = loadImage("cloud.png")
tc = loadAnimation("tc.png")
  
  obstacle1 = loadImage("obstacle1.png")
    obstacle2 = loadImage("obstacle2.png")
      obstacle3 = loadImage("obstacle3.png")
      obstacle4 = loadImage("obstacle4.png")
    obstacle5 = loadImage("obstacle5.png")
  obstacle6 = loadImage("obstacle6.png")
        
  bird = loadAnimation("bird.png", "bird2.png")
  tb = loadAnimation("tb.png", "tb2.png")
  gameO = loadImage("gameOver.png")
  res = loadImage("restart.png")



}

function setup(){
  createCanvas(600,200)
  
gn = new Group()
gc = new Group()

game0 = createSprite(300,100)
game0.addImage(gameO) 
game0.visible = false

rest = createSprite(300,170)
rest.addImage(res)
rest.visible = false


  bordas = createEdgeSprites ();

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale=0.5
trex.setCollider("circle",0,0,41)
trex.debug=false

  solo = createSprite (50,190,600,10)
  solo.addImage("ground2.png",imagemsolo)
  
  
  soloinvisivel = createSprite (50,197,600,10)
  soloinvisivel.visible=false

  trex.addAnimation("tca",tc)
  trex.addAnimation("tb",tb) 

  
}

function draw(){
  background("white")
  drawSprites();

textSize (30)
text (pontuação, 10,30)
        if (mjg == "jogando")  {
  solo.velocityX=-4
  if (keyDown("space")&&trex.y>168) {
    trex.velocityY=-11.187556468
        }
         nuvem()
          cacto()
        trex.velocityY=trex.velocityY+0.8
               if (solo.x<0) {
               solo.x=solo.width/2
               }
if (gc.isTouching(trex)) {
  trex.changeAnimation("tca")
  mjg = "fim"

}
}
 
if (mjg == "fim")  {
  solo.velocityX=0
 gn.setVelocityXEach(0)
 gc.setVelocityXEach(0)
trex.velocityX=0
trex.velocityY=0

gc.setLifetimeEach(-1)
gn.setLifetimeEach(-1)
game0.visible = true
rest.visible = true
}




    trex.collide(soloinvisivel)
      
if (keyDown("down")){

trex.changeAnimation("tb")

}

ave()

}

          function nuvem (){
if (frameCount%25==0)   {  
 nuven = createSprite(50,70,)
 nuven.scale = 0.5
nuven.addImage(nuvens)
nuven.velocityX=8
nuven.y = Math.round (random(20,120))


nuven.depth = 1
trex.depth = 5
game0.depth = 7
rest.depth = 7
nuven.lifetime=100
gn.add(nuven)

}
          }

function cacto (){

  if (frameCount%35==0)   {  
    cactos = createSprite(600,160)
   cactos.velocityX=-8
  var cactoalt = Math.round (random(1,6))
  switch(cactoalt){
case 1: cactos.addImage(obstacle1)
break
case 2: cactos.addImage(obstacle2)
break
case 3: cactos.addImage(obstacle3)
break
case 4: cactos.addImage(obstacle4)
break
case 5: cactos.addImage(obstacle5)
break
case 6: cactos.addImage(obstacle6)
break
default:break
  }
  cactos.scale = 0.54151616541651546456165
  cactos.y = 176
  gc.add(cactos)
  cactos.lifetime=100
  cactos.depth = 1
  }
}
function ave(){
ave2 = createSprite(200,200)

  ave2.addAnimation("bird",bird)
    ave2.scale=99999999

}