var ball = document.querySelector(".discoball");
var ballColors = ["here", "goes", "our", "awesome", "disco", "ball"]
var i = 0;

function goDisco() {
	//do your disco magic here !
	democlass = (ballColors[i]);
	i++
	if (i>=5) {
		i = 0;
	}
	
	ball.setAttribute("class", "discoball" + " " + democlass);
}

setInterval(goDisco,200);