
function DisableButtons(){
    let buttons=document.getElementsByTagName("button");
    for(let i=0;i<buttons.length;i++){
        buttons[i].disabled=true;
    }
    buttons=document.querySelectorAll("input[type='range']");
    for(let i=0; i<buttons.length; i++) {
        buttons[i].classList.add("disabled");
    }

}


function EnableButtons(){
    let buttons=document.getElementsByTagName("button");
    for(let i=0;i<buttons.length;i++){
        buttons[i].disabled=false;
    }
    buttons=document.querySelectorAll("input[type='range']");
    for(let i=0; i<buttons.length; i++) {
        buttons[i].classList.remove("disabled");
    }
    buttons=document.getElementsByTagName("i");
    for(let i=0; i<buttons.length; i++) {
        buttons[i].classList.remove("dis");
        buttons[i].classList.add("ic");
    }
}


function ResetSliderValue(){
    let x=document.getElementById("svetlost-slider");
    x.value=0;
    x=document.getElementById("tresh-slider");
    x.value=128;
    x=document.getElementById("slider-r");
    x.value=1;
    x=document.getElementById("slider-g");
    x.value=1;
    x=document.getElementById("slider-b");
    x.value=1;
}