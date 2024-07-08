let imageLoader=document.getElementById('slika');
    imageLoader.addEventListener('change', handleImage, false);
let canvas=document.getElementById('image');
let ctx=canvas.getContext('2d');
let original_brightness;
let original_thresh;
let original_black;
let original_color=[];
let previous=undefined;
let isPainting=false;

let original_img_data;

function handleImage(e) {
    let reader=new FileReader();
    reader.onload=function(event) {
        let img=new Image();
        img.onload=function() {
            let width=img.width;
            let height=img.height;
            let aspectRatio=width / height;

            if (width > 720 || height > 500) {
                if (width / 720 > height / 500) {
                    width=720;
                    height=width / aspectRatio;
                } else {
                    height=500;
                    width=height * aspectRatio;
                }
            }

            canvas.width=width;
            canvas.height=height;
            ctx.drawImage(img, 0, 0, width, height);
            posodobiHistogram(histogramVrednosti);

            setTimeout(() => {
                original_img_data=ctx.getImageData(0, 0, canvas.width, canvas.height);
                original_brightness=ctx.getImageData(0, 0, canvas.width, canvas.height);
                original_thresh=ctx.getImageData(0, 0, canvas.width, canvas.height);
                original_black=ctx.getImageData(0, 0, canvas.width, canvas.height);
                original_color[0]=ctx.getImageData(0, 0, canvas.width, canvas.height);
                original_color[1]=ctx.getImageData(0, 0, canvas.width, canvas.height);
                original_color[2]=ctx.getImageData(0, 0, canvas.width, canvas.height);
            }, 100);
        }
        img.src=event.target.result;
        original=img;
    }
    reader.readAsDataURL(e.target.files[0]);
    let x=document.getElementsByTagName("fieldset");
    for (let i=0; i < x.length; i++) {
        x[i].classList.remove("hidden");
    }
    x=document.getElementById("image");
    x.classList.remove("hidden");
    x=document.querySelector(".upload");
    x.remove();
    EnableButtons();
}





