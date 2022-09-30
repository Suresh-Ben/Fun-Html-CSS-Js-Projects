
      var canvas=document.querySelector('canvas');
      canvas.width=window.innerWidth;
      canvas.height=window.innerHeight;
      var c=canvas.getContext('2d');

      var mouse={
        x: innerWidth/2,
        y: innerHeight/2
      }

window.addEventListener('mousemove',
function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
})


var colorarray=['blue','#306EFF','#488AC7','#20629F','#87209E'];
      function Circle(x,y,radius,color,radian,dis){

          this.x=x;
          this.y=y;
          this.radius=radius;
          this.color=color;
          this.xy=this.x;
          this.yx=this.y;
          this.radian=radian;
          this.dis=dis;
this.lastpointx;
this.lastpointy;

          this.circleupdate=function(){
this.lastpointx=this.x;
this.lastpointy=this.y;
this.radian+=0.03;

            this.x=mouse.x+Math.cos(this.radian)*this.dis;
            this.y=mouse.y+Math.sin(this.radian)*this.dis;




              this.circle11();
    }

           this.circle11=function(){
          c.beginPath();
          c.lineWidth=this.radius;
          c.moveTo(this.lastpointx, this.lastpointy);
          c.lineTo(this.x, this.y);
          c.strokeStyle = this.color;
          c.stroke();


}



        }



var circlearray=[];
for(var i=0;i<100;i++)
{
     var x=(window.innerWidth/2);
     var y=(window.innerHeight/2);
     var radius=3;
     var color = colorarray[Math.floor(Math.random()*colorarray.length)];
     var radian=2*(Math.random()*(Math.PI));
     var dis=Math.random()*100+50;
  circlearray.push(new Circle(x,y,radius,color,radian,dis));
}



function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = "rgba(255,255,255,0.05)";

      c.fillRect(0,0,innerWidth,innerHeight);


      for(var j=0;j<=circlearray.length;j++)
      {
        circlearray[j].circleupdate();
      }
}
animate();
