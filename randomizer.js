// External JS file for randomizer.html

// Global vars
var done="x";
var population=70;
var computerDraw=20;
var humanDraw=10;
var numberOfSpins=0;
var numberOfMatches;

var drawMin=0;
var drawMax=0;
var drawMean=0;
var drawMedian=0;
var drawMode=0;

var computerNumbers=new Array(); //stores the random numbers for the computer
var humanNumbers=new Array(); //stores the random numbers for the player
var mmmmmArray=new Array(); //stores the values for the 5 m's
var matchArray=[0,0,0,0,0,0,0,0,0,0,0]; //stores the values for the match array (number/frequency)

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

//generates random data for both computer and player (using the chance library)
function randomizeComputerAndHuman()
{
	computerNumbers = chance.unique(chance.natural, 20, {min: 0, max: 70});
	humanNumbers = chance.unique(chance.natural, 10, {min: 0, max: 70});

	//call the findMatches() method
	findMatches();
}

//generates random data for both computer and player for N # of loops (takes a parameter)
function multipleDraws()
{
	//local variables
	var x;
	numberOfSpins=document.getElementById('numberOfSpins_id').value;

	//form validation
	if(numberOfSpins > 1000 || numberOfSpins < 1)
	{
		alert("please keep the number between 1 and 1000 for now.")
		numberOfSpins=0;
		document.getElementById('numberOfSpins_id').value=0;
	}
	else
	{
		//do nothing for now
	}

	//disable buttons on the screen until the draws have finished
	//document.getElementById('btn_draw').disabled=true;
	document.getElementById('btn_draw_id').disabled=true;
	document.getElementById('btn_render_id').disabled=true;

	//draw the random sets of numbers for the number of times specified
	for(x=0; x<numberOfSpins; x++)
	{
		randomizeComputerAndHuman();
	}

	document.getElementById('btn_draw_id').disabled=false;
	document.getElementById('btn_render_id').disabled=false;

	//call the MMMMM method(s)

}

//finds the number of matches between the computer's numbers and the player's numbers
function findMatches()
{
	var x;
	var y;
	numberOfMatches=0;
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
	//used for testing purposes
	//alert("number of matches: " + numberOfMatches);
}

//calculates the MMMMM
function calculateMMMMM()
{
	var x;
	//humanNumbers.sort(function(a, b){return a - b});
	//computerNumbers.sort(function(a, b){return a - b});
	//matchArray.sort(function(a, b){return a - b});
	alert(matchArray);
	//min
	while(matchArray[x]==0)
	{
		x++;
	}
	drawMin=matchArray[x];
	alertMMMMM();	
}

//alerts both the computer and player arrays
function alertPcHuman()
{
	alert("Single draw of random numbers! \n" 
	+ "Computer Numbers: " + computerNumbers.toString() + "\n"
	+ "Player Numbers: " + humanNumbers.toString() + "\n"
	+ "Number of matches: " + numberOfMatches);
}

//alerts both the computer and player arrays
function alertMMMMM()
{
	alert("Min, Max, Mean, Median and Mode!\n" 
	+ "Min: " + drawMin + "\n"
	+ "Sorted: " + humanNumbers);
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