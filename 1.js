// function movingImage(margin) {
//     document.querySelector(".ball").style.margin = margin;
// }
// function movingImageLeft(marginLeft) {
//     document.querySelector(".ball").style.marginLeft = marginLeft;
// }
// function movingImageRight(marginRight) {
//     document.querySelector(".ball").style.marginRight = marginRight;
// }
// function movingImageTop(marginTop) {
//     document.querySelector(".ball").style.marginTop = marginTop;
// }
// function movingImageDown(marginDown) {
//     document.querySelector(".ball").style.marginDown = marginDown;
// }

var Left =0;
var Top=0;
var Buttom=0;
var Right = Left;

function ButtomPart(){
    Top= Top+30;
    document.querySelector('.rect').style.marginTop=Top +'px';
    if(Top>300){
        alert("Ball Exceeds");
        document.querySelector('.rect').style.marginTop='300px'
    }
}
function TopPart(){
    Buttom= Buttom-30;
    document.querySelector('.rect').style.marginTop=Buttom+'px';
    Top==Buttom;
    if(Buttom< -180){
        alert("Ball Exceeds");
        document.querySelector('.rect').style.marginTop='-180px'
    }
   
    }

function LeftPart(){
    Right= Right-30;
    document.querySelector('.rect').style.marginLeft=Right+'px';
    Left = Right;
    if(Right <-400){
        alert("Ball Exceed");
        document.querySelector('.rect').style.marginLeft='-400px'
    }
    else if(Right<-380){
        alert("Goal Completed");
    }
}
function RightPart(){
    Left = Left+30;
    document.querySelector('.rect').style.marginLeft=Left+'px';
    if(Left>601){
        alert("Ball exceeds");
        document.querySelector('.rect').style.marginLeft='601px'
    }
    else if(Left==600){
        alert("Goal completed");
    }
    
}