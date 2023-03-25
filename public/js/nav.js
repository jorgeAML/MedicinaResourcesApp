window.onload = function(){
	var canvas = document.getElementById("nav");
	var context = canvas.getContext("2d");

	context.lineWidth = 3;
	context.strokeStyle = "black";
	
	context.beginPath();
	context.moveTo(10,10);
	context.lineTo(10,20);
	context.moveTo(10,20);
	context.lineTo(200,20);
	context.stroke();

};
