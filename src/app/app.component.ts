import { Component } from '@angular/core';
declare var $: any;

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
    var mouseX,mouseY;
    //ctx.fillRect(25, 25, 100, 100);
    //ctx.clearRect(45, 45, 60, 60);
    ctx.strokeRect(50, 50, 50, 50);

   
  }



insertText()
{

 console.log("BUTTON CLICKED");
var canvas = <HTMLCanvasElement> document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");

// variables used to get mouse position on the canvas
var $canvas = $("#mycanvas");
var canvasOffset = $canvas.offset();
var offsetX = canvasOffset.left;
var offsetY = canvasOffset.top;
var scrollX = $canvas.scrollLeft();
var scrollY = $canvas.scrollTop();

// variables to save last mouse position
// used to see how far the user dragged the mouse
// and then move the text by that distance
var startX;
var startY;

// an array to hold text objects
var texts = [];

// this var will hold the index of the hit-selected text
var selectedText = -1;

// clear the canvas & redraw all texts
function draw() {
    var el1 = <HTMLCanvasElement> document.getElementById("mycanvas");
var ctx1 = el1.getContext('2d');
var imageData = ctx1.getImageData(0, 0, 640, 480);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.putImageData(imageData, 0, 0);
    for (var i = 0; i < texts.length; i++) {
        var text = texts[i];
        ctx.fillText(text.text, text.x, text.y);
    }
    this.insertText();
}

// test if x,y is inside the bounding box of texts[textIndex]
function textHittest(x, y, textIndex) {
    var text = texts[textIndex];
    return (x >= text.x && x <= text.x + text.width && y >= text.y - text.height && y <= text.y);
}

// handle mousedown events
// iterate through texts[] and see if the user
// mousedown'ed on one of them
// If yes, set the selectedText to the index of that text
function handleMouseDown(e) {
    e.preventDefault();
    startX = e.clientX - offsetX;
    startY = e.clientY - offsetY;
    // Put your mousedown stuff here
    for (var i = 0; i < texts.length; i++) {
        if (textHittest(startX, startY, i)) {
            selectedText = i;
        }
    }
}

// done dragging
function handleMouseUp(e) {
    e.preventDefault();
    selectedText = -1;
}

// also done dragging
function handleMouseOut(e) {
    e.preventDefault();
    selectedText = -1;
}

// handle mousemove events
// calc how far the mouse has been dragged since
// the last mousemove event and move the selected text
// by that distance
function handleMouseMove(e) {
    if (selectedText < 0) {
        return;
    }
    e.preventDefault();
    var mouseX = e.clientX - offsetX;
   var  mouseY =e.clientY - offsetY;

    // Put your mousemove stuff here
    var dx = mouseX - startX;
    var dy = mouseY - startY;
    startX = mouseX;
    startY = mouseY;

    var text = texts[selectedText];
    text.x += dx;
    text.y += dy;
    draw();
}

// listen for mouse events
$("#mycanvas").mousedown(function (e) {
    handleMouseDown(e);
});
$("#mycanvas").mousemove(function (e) {
    handleMouseMove(e);
});
$("#mycanvas").mouseup(function (e) {
    handleMouseUp(e);
});
$("#mycanvas").mouseout(function (e) {
    handleMouseOut(e);
});

$("#submit").click(function () {

    console.log("BUTTON CLICKED 1");
    // calc the y coordinate for this text on the canvas
    var y = texts.length * 20 + 20;

    // get the text from the input element
    var text = {
        text: $("#theText").val(),
        x: 20,
        y: y,
        width:null,
        height:null
    };

    // calc the size of this text for hit-testing purposes
    ctx.font = "16px verdana";
    text.width = ctx.measureText(text.text).width;
    text.height = 16;

    // put this new text in the texts array
    texts.push(text);

    // redraw everything
    draw();

});
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


      lastPoint = { x: e.clientX, y: e.clientY };
      };

      el.onmouseup = function() {
      isDrawing = false;
      };



}

drawEclipse()
{

    var el = <HTMLCanvasElement> document.getElementById("mycanvas");
    
    var ctx = el.getContext('2d');
    var imageData = ctx.getImageData(0, 0, 640, 480);
    
    var isDrawing,x1,y1,isDown=false,x2,y2;
    var temp = 1;
    ctx.translate(0.5, 0.5);  

    el.onmousedown = function(e) {
        var el1 = <HTMLCanvasElement> document.getElementById("mycanvas");
var ctx1 = el1.getContext('2d');
imageData = ctx1.getImageData(0, 0, 640, 480);
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
       console.log(imageData)
        ctx.putImageData(imageData, 0, 0);
       //ctx.clearRect(0, 0, 640, 480);  
   
    var radiusX = (x2 - x1) * 0.5,   /// radius for x based on input
        radiusY = (y2 - y1) * 0.5,   /// radius for y based on input
        centerX = x1 + radiusX,      /// calc center
        centerY = y1 + radiusY,
        step = 0.01,                 /// resolution of ellipse
        a = step,                    /// counter
        pi2 = Math.PI * 2 - step;    /// end angle

    /// start a new path
    //if(temp){
    ctx.beginPath();
    temp = 0;
    //}

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

drawReact()
{
  
  var el : any=  document.getElementById("mycanvas");
  var ctx = el.getContext('2d');
  var imageData = ctx.getImageData(0, 0, 640, 480);
  //var rect = el.getBoundingClientRect();
 
  var canvasOffset = $("#mycanvas").offset();
  var canvasx= canvasOffset.left;
  var canvasy= canvasOffset.top;
   

  //var canvasx =rect.offsetLeft;
  //var canvasy = rect.offsetTop;
  
  var last_mousex , last_mousey =  0;
  var mousex , mousey =  0;
  var mousedown = false;
 


  el.onmousedown = function(e) {
      var el1 = <HTMLCanvasElement> document.getElementById("mycanvas");
var ctx1 = el1.getContext('2d');
imageData = ctx1.getImageData(0, 0, 640, 480);
      last_mousex = e.clientX - canvasx;
      last_mousey = e.clientY - canvasy;
      mousedown = true;
      
    };

   el.onmouseup = function() {
         mousedown = false;
    };

    el.onmousemove = function(e) {

        mousex = e.clientX-canvasx;
      	mousey = e.clientY-canvasy;
        
      if(mousedown) { 

        console.log("finsihed."); 
        ctx.clearRect(0, 0, 640, 480);  
        ctx.putImageData(imageData, 0, 0);
        ctx.beginPath();
        var width = mousex-last_mousex;
        var height = mousey-last_mousey;
        ctx.rect(last_mousex,last_mousey,width,height);
        ctx.lineWidth = 2;
        ctx.stroke();
      }
  };
}


setColor(val)
{
   var el : any=  document.getElementById("mycanvas");
   var ctx = el.getContext('2d'); 
   ctx.strokeStyle = val;
}


clearCanvas()
{
   var el = <HTMLCanvasElement> document.getElementById("mycanvas");
   var ctx = el.getContext('2d');
   ctx.setTransform(1, 0, 0, 1, 0, 0);
  ctx.clearRect(0, 0,ctx.canvas.width,ctx.canvas.height);
}


}

