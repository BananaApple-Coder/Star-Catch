var starImg,bgImg;
var star, starBody;
var fairy, fairyAni
var music
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/starImage.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyAni = loadAnimation("images/fairyimage1.png", "images/fairyimage2.png")
	music = loadSound("sound/JoyMusic.mp3")
}

function setup() {
	createCanvas(800, 750);
	music.loop()

	//write code to play fairyVoice sound

	//create fairy sprite and add animation for fairy
	fairy = createSprite(130, 520)
	fairy.addAnimation("flying", fairyAni)
	fairy.scale = 0.2


	star = createSprite(random(50, 700),30);
	star.addImage(starImg);
	star.scale = 0.03


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(star.x , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine)

}


function draw() {
  background(bgImg);
  let caught = false

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  if (keyIsDown(RIGHT_ARROW)) {
	fairy.x += 10
	if (caught === true){
		star.x +=10
	}
}

if (keyIsDown(LEFT_ARROW)) {
	fairy.x -= 10
	if (caught === true){
		star.x -=10
	}
}

  //write code to stop star in the hand of fairy
  if (fairy.isTouching(star) && star.x - fairy.x < 104 && star.x - fairy.x > 94 && star.y > 500 && star.y < 519){
	  Matter.Body.setStatic(starBody, true)
	  caught = true
  }

  drawSprites();

}
let pressed = false
function keyPressed() {
	
	console.log(pressed)

	if (keyCode === DOWN_ARROW && pressed === false) {
		pressed = true
		Matter.Body.setStatic(starBody,false); 
	}

	//writw code to move fairy left and right
	
}
