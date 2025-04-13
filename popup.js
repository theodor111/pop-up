var popup = document.getElementsByClassName("imagine")[0];
isopen = false;
var line = document.querySelector(".line");
var text =document.querySelector(".text");
var nav = document.querySelector(".navbar2");
var body1 = document.querySelector(".popup");
var navbar2 = document.querySelector(".navbar2");
text.style.visibility="hidden"; 
popup.onclick = function(){
    var popupDiv=document.querySelector(".popup");
    if(isopen==false){
        popupDiv.style.width="250px";
        popupDiv.style.transition="width 0.5s";
        line.style.visibility="visible";
        setTimeout(function () {
            text.style.visibility = "visible";
            text.style.opacity = "1"; // Asigură tranziția lină
            text.style.transition = "opacity 0.5s ease";
            navbar2.style.transition="background-color 0.5s";
        }, 170);
        
    }
    if(isopen==true){
        popupDiv.style.width="50px";
        popupDiv.style.transition="width 0.5s";
        line.style.visibility="hidden";
        text.style.visibility="hidden";
      
    }
    isopen=!isopen;
}
var islight=false;
body1.style.color="white";
nav.onclick = function(){
if(islight==false){
    body1.style.backgroundColor="white";
    body1.style.color="black";
  body1.style.transition="background-color 0.5s, color 0.5s";
   
}
    if(islight==true){
        body1.style.backgroundColor="black";
        body1.style.color="white";
        body1.style.transition="background-color 0.5s, color 0.5s";
    }
    islight=!islight;
}