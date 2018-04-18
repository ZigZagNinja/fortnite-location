//get canvas 2d context global
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');



//draw image gloabal
function drawImage(source, xPos, yPos){
		//new image object
		var imageObj = new Image();

		//if image object loads
		imageObj.onload = function() {
	    ctx.drawImage(imageObj, xPos, yPos);
	    };
	    imageObj.src = source;
	}


//mouse position global
	//get mouse x and y
	    window.addEventListener('mousemove',
        function (event) {
            mouse.xPos = event.x;
            mouse.yPos = event.y;
            //console.log(mouse);
        });

    var mouse = {
        xPos : undefined,
        yPos : undefined
    }



//draw map
drawImage("map.png",0, 0);


//no cities specefied
function random(){

	//clear canvas for redraw
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	//redraw map image
	drawImage("map.png",0, 0);


    
    function chooseRandomYNoPoints(){
    	var randomHeight = Math.random()*canvas.height;
    	return randomHeight;
    }
    function chooseRandomXNoPoints(){
    	var randomWidth = Math.random()*canvas.width;
    	return randomWidth;
    }
    
    var randomX = chooseRandomXNoPoints();
	var randomY = chooseRandomYNoPoints();



    drawImage("marker.png", randomX, randomY);
}//random end
	

//random city
function randomCity(){
	var cities = [
		//junk
		{
			xPosition: 194,
			yPosition: 84
		},
		//haunted
		{
			xPosition: 146,
			yPosition: 180
		},
		//pleasant
		{
			xPosition: 287,
			yPosition: 270
		},
		//anarchy
		{
			xPosition: 538,
			yPosition: 200
		},
		//loot
		{
			xPosition: 450,
			yPosition: 362
		},
		//tomato
		{
			xPosition: 698,
			yPosition: 322
		},
		//wailing
		{
			xPosition: 866,
			yPosition: 276
		},
		//snobby
		{
			xPosition: 77,
			yPosition: 438
		},
		//tilted
		{
			xPosition: 385,
			yPosition: 495
		},
		//dusty
		{
			xPosition: 618,
			yPosition: 438
		},
		//lonely
		{
			xPosition: 937,
			yPosition: 413
		},
		//greasy
		{
			xPosition: 234,
			yPosition: 625
		},
		//shifty
		{
			xPosition: 386,
			yPosition: 641
		},
		//salty
		{
			xPosition: 594,
			yPosition: 625
		},
		//retail
		{
			xPosition: 780,
			yPosition: 536
		},
		//fatal
		{
			xPosition: 633,
			yPosition: 775
		},
		//moisty
		{
			xPosition: 877,
			yPosition: 798
		},
		//flush
		{
			xPosition: 366,
			yPosition: 886
		},
		//lucky
		{
			xPosition: 596,
			yPosition: 942
		}
	];

	//clear canvas for redraw
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	//redraw map image
	drawImage("map.png",0, 0);

	//randomizer wihc city
	var randomInt = Math.floor(Math.random()*cities.length);
	var randomCityX = cities[randomInt].xPosition;
	var randomCityY = cities[randomInt].yPosition;

	drawImage("marker.png", randomCityX, randomCityY);
}//random city end

