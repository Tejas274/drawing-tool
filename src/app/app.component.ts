import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

 insertOrganization(){
    console.log("hello");
  }

insertRectangle(){
    var canvas = <HTMLCanvasElement> document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");
    //ctx.fillRect(25, 25, 100, 100);
    //ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);
  }

insertTringle(){
    var canvas = <HTMLCanvasElement> document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(75, 50);
    ctx.lineTo(100, 75);
    ctx.lineTo(100, 25);
    ctx.fill();
  }

downLoadImage(){
    var canvas = <HTMLCanvasElement> document.getElementById("mycanvas");
    var ctx = canvas.getContext("2d");
    var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");  // here is the most important part because if you dont replace you will get a DOM 18 exception.
    window.location.href=image; // it will save locally
  }

printBrush()  
{ 
      var el = <HTMLCanvasElement> document.getElementById("mycanvas");
      var ctx = el.getContext('2d');

      ctx.lineWidth = 10;
      ctx.lineJoin = ctx.lineCap = 'butt';

      var isDrawing, lastPoint;

      el.onmousedown = function(e) {
      isDrawing = true;
      lastPoint = { x: e.clientX, y: e.clientY };
      };

      el.onmousemove = function(e) {
      if (!isDrawing) return;

      ctx.beginPath();
      ctx.moveTo(lastPoint.x, lastPoint.y);
      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();

      ctx.moveTo(lastPoint.x - 5, lastPoint.y - 5);
      ctx.lineTo(e.clientX - 5, e.clientY - 5);
      ctx.stroke();

      lastPoint = { x: e.clientX, y: e.clientY };
      };

      el.onmouseup = function() {
      isDrawing = false;
      }; 

}

drawPencil(){
    
var el = <HTMLCanvasElement> document.getElementById("mycanvas");
var ctx = el.getContext('2d');
var isDrawing;

el.onmousedown = function(e) {
  isDrawing = true;
  ctx.moveTo(e.clientX, e.clientY);
};
el.onmousemove = function(e) {
  if (isDrawing) {
    ctx.lineTo(e.clientX, e.clientY);
    ctx.stroke();
  }
};
el.onmouseup = function() {
  isDrawing = false;
};

}

drawEclipse()
{

    var el = <HTMLCanvasElement> document.getElementById("mycanvas");
    var ctx = el.getContext('2d');
    var isDrawing,x1,y1,isDown=false,x2,y2;

    ctx.translate(0.5, 0.5);  

    el.onmousedown = function(e) {
      var rect = el.getBoundingClientRect();
      x1 = e.clientX - rect.left;
      y1 = e.clientY - rect.top;
      isDown = true;
    };

     el.onmouseup = function() {
         isDown = false;
    };

    el.onmousemove = function(e) {
    
    if (!isDown) return;

       var rect = el.getBoundingClientRect(),
       x2 = e.clientX - rect.left,
       y2 = e.clientY - rect.top;
       

       ctx.clearRect(0, 0, 640, 480);  
   
    var radiusX = (x2 - x1) * 0.5,   /// radius for x based on input
        radiusY = (y2 - y1) * 0.5,   /// radius for y based on input
        centerX = x1 + radiusX,      /// calc center
        centerY = y1 + radiusY,
        step = 0.01,                 /// resolution of ellipse
        a = step,                    /// counter
        pi2 = Math.PI * 2 - step;    /// end angle

    /// start a new path
    ctx.beginPath();

    /// set start point at angle 0
    ctx.moveTo(centerX + radiusX * Math.cos(0),
               centerY + radiusY * Math.sin(0));

    /// create the ellipse    
    for(; a < pi2; a += step) {
        ctx.lineTo(centerX + radiusX * Math.cos(a),
                   centerY + radiusY * Math.sin(a));
    }

    /// close it and stroke it for demo
    ctx.closePath();
    ctx.strokeStyle = '#000';
    ctx.stroke();
       



    };
  

}

drawEllipse(x1, y1, x2, y2)   {
 
    var el = <HTMLCanvasElement> document.getElementById("mycanvas");
    var ctx = el.getContext('2d');
   
    var radiusX = (x2 - x1) * 0.5,   /// radius for x based on input
        radiusY = (y2 - y1) * 0.5,   /// radius for y based on input
        centerX = x1 + radiusX,      /// calc center
        centerY = y1 + radiusY,
        step = 0.01,                 /// resolution of ellipse
        a = step,                    /// counter
        pi2 = Math.PI * 2 - step;    /// end angle

    /// start a new path
    ctx.beginPath();

    /// set start point at angle 0
    ctx.moveTo(centerX + radiusX * Math.cos(0),
               centerY + radiusY * Math.sin(0));

    /// create the ellipse    
    for(; a < pi2; a += step) {
        ctx.lineTo(centerX + radiusX * Math.cos(a),
                   centerY + radiusY * Math.sin(a));
    }

    /// close it and stroke it for demo
    ctx.closePath();
    ctx.strokeStyle = '#000';
    ctx.stroke();
}



clearCanvas()
{
   var el = <HTMLCanvasElement> document.getElementById("mycanvas");
   var ctx = el.getContext('2d');
   
   ctx.clearRect(0, 0,  640, 480);

}



}

