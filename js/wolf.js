console.log("RAWR");

var W = H = 1000;
var canvas = document.getElementById("wolf");
canvas.width = W;
canvas.height = H;
canvas.style.position = "relative";
canvas.style.width = "500px";
canvas.style.height = "auto";
// canvas.style.left = (window.innerWidth * 0.5 - W * scale * 0.5) + "px";
// canvas.style.top = (window.innerHeight * 0.5 - H * scale * 0.5) + "px";

var ctx = canvas.getContext("2d");
	// drawFace();
	ctx.rect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "rgb("+ Math.floor(Math.random() * 125) + "," + Math.floor(Math.random() * 125) + "," + Math.floor(Math.random() * 125) + ")";
	ctx.fill();
	ctx.save();
	ctx.translate(canvas.width/2, canvas.height/2);
	//face
	ctx.beginPath();
	ctx.fillStyle = "#999999";
	ctx.strokeStyle="#000000";
	ctx.lineWidth=5;
	ctx.moveTo(0,-250);
	ctx.lineTo(-150,-250);
	ctx.bezierCurveTo(-300,-500,-300,-500,-300,-200);
	ctx.quadraticCurveTo(-320,-100,-300,-50);
	ctx.bezierCurveTo(-370,70,-100,200,0,200);
	ctx.moveTo(0,-250);
	ctx.lineTo(150,-250);
	ctx.bezierCurveTo(300,-500,300,-500,300,-200);
	ctx.quadraticCurveTo(320,-100,300,-50);
	ctx.bezierCurveTo(370,70,100,200,0,200);
    ctx.fill();
    ctx.stroke();

    //innerface
    ctx.beginPath();
	ctx.fillStyle = "#ffffff";
	ctx.moveTo(0,0);
	ctx.quadraticCurveTo(-80,-70,-130,-80);
	ctx.bezierCurveTo(-230,-80,-130,0,-100,0);
	ctx.bezierCurveTo(-100,80,-100,80,-100,80);
	ctx.fill();

    //nose
    ctx.beginPath();
    ctx.fillStyle = "#000000";
    ctx.moveTo(0,100);
    ctx.bezierCurveTo(-70,100,0,130,0,130)
    ctx.moveTo(0,100);
    ctx.bezierCurveTo(70,100,0,130,0,130)
    ctx.fill();
    ctx.stroke();

    //eyes
    ctx.beginPath();
    ctx.fillStyle = "#000000";
    ctx.moveTo(-90,-50);
    ctx.bezierCurveTo(-100,-80,-160,-60,-160,-60);
    ctx.bezierCurveTo(-130,0,-80,-20,-90,-50);
    ctx.stroke();
    ctx.fill();

	
    ctx.restore();