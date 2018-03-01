var svg = document.getElementById("s");
var stop = document.getElementById("stop");
var grow = document.getElementById("grow");
var bounce = document.getElementById("bounce");
var clear = document.getElementById("clear");
var timerID = 0;



var clearing = function(){
    svg.innerHTML = "";
}


var growing = function(){
    svg.innerHTML = "";
    var r = 0;
    var grow = true;
    var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", "250");    
    circle.setAttribute("cy", "250");
    circle.setAttribute("r", r.toString());
    svg.appendChild(circle);
    
    var animate = function(){
	circle.setAttribute("r", r.toString());
	circle.setAttribute("fill" , "black");
	if (grow){
	    r++
	    if ( r >= 250){
		grow = false;
	    }
	}
	else {
	    r--;
	    if (r <= 0){
		grow = true;
	    }
	}
    }
    timerID = setInterval(animate , 10);
}


var bouncing = function(){
    svg.innerHTML = "";
    var x = 250;
    var y = 250;
    var xIncrement = 2;
    var yIncrement = 1;

    var rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");

    rect.setAttribute("x", x.toString());    
    rect.setAttribute("y", y.toString());
    rect.setAttribute("width", 50);
    rect.setAttribute("height", 20);
    rect.setAttribute("fill" , "black");
    svg.appendChild(rect);

    var animate = function(){
	rect.setAttribute("x", x.toString());    
	rect.setAttribute("y", y.toString());

	if( x == 450 || x == 0){
	    xIncrement*=-1;
	}
	if ( y == 480 || y == 0 ){
	    yIncrement*=-1;
	}
	x+= xIncrement;
	y+= yIncrement;

     };
    timerID = setInterval(animate , 10);
}

var stopping = function(){
    clearInterval(timerID);
}

stop.addEventListener("click", stopping);
grow.addEventListener("click", growing);
bounce.addEventListener("click" , bouncing);
clear.addEventListener("click", clearing);
