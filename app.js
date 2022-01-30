
var f=document.getElementsByClassName("f");


function gg(){
    
    for (let i = 0; i < f.length; i++) {
        f[i].classList.toggle("j");
        
    }
 
}




var pre_but =document.getElementById('but_left');
var nex_but =document.getElementById('but_right');
var change =document.querySelectorAll(".modimg");
var imgs =document.getElementById('imgb');

var index=0;

nex_but.addEventListener('click',function(){
    
    if(index>=change.length){
        index=0;
    }
    
    imgs.src= change[index].src;
    index++;
    
});

pre_but.addEventListener('click',function(){
    
    
    if(index<=0){
        index=change.length;
    }
    index--;
    imgs.src= change[index].src;
    
    
});