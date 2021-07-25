
var canvas = new fabric.Canvas("myCanvas")

ball_x = 10;
ball_y = 10;
hole_x = 800;
hole_y = 400;


block_image_width = 5;
block_image_height = 5;

var hole_obj = "";
var ball_obj = "";

function load_img(){
	fabric.Image.fromURL("golf-h.png",function(Img) {
	hole_obj = Img;
	hole_obj.scaleToWidth(50);
	hole_obj.scaleToHeight(50);
    hole_obj.set({
		top:hole_y,
		left:hole_x
	});
	canvas.Add(hole_obj);
});


	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png",function(Img) {
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_y,
			left:ball_x
		});
		Canvas.Add(ball_obj);
	});
	
	
		new_image();
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if(ball_x == hole_x , ball_y == hole_y)
	{
		document.getElementById("hd3").innerHTML = "Yay you Hit the Goal";
		document.getElementById("myCanvas").style.borderColor = 'red';
		Canvas.remove(hole_obj);
		Canvas.remove(ball_obj);
	} 
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if(ball_y>=50)
		{
		ball_y == ball_y - 10;
		new_image();
		Canvas.remove(ball_obj)
		}
	}

	function down()
	{
		if(ball_y <=550 )
		 ball_y == ball_y + 10;
		 new_image()
		 canvas.remove(ball_obj)
	}

	function left()
	{
		if(ball_x >5)
		{
		ball_x == ball_x - 10;
		new_image();
		canvas.remove(ball_obj)
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x == ball_x + 10;
			new_image();
			canvas.remove(ball_obj)
		}
	}
	
}

