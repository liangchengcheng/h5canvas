/**
 * Created by lcc on 15/11/4.
 */
var  CANVAS_WIDTH=200, CANVASHEIGHT=200;
var mycanvars,context;
window.onload=function(){

}
function createCanvas(){
    document.body.innerHTML="<canvas id=\"mycanvas\" width=\""+CANVAS_WIDTH+"\" height=\""+CANVASHEIGHT+"\"></canvas>";
    mycanvars=document.getElementById("mycanvas");
    context=mycanvars.getContext("2d");

}

function drawrect(){
    mycanvars.fillStyle="ff0000";
    //旋转
    mycanvars.root(45);
    //移动
    mycanvars.translate(200,200);
    //缩放
    mycanvars.scale(2,0.5);
    mycanvars.fillRect(0,0,200,200);

}

function drawimage(){
    var img=new Image();
    img.onload=function(){
        context.drawImage(img,0,0);
    }
    img.src="1.jpg";
}
