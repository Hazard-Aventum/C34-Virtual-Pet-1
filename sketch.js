var dogImage, happyDogImage; 
var database, foodS, foodStock;
//Create variables here

function preload(){
  //load images here
  dogImage = loadImage("images/dogImg.png");
  happyDogImage = loadImage("images/dogImg1.png");

  database = firebaseConfig 
}

function setup() {
  createCanvas(500, 500);

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  
  var doggy = createSprite(250,250,20,20);
  doggy.addImage(dogImage);
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dogImage.addImage(happyDogImage);
  }

  drawSprites();
  //add styles here
  Text("Food Stock = " + foodS, 20, 20);
  textSize = 5;
  fill("black");
  stroke("white")
  
}

function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  if(x<=0){
    x = 0;
  }else{
    x = x-1
  }
  database.ref('/').update({
   Food:x
  })
}

