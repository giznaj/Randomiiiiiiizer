// External JS file for randomizer.html

// Global vars
var done="x";
var population=100;
var computerDraw=20;
var humanDraw=7;

var computerNumbers=new Array();
var humanNumbers=new Array();


// This function will generate some random data
function randomizeComputer()
{
	var x;
	for(x=0; x<+computerDraw; x++)
	{
		computerNumbers[x]=(Math.round(Math.random()*99)+1);
	}
}

function randomizeHuman()
{
	var x;
	var num5=(Math.round(Math.random()*5)+1);
	computerNumbers[0]=(Math.round(Math.random()*99)+1);

	for(x=0; x<+humanDraw; x++)
	{
		humanNumbers[x]=(Math.round(Math.random()*99)+1);
	}
}

function showMe()
{
	alert("It's time to start randomizing! \n" 
	+ "Computer Numbers: " + computerNumbers.toString() + "\n"
	+ "Human Numbers: " + humanNumbers.toString());
}