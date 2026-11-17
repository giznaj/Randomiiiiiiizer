// External JS file for randomizer.html

// Global vars
var population = 70; // pool of numbers to select from
var computerDraw = 20; // count of numbers the computer draws
var humanDraw = 10; // count of numbers the player draws
var numberOfDraws = 0; // number of times to perform the draw
var numberOfMatches; // number of matches between the player's draw and the computer's draw
var sumOfMatches = 0; // sum of the 'number of matches'

var drawMin = 0; // minimum value in the histogram
var drawMax = 0; // maximum value in the histogram
var drawMean = 0; // mean value in the histogram
var drawMedian = 0; // median value in the histogram
var drawMode = 0; // mode value in the histogram
var highestNumber = 0; // stores the highest number of the matchArray object

var computerNumbers = []; // stores the random numbers for the computer
var humanNumbers = []; // stores the random numbers for the player
var mmmmmArray = []; // stores the values for the 5 m's
var medianArray = []; // stores the number of matches per draw as a record
var matchArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // stores the values for the match array (number/frequency)

// generates random data (for computer)
function randomizeComputer() {
  var x;
  for (x = 0; x < +computerDraw; x++) {
    computerNumbers[x] = (Math.round(Math.random() * 69) + 1);
  }
}

// generates random data for the player
function randomizeHuman() {
  var x;
  for (x = 0; x < +humanDraw; x++) {
    humanNumbers[x] = (Math.round(Math.random() * 69) + 1);
  }
}

// generates random data for both computer and player (using the chance library)
function randomizeComputerAndHuman() {
  computerNumbers = chance.unique(chance.natural, 20, { min: 1, max: 70 });
  humanNumbers = chance.unique(chance.natural, 10, { min: 1, max: 70 });

  // call the findMatches() method
  findMatches();
}

// generates random data for both computer and player for N # of loops
function multipleDraws() {
  var x;
  numberOfDraws = document.getElementById('numberOfDraws_id').value;

  if (numberOfDraws > 1000 || numberOfDraws < 1) {
    alert('Please keep the number between 1 and 1000 for now.');
    numberOfDraws = 0;
    document.getElementById('numberOfDraws_id').value = 0;
    return;
  }

  document.getElementById('btn_draw_id').disabled = true;
  document.getElementById('btn_render_id').disabled = true;

  for (x = 0; x < numberOfDraws; x++) {
    randomizeComputerAndHuman();
  }

  document.getElementById('btn_draw_id').disabled = false;
  document.getElementById('btn_render_id').disabled = false;
  countMatchedNumbers();
}

// finds the number of matches between the computer's numbers and the player's numbers
function findMatches() {
  var x;
  var y;
  numberOfMatches = 0;
  var indexToUpdate = 0;

  for (x = 0; x < humanNumbers.length; x++) {
    for (y = 0; y < computerNumbers.length; y++) {
      if (humanNumbers[x] === computerNumbers[y]) {
        numberOfMatches++;
        break;
      }
    }
  }

  indexToUpdate = numberOfMatches;
  matchArray[indexToUpdate] += 1;

  sumOfMatches = indexToUpdate + sumOfMatches;
  medianArray.push(indexToUpdate);
}

// calculates the MMMMM
function calculateMMMMM() {
  var x = 0;
  var y = 1;
  var z;
  var medianIndex;
  var drawMedianEven;
  var drawMedianOdd;

  while (matchArray[x] === 0) {
    x++;
  }
  drawMin = x;

  while (matchArray[matchArray.length - y] === 0) {
    y++;
  }
  drawMax = 11 - y;

  if (numberOfDraws > 0) {
    drawMean = sumOfMatches / numberOfDraws;
  } else {
    drawMean = 0;
  }

  medianArray.sort(function (a, b) { return a - b; });
  if (medianArray.length % 2 === 0) {
    medianIndex = medianArray.length / 2;
    drawMedianEven = medianArray[medianIndex - 1] + medianArray[medianIndex];
    drawMedian = drawMedianEven / 2;
  } else {
    medianIndex = Math.floor(medianArray.length / 2);
    drawMedianOdd = medianArray[medianIndex];
    drawMedian = drawMedianOdd;
  }

  highestNumber = 0;
  for (z = 0; z < matchArray.length; z++) {
    if (highestNumber < matchArray[z]) {
      highestNumber = matchArray[z];
      drawMode = matchArray.indexOf(matchArray[z]);
    }
  }

  alertMMMMM();
}

// alerts both the computer and player arrays
function alertMMMMM() {
  alert('Min, Max, Mean, Median and Mode!\n'
    + 'Min: ' + drawMin + '\n'
    + 'Max: ' + drawMax + '\n'
    + 'Mean: ' + drawMean + '\n'
    + 'Median: ' + drawMedian + '\n'
    + 'Mode: ' + drawMode);
}

// alerts both the computer and player arrays
function alertPcHuman() {
  var sortedComputerNumbers = computerNumbers.slice().sort(function (a, b) { return a - b; });
  var sortedHumanNumbers = humanNumbers.slice().sort(function (a, b) { return a - b; });

  alert('Single Draw Results\n\n'
    + 'Computer numbers:\n' + sortedComputerNumbers.join(', ') + '\n\n'
    + 'Player numbers:\n' + sortedHumanNumbers.join(', ') + '\n\n'
    + 'Matches: ' + numberOfMatches);
}

// returns the computer's array to the GUI call
function getComputer() {
  return computerNumbers;
}

// returns the player's array to the GUI call
function getHuman() {
  return humanNumbers;
}

// returns the match array to the GUI call
function getMatch() {
  return matchArray;
}

// deletes all the data in memory
function deleteData() {
  numberOfDraws = 0;
  numberOfMatches = 0;
  sumOfMatches = 0;

  drawMin = 0;
  drawMax = 0;
  drawMean = 0;
  drawMedian = 0;
  drawMode = 0;
  highestNumber = 0;

  computerNumbers = [];
  humanNumbers = [];
  mmmmmArray = [];
  medianArray = [];
  matchArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  document.getElementById('numberOfDraws_id').value = 0;
  document.getElementById('btn_render_id').click();
}
