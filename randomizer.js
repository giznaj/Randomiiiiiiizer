// External JS file for randomizer.html

// Global vars
var population=70; //pool of numbers to select from
var computerDraw=20; //count of numbers the computer draws
var humanDraw=10; //count of numbers the player draws
var numberOfDraws=0; //number of times to perform the draw
var numberOfMatches; //mumber of matches between the player's draw and the computer's draw
var sumOfMatches=0; //sum of the 'number of matches' (i.e. 3 draws.  1st draw 5 are the same, 2nd draw 2 are the same and 3rd draw 0 are the same.  sumOfMatches = 7)

var drawMin=0; //minium value in the histogram
var drawMax=0; //maximum value in the histogram
var drawMean=0; //mean value in the histogram
var drawMedian=0; //median value in the histogram
var drawMode=0; //mode value in the histogram
var highestNumber=0; //stores the highest number of the matchArray object

var computerNumbers=new Array(); //stores the random numbers for the computer
var humanNumbers=new Array(); //stores the random numbers for the player
var mmmmmArray=new Array(); //stores the values for the 5 m's
var medianArray=new Array(); //stores the number of matches per draw as a record
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
	numberOfDraws=document.getElementById('numberOfDraws_id').value;

	//form validation
	if(numberOfDraws > 1000 || numberOfDraws < 1)
	{
		alert("please keep the number between 1 and 1000 for now.")
		numberOfDraws=0;
		document.getElementById('numberOfDraws_id').value=0;
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
	for(x=0; x<numberOfDraws; x++)
	{
		randomizeComputerAndHuman();
	}

	document.getElementById('btn_draw_id').disabled=false;
	document.getElementById('btn_render_id').disabled=false;
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
	indexToUpdate=numberOfMatches; //set the index to update (how many numbers the player and the computer had the same)
	matchArray[indexToUpdate] += 1; //update the index (number of matches) by 1

	sumOfMatches=indexToUpdate+sumOfMatches; //update the sumOfMatches for Mean

	medianArray.push(indexToUpdate); //update the medianArray with the newest entry (number of matches from the draw)

}

//calculates the MMMMM
function calculateMMMMM()
{
	var x=0;
	var y=1;
	var z;
	var medianOne;
	var medianTwo;
	var drawMedianEven;
	var drawMedianOdd;
	//humanNumbers.sort(function(a, b){return a - b});
	//computerNumbers.sort(function(a, b){return a - b});
	//matchArray.sort(function(a, b){return a - b});
	//alert("matchArray length is: " + matchArray.length);

	//min
	while(matchArray[x]==0)
	{
		x++;
	}
	drawMin=x;

	//max
	while(matchArray[matchArray.length-y]==0)
	{
		y++;
	}
	drawMax=11-(y);

	//mean
	drawMean=(sumOfMatches/numberOfDraws);

	//median
	medianArray.sort(function(a, b){return a - b});
	if(medianArray.length % 2==0)
	{
		medianOne=(medianArray.length/2);
		medianTwo=medianOne+1;
		drawMedianEven=medianArray[medianOne]+medianArray[medianTwo];
		drawMedian=drawMedianEven/2;
	}
	else
	{
		drawMedianOdd=((medianArray.length-1)/2)+1;
		drawMedian=medianArray[drawMedianOdd];
	}

	//mode
	for(z=0; z<matchArray.length; z++)
	{
		if(highestNumber<matchArray[z])
		{
			highestNumber=matchArray[z];
			drawMode=matchArray.indexOf(matchArray[z]);
		}
		else
		{
			//keep the current value
		}
	}

	//call the alert method
	alertMMMMM();	
}

//alerts both the computer and player arrays
function alertMMMMM()
{
	alert("Min, Max, Mean, Median and Mode!\n" 
	+ "Min: " + drawMin + "\n"
	+ "Max: " + drawMax + "\n"
	+ "Mean: " + drawMean + "\n"
	+ "Median: " + drawMedian + "\n"
	+ "Mode: " + drawMode);
}

//alerts both the computer and player arrays
function alertPcHuman()
{
	alert("Single draw of random numbers! \n" 
	+ "Computer Numbers: " + computerNumbers.toString() + "\n"
	+ "Player Numbers: " + humanNumbers.toString() + "\n"
	+ "Number of matches: " + numberOfMatches);
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

//deletes all the data in memory
function deleteData()
{
	numberOfDraws=0; //number of times to perform the draw
	numberOfMatches=0; //mumber of matches between the player's draw and the computer's draw
	sumOfMatches=0; //sum of the 'number of matches' (i.e. 3 draws.  1st draw 5 are the same, 2nd draw 2 are the same and 3rd draw 0 are the same.  sumOfMatches = 7)

	drawMin=0; //minium value in the histogram
	drawMax=0; //maximum value in the histogram
	drawMean=0; //mean value in the histogram
	drawMedian=0; //median value in the histogram
	drawMode=0; //mode value in the histogram

	computerNumbers=new Array(); //stores the random numbers for the computer
	humanNumbers=new Array(); //stores the random numbers for the player
	mmmmmArray=new Array(); //stores the values for the 5 m's
	medianArray=new Array(); //stores the number of matches per draw as a record
	matchArray=[0,0,0,0,0,0,0,0,0,0,0]; //stores the values for the match array (number/frequency)

	document.getElementById('numberOfDraws_id').value=0; //set the value on the form to 0

	document.getElementById('btn_render_id').click();
}