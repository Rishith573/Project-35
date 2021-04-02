var dog, dogImg, happydogImg, foodS, foodStock, db;

function preload()
{
	dogImg = loadImage("images/dog.png");
  happydogImg = loadImage("images/happydog.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(350, 200, 20, 20)
  dog.addImage(dogImg)
  dog.scale(0.5)

  
}


function draw() {  

  
  drawSprites();
  //add styles here
  

}



