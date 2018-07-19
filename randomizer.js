// External JS file for randomizer.html

// Global vars
var done="x";
var population=70;
var computerDraw=5;
var humanDraw=2;

var computerNumbers=new Array();
var humanNumbers=new Array();


// This function will generate some random data
function randomizeComputer()
{
	var x;
	for(x=0; x<+computerDraw; x++)
	{
		computerNumbers[x]=(Math.round(Math.random()*69)+1);
	}
}

function randomizeHuman()
{
	var x;
	for(x=0; x<+humanDraw; x++)
	{
		humanNumbers[x]=(Math.round(Math.random()*69)+1);
	}
}

function alertPcHuman()
{
	alert("It's time to start randomizing! \n" 
	+ "Computer Numbers: " + computerNumbers.toString() + "\n"
	+ "Human Numbers: " + humanNumbers.toString());
}

function getComputer()
{
	return computerNumbers;
}

function getHuman()
{
	return humanNumbers;
}