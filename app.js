/**
 * Created by lcc on 15/11/3.
 */
var box1Div,msgDiv,img1;
window.onload=function(){
    box1Div=document.getElementById("box1");
    msgDiv=document.getElementById("msg");
    img1=document.getElementById("img1");

    box1Div.ondragover=function(e){
        e.preventDefault();//阻止系统的默认事件
    }

    box1Div.ondragenter=function(e){
        show(e.dataTransfer);
        e.preventDefault();
        var img=document.getElementById(e.dataTransfer.getData("imgId"));
        box1Div.appendChild(img);
    }

    img1.ondragstart= function (e) {
        e.target.setData("imgId","img1");
    }
}

/*获取拖拽事件信息*/
function show(obj){
    var  s="";
    for(var k in  obj){
        s+=k+":"+obj[k]+"<br/>"
    }
    msgDiv.innerHTML=s;
}
