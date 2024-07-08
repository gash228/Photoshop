let previous_sliders=[];




function RestoreUndoValues(){
	let x=document.getElementById("svetlost-slider");
    x.value=previous_sliders[4];
    x=document.getElementById("tresh-slider");
    x.value=previous_sliders[3];
    x=document.getElementById("slider-r");
    x.value=previous_sliders[0];
    x=document.getElementById("slider-g");
    x.value=previous_sliders[1];
    x=document.getElementById("slider-b");
    x.value=previous_sliders[2];
}

function ElementId(id) {
	return document.getElementById(id);
}

function savePreviousImageData() {
    let imgData=ctx.getImageData(0, 0, canvas.width, canvas.height);
    previous=new ImageData(imgData.width, imgData.height);
    previous.data.set(imgData.data);
}


ElementId("gray").addEventListener("click", () => {
	savePreviousImageData();
	let imgData=ctx.getImageData(0, 0, canvas.width, canvas.height);
	let data=imgData.data;

	grayscale(data);

	imgData.data=data;
	ctx.putImageData(imgData, 0, 0);
	posodobiHistogram(histogramVrednosti);
	original_brightness=imgData;
	original_thresh=imgData;
	original_black=imgData;
	original_color[0]=imgData;
	original_color[1]=imgData;
	original_color[2]=imgData;
});

ElementId("tresh-slider").addEventListener("input", () => {
	let imgData=ctx.getImageData(0, 0, canvas.width, canvas.height);
    imgData.data.set(original_thresh.data); 

	treshold(imgData.data, Number(ElementId("tresh-slider").value));

	ctx.putImageData(imgData, 0, 0);
	posodobiHistogram(histogramVrednosti);
	original_brightness=imgData;
	original_black=imgData;
	original_color[0]=imgData;
	original_color[1]=imgData;
	original_color[2]=imgData;
});

ElementId("tresh-slider").addEventListener("mousedown", () => {
	savePreviousImageData();
	previous_sliders[3]=Number(ElementId("tresh-slider").value);
});

ElementId("sepia").addEventListener("click", ()=>{
	savePreviousImageData();
	let imgData=ctx.getImageData(0, 0, canvas.width, canvas.height);
	let data=imgData.data;

	sepia(data);

	imgData.data=data;
	ctx.putImageData(imgData, 0, 0);
	posodobiHistogram(histogramVrednosti);
	original_brightness=imgData;
	original_thresh=imgData;
	original_black=imgData;
	original_color[0]=imgData;
	original_color[1]=imgData;
	original_color[2]=imgData;
});




ElementId("odstrani-r").addEventListener("click", () => {
	savePreviousImageData();
	let imgData=ctx.getImageData(0, 0, canvas.width, canvas.height);
	let data=imgData.data;

	odstranikanal(data, 0);

	imgData.data=data;
	ctx.putImageData(imgData, 0, 0);
	posodobiHistogram(histogramVrednosti);
	original_brightness=imgData;
	original_thresh=imgData;
	original_black=imgData;
	original_color[0]=imgData;
	original_color[1]=imgData;
	original_color[2]=imgData;
});

ElementId("odstrani-g").addEventListener("click", () => {
	savePreviousImageData();
	let imgData=ctx.getImageData(0, 0, canvas.width, canvas.height);
	let data=imgData.data;

	odstranikanal(data, 1);

	imgData.data=data;
	ctx.putImageData(imgData, 0, 0);
	posodobiHistogram(histogramVrednosti);
	original_brightness=imgData;
	original_thresh=imgData;
	original_black=imgData;
	original_color[0]=imgData;
	original_color[1]=imgData;
	original_color[2]=imgData;
});

ElementId("odstrani-b").addEventListener("click", () => {
	savePreviousImageData();
	let imgData=ctx.getImageData(0, 0, canvas.width, canvas.height);
	let data=imgData.data;

	odstranikanal(data, 2);

	imgData.data=data;
	ctx.putImageData(imgData, 0, 0);
	posodobiHistogram(histogramVrednosti);
	original_brightness=imgData;
	original_thresh=imgData;
	original_black=imgData;
	original_color[0]=imgData;
	original_color[1]=imgData;
	original_color[2]=imgData;
});

ElementId("slider-r").addEventListener("input", () => {
	let imgData=ctx.getImageData(0, 0, canvas.width, canvas.height);
	imgData.data.set(original_color[0].data); 

	poudarikanal(imgData.data, 0, Number(ElementId("slider-r").value));

	ctx.putImageData(imgData, 0, 0);
	posodobiHistogram(histogramVrednosti);
	original_brightness=imgData;
	original_thresh=imgData;
	original_black=imgData;
	original_color[1]=imgData;
	original_color[2]=imgData;
});


ElementId("slider-r").addEventListener("mousedown", () => {
	savePreviousImageData();
	previous_sliders[0]=Number(ElementId("slider-r").value);
});



ElementId("slider-g").addEventListener("input", () => {
	let imgData=ctx.getImageData(0, 0, canvas.width, canvas.height);
	imgData.data.set(original_color[1].data); 

	poudarikanal(imgData.data, 1, Number(ElementId("slider-g").value));

	ctx.putImageData(imgData, 0, 0);
	posodobiHistogram(histogramVrednosti);
	original_brightness=imgData;
	original_thresh=imgData;
	original_black=imgData;
	original_color[0]=imgData;
	original_color[2]=imgData;
});



ElementId("slider-g").addEventListener("mousedown", () => {
	savePreviousImageData();
	previous_sliders[1]=Number(ElementId("slider-g").value);
});



ElementId("slider-b").addEventListener("input", () => {
	let imgData=ctx.getImageData(0, 0, canvas.width, canvas.height);
	imgData.data.set(original_color[2].data); 

	poudarikanal(imgData.data, 2, Number(ElementId("slider-b").value));

	ctx.putImageData(imgData, 0, 0);
	posodobiHistogram(histogramVrednosti);
	original_brightness=imgData;
	original_thresh=imgData;
	original_black=imgData;
	original_color[1]=imgData;
	original_color[0]=imgData;
});


ElementId("slider-b").addEventListener("mousedown", () => {
	savePreviousImageData();
	previous_sliders[2]=Number(ElementId("slider-b").value);
});



ElementId("svetlost-slider").addEventListener("input", () => {
    let imgData=ctx.getImageData(0, 0, canvas.width, canvas.height);
    imgData.data.set(original_brightness.data); 

    svetlost(imgData.data, Number(ElementId("svetlost-slider").value));

    ctx.putImageData(imgData, 0, 0);
    posodobiHistogram(histogramVrednosti);
	original_thresh=imgData;
	original_black=imgData;
	original_color[0]=imgData;
	original_color[1]=imgData;
	original_color[2]=imgData;
});


ElementId("svetlost-slider").addEventListener("mousedown", () => {
	savePreviousImageData();
	previous_sliders[4]=Number(ElementId("svetlost-slider").value);
});






ElementId("box").addEventListener("click", () => {
	savePreviousImageData();
	let imgData=ctx.getImageData(0, 0, canvas.width, canvas.height);
	let data=imgData.data;

	boxBlur(data, canvas.width, canvas.height);

	imgData.data=data;
	ctx.putImageData(imgData, 0, 0);
	posodobiHistogram(histogramVrednosti);
	original_brightness=imgData;
	original_thresh=imgData;
	original_black=imgData;
	original_color[0]=imgData;
	original_color[1]=imgData;
	original_color[2]=imgData;
});

ElementId("gaus").addEventListener("click", () => {
	savePreviousImageData();
	let imgData=ctx.getImageData(0, 0, canvas.width, canvas.height);
	let data=imgData.data;

	gaus(data, canvas.width, canvas.height);

	imgData.data=data;
	ctx.putImageData(imgData, 0, 0);
	posodobiHistogram(histogramVrednosti);
	original_brightness=imgData;
	original_thresh=imgData;
	original_black=imgData;
	original_color[0]=imgData;
	original_color[1]=imgData;
	original_color[2]=imgData;
});

ElementId("sobel").addEventListener("click", () => {
	savePreviousImageData();
	let imgData=ctx.getImageData(0, 0, canvas.width, canvas.height);
	let data=imgData.data;

	sobel(data, canvas.width, canvas.height);

	imgData.data=data;
	ctx.putImageData(imgData, 0, 0);
	posodobiHistogram(histogramVrednosti);
	original_brightness=imgData;
	original_thresh=imgData;
	original_black=imgData;
	original_color[0]=imgData;
	original_color[1]=imgData;
	original_color[2]=imgData;
});

ElementId("laplac").addEventListener("click", () => {
	savePreviousImageData();
	let imgData=ctx.getImageData(0, 0, canvas.width, canvas.height);
	let data=imgData.data;

	laplec(data, canvas.width, canvas.height);

	imgData.data=data;
	ctx.putImageData(imgData, 0, 0);
	posodobiHistogram(histogramVrednosti);
	original_brightness=imgData;
	original_thresh=imgData;
	original_black=imgData;
	original_color[0]=imgData;
	original_color[1]=imgData;
	original_color[2]=imgData;
});

ElementId("ostr").addEventListener("click", () => {
	savePreviousImageData();
	let imgData=ctx.getImageData(0, 0, canvas.width, canvas.height);
	let data=imgData.data;

	ostrenje(data, canvas.width, canvas.height);

	imgData.data=data;
	ctx.putImageData(imgData, 0, 0);
	posodobiHistogram(histogramVrednosti);
	original_brightness=imgData;
	original_thresh=imgData;
	original_black=imgData;
	original_color[0]=imgData;
	original_color[1]=imgData;
	original_color[2]=imgData;
});

ElementId("neostr").addEventListener("click", () => {
	savePreviousImageData();
	let imgData=ctx.getImageData(0, 0, canvas.width, canvas.height);
	let data=imgData.data;

	unsharpMasking(data, canvas.width, canvas.height);

	imgData.data=data;
	ctx.putImageData(imgData, 0, 0);
	posodobiHistogram(histogramVrednosti);
	original_brightness=imgData;
	original_thresh=imgData;
	original_black=imgData;
	original_color[0]=imgData;
	original_color[1]=imgData;
	original_color[2]=imgData;
});


document.getElementById("undo").addEventListener("click", ()=>{
	ctx.putImageData(previous, 0, 0);
	posodobiHistogram(histogramVrednosti);
	setTimeout(()=>{
		let imgData=ctx.getImageData(0, 0, canvas.width, canvas.height);
		original_brightness=imgData;
		original_thresh=imgData;
		original_black=imgData;
		original_color[0]=imgData;
		original_color[1]=imgData;
		original_color[2]=imgData;
	}, 20);


	RestoreUndoValues();
});


ElementId("restore").addEventListener("click", ()=>{
		savePreviousImageData();
		ctx.putImageData(original_img_data, 0, 0);
		posodobiHistogram(histogramVrednosti);
		setTimeout(()=>{
			let imgData=ctx.getImageData(0, 0, canvas.width, canvas.height);
			original_brightness=imgData;
			original_thresh=imgData;
			original_black=imgData;
			original_color[0]=imgData;
			original_color[1]=imgData;
			original_color[2]=imgData;
		}, 20);

		ResetSliderValue();
	
});

let brush_clicked=false;
let eraser_clicked=false;
let c='black';

ElementId("brush").addEventListener("click", () => {
    brush_clicked=!brush_clicked;
    if (brush_clicked) {
        ElementId("brush").classList.add("selected");
        ElementId("eraser").parentNode.classList.add("hidden");
        canvas.addEventListener('mousedown', startPainting);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('mouseup', stopPainting);
        canvas.addEventListener('mouseout', stopPainting);

        let colors=['blue', 'red', 'white', 'black', 'green', 'yellow', 'purple', 'brown'];
        let colorDiv=document.createElement('div');
        colorDiv.classList.add('color-options');
        for (let color of colors) {

            let square=document.createElement('div');
			square.addEventListener('click', () => {
				let s=document.querySelector(".square-selected");
				if(s) s.classList.remove("square-selected");
				square.classList.add("square-selected");
                c=color;
            });
            square.classList.add('color-square');
            square.style.backgroundColor=color;
            colorDiv.appendChild(square);
        }
        ElementId("brush").parentNode.parentNode.appendChild(colorDiv);
    } else {
        ElementId("brush").classList.remove("selected");
        ElementId("eraser").parentNode.classList.remove("hidden");
        canvas.removeEventListener('mousedown', startPainting);
        canvas.removeEventListener('mousemove', draw);
        canvas.removeEventListener('mouseup', stopPainting);
        canvas.removeEventListener('mouseout', stopPainting);
        let colorDiv=document.querySelector('.color-options');
        if (colorDiv) colorDiv.remove();
    }
    posodobiHistogram(histogramVrednosti);
});


ElementId("eraser").addEventListener("click", () => {
    eraser_clicked=!eraser_clicked;
    if (eraser_clicked) {
        ElementId("eraser").classList.add("selected");
        ElementId("brush").parentNode.classList.add("hidden");
        canvas.addEventListener('mousedown', startErasing);
        canvas.addEventListener('mousemove', erase);
        canvas.addEventListener('mouseup', stopPainting);
        canvas.addEventListener('mouseout', stopPainting);
    } else {
        ElementId("eraser").classList.remove("selected");
        ElementId("brush").parentNode.classList.remove("hidden");
        canvas.removeEventListener('mousedown', startErasing);
        canvas.removeEventListener('mousemove', erase);
        canvas.removeEventListener('mouseup', stopPainting);
        canvas.removeEventListener('mouseout', stopPainting);
    }
});


function startPainting(event) {
	isPainting=true;
    savePreviousImageData();
    draw(event);
}


function startErasing(event) {
	isPainting=true;
    savePreviousImageData();
    erase(event);
}

function erase(event) {
    if (!isPainting) return 0;

    let x=event.offsetX;
    let y=event.offsetY;

    ctx.lineCap='round';

        ctx.lineWidth=40;
        ctx.strokeStyle='white';
    

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}



function draw(event) {
    if (!isPainting) return 0;

    let x=event.offsetX;
    let y=event.offsetY;

    ctx.lineCap='round';

        ctx.lineWidth=4;
        ctx.strokeStyle=c;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}



function stopPainting() {
    isPainting=false;
    ctx.beginPath();
    posodobiHistogram(histogramVrednosti);
}

ElementId("download").addEventListener("click", () => {
    let dataURL=canvas.toDataURL("image/png");
    let link=document.createElement("a");
    link.href=dataURL;
    link.download="canvas_image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
