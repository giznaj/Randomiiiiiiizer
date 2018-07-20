// External JS file for randomizer.html

// Global vars
var done="x";
var population=70;
var computerDraw=20;
var humanDraw=10;

var computerNumbers=new Array();
var humanNumbers=new Array();
var matchArray=[0,0,0,0,0,0,0,0,0,0,0];

//generates random data (for computer)
function randomizeComputer()
{
	var x;
	for(x=0; x<+computerDraw; x++)
	{
		computerNumbers[x]=(Math.round(Math.random()*69)+1);
	}
}

//generates random date for the player
function randomizeHuman()
{
	var x;
	for(x=0; x<+humanDraw; x++)
	{
		humanNumbers[x]=(Math.round(Math.random()*69)+1);
	}
}

//generates random date for both computer and player (using the chance library)
function randomizePcHuman()
{
	computerNumbers = chance.unique(chance.natural, 20, {min: 0, max: 70});
	humanNumbers = chance.unique(chance.natural, 10, {min: 0, max: 70});
}

//finds the number of matches between the computer's numbers and the player's numbers
function findMatches()
{
	var x;
	var y;
	var numberOfMatches=0;
	var indexToUpdate=0;

	for(x=0; x<humanNumbers.length; x++)
	{
		for(y=0; y<computerNumbers.length; y++)
		{
			if(humanNumbers[x]==computerNumbers[y])
			{
				numberOfMatches++;
				{ break; }
			}
		}
	}
	indexToUpdate=numberOfMatches;
	matchArray[indexToUpdate] += 1;
	alert("number of matches: " + numberOfMatches);
}

//alerts both the computer and player arrays
function alertPcHuman()
{
	alert("It's time to start randomiiiiiiing! \n" 
	+ "Computer Numbers: " + computerNumbers.toString() + "\n"
	+ "Human Numbers: " + humanNumbers.toString());
}

//returns the computer's array to the GUI call
function getComputer()
{
	return computerNumbers;
}

//returns the player's array to the GUI call
function getHuman()
{
	return humanNumbers;
}

//returns the match array to the GUI call
function getMatch()
{
	return matchArray;
}