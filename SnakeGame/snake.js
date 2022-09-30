var canvas=document.querySelector('canvas');
canvas.width=600;
canvas.height=400;
var c=canvas.getContext('2d');


var xx=0;var ddx=1;
function ffgg(){
c.fillStyle="#AF7817";
c.font = "70px Comic Sans MS";
c.fillText("SNAKE GAME",xx,200,300,50);
if(xx+300>600){ddx=(-ddx)}
else if(xx<0){ddx=(-ddx)}
xx+=ddx;
}
function anim(){
    requestAnimationFrame(anim);
    c.clearRect(0,0,innerWidth,innerHeight);
    ffgg();
}
anim();

function gg1()
{
  document.getElementById("bbtt").remove();
  canvas.width=720;
  canvas.height=720;
  //Resizing_Canvas

  function grid()
  {
    c.fillStyle="#52D017";
    c.fillRect(0,0,720,720);
    c.fillStyle="white";
    c.fillRect(40,40,640,640);
    c.fillstyle="#F0FFFF";
    c.fillRect(520,0,120,40);
    var boxx=0;
    var boxy=0;
    for(var i=1 ; i<17 ; i++)
      {
        boxy+=40;
        for (var j=1 ; j<17 ; j++)
        {
          boxx+=40;
          if((i-j)%2==0)
            {
              c.fillStyle="#57FEFF";
            }
           else
            {
              c.fillStyle="#306EFF";
            }
           c.fillRect(boxx,boxy,40,40);
        }
        boxx=0;
      }

  }
  //grid completed

  var score=0;
  function score11(){
    c.fillStyle="red";
    c.font = "30px Comic Sans MS";
    c.fillText("score:"+score, 520, 30);
  }

  //score
class Food
{
  constructor(x,y)
  {
    this.x=x;
    this.y=y;
    this.x=40*(Math.floor((Math.random()*16)+1));

    this.y=40*(Math.floor((Math.random()*16)+1));

  }
  food1()
  {
    this.x=40*(Math.floor((Math.random()*16)+1));

    this.y=40*(Math.floor((Math.random()*16)+1));

    c.drawImage( document.getElementById("gg") ,this.x,this.y,40,40);

  }
  food2()
  {
    c.drawImage( document.getElementById("gg") ,this.x,this.y,40,40);
  }

}
var ffra=new Food(undefined,undefined);
//food

var d;
document.addEventListener("keydown",
function(e)
{
  if ( e.keyCode == 87 && d!=="down") {    d="up";
  }

  if ( e.keyCode == 83 && d!=="up") {   d="down" ;
  }

  if ( e.keyCode == 65 && d!=="right") {   d="left";
  }

  if ( e.keyCode == 68 && d!=="left") {   d="right";
  }
}
);
//Adding_keys

var s=0;
var snakearray=[];
//snake_Array_initial

function Snake(x,y){
  this.x=x;
  this.y=y;
  this.snake1=function(){
    c.fillStyle="pink";
    c.fillRect(this.x,this.y,40,40);
    c.strokeStyle='red';
    c.strokeRect(this.x,this.y,40,40);
  }
  this.snakeupd=function(){
    this.snake1();
  }
}

for(var k=0;k<1;k++){
  var xx=40*(Math.floor((Math.random()*16)+1));

  var yy=40*(Math.floor((Math.random()*16)+1));
  snakearray.push(new Snake(xx,yy));
}

function dir(){
if(d==="up"||d==="down"||d==="right"||d==="left"){

if(d==="up"){
  snakearray.unshift(new Snake(snakearray[0].x,snakearray[0].y-40));    }
else  if(d==="down"){
    snakearray.unshift(new Snake(snakearray[0].x,snakearray[0].y+40));    }
else  if(d==="right"){
snakearray.unshift(new Snake(snakearray[0].x+40,snakearray[0].y));    }
else  if(d==="left"){
snakearray.unshift(new Snake(snakearray[0].x-40,snakearray[0].y));    }


snakearray.pop();
}}


function sfood(){

  if(d==="up"){
    snakearray.unshift(new Snake(snakearray[0].x,snakearray[0].y-40));    }
  else  if(d==="down"){
      snakearray.unshift(new Snake(snakearray[0].x,snakearray[0].y+40));    }
  else  if(d==="right"){
  snakearray.unshift(new Snake(snakearray[0].x+40,snakearray[0].y));    }
  else  if(d==="left"){
  snakearray.unshift(new Snake(snakearray[0].x-40,snakearray[0].y));    }

  score++;
  ffra.food1();

}






var cd=0;
function anim(){
    requestAnimationFrame(anim);

c.clearRect(0,0,innerWidth,innerHeight);


cd+=400;

    grid();
    score11();

ffra.food2();
if(snakearray.length!==0){
for(var j=0;j<snakearray.length;j++){
  snakearray[j].snakeupd();
}
}
window.setTimeout(dir,400+cd);


while(ffra.x===snakearray[0].x&&ffra.y===snakearray[0].y){

  sfood();
}




while(snakearray[0].x<40||snakearray[0].y<40||snakearray[0].x>640||snakearray[0].y>640){

  c.clearRect(0,0,innerWidth,innerHeight);
    c.fillStyle="red";
    c.font = "100px Comic Sans MS";
    c.fillText("out!", innerWidth/2, innerHeight/2);
}

}
window.setTimeout(anim,200);


}
