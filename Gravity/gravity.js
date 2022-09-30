
      var canvas=document.querySelector('canvas');
      canvas.width=window.innerWidth;
      canvas.height=window.innerHeight;
      var c=canvas.getContext('2d');


var colorarray=["green","pink","cyan","yellow","orange","tea green",];
      function Circle(x,y,radius,dx,dy,color){

          this.x=x;
          this.y=y;
          this.radius=radius;
          this.dx=dx;
          this.dy=dy;
          this.color=color;

           this.circle11=function(){
          c.beginPath();
          c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);

          c.fillStyle = this.color;

          c.fill();
          c.strokestyle='black';
          c.stroke();


}

      this.circleupdate=function(){
        if(this.x + this.radius > innerWidth||this.x - this.radius < 0)
        {
          this.dx=(-this.dx);
        }
        //y
        if(this.y + this.radius >innerHeight)
        {
          this.dy=(-this.dy)*0.9;
        }
        else
        {
          this.dy=this.dy+0.5;
        }

this.x+=this.dx;
this.y+=this.dy;
          this.circle11();
}


        }



var circlearray=[];
for(var i=0;i<=200;i++)
{
  var x=Math.random()*innerWidth;
     var radius=(Math.random()*30)+10;
     if(x > innerWidth-radius)
     {x=x-radius;}
     else if(x<radius){x=x+radius;}
     var y=(Math.random()*innerHeight);
     if(y>innerHeight-radius)
     {y=y-radius;}
     else if(y<radius){y=y+radius;}
     var dx=(Math.random()*2)-2;
     var dy=9.8;
     var color = colorarray[Math.floor(Math.random()*colorarray.length)];
  circlearray.push(new Circle(x,y,radius,dx,dy,color));
}



function animate() {
    requestAnimationFrame(animate);
      c.clearRect(0,0,innerWidth,innerHeight);


        for(var j=0;j<=circlearray.length;j++)
        {
          circlearray[j].circleupdate();
        }
 }
animate();
