# Randomiiiiiiizer

## Generated for educational use (MA570).
This is a tool to help visualize randomess and probability by displaying data in bar charts.

## Special thanks
* ZingChart - for providing the lovely bar charts library
* [ZingChart](https://www.zingchart.com/)
* Chance - for generating the random data set for the bar charts
* [Chance](https://chancejs.com/)

### Installation Instructions
1. copy files to a local folder
2. download the JS libraries from the references above
  1. if you don't want to download the JS libraries, just modify the JS 'script' references in the HTML to point to them externally
3. open the index.html file in the browser of your choice
4. HAVE FUN!!!
 
### How to use
This tool is based off the game Keno.  I have preselected the game where you (as the player) pick 10 unique numbers and the computer (i.e. the OLG) picks 20 unique numbers.  We want to see how many you get the same per draw.  A 'draw' is one random generation of numbers for both the player and the computer.  

The 'Single Draw' section will show you how the game works.  Simply draw the numbers by clicking the 'Draw Player & PC" button and the 'Reload Graph' button in that order.  Optionally, you can click the "Alert Player and PC" button to see the 2 sets of random numbers at anytime after they generated.

After a single play of the game, when you reload the graph, a single column in the histogram should have a bar in it.  This represents how many matches there were between the player and the computer.  You can do this over and over to see the pattern.

The 'Multiple Draws' section will show you the data after playing the game a large number of times.

When the page intially loads it has some data in the graph.  That is there just to give a nice little graphic to the user before starting.

You can hover over each bar which will give you the count of how many times that happened.


### Single Draw
* Randomize Both - generates both (computer and player) of your numbers in one call
* Alert PC & Human - alert that shows the 2 sets of numbers


### Multiple Draws
* '# of Draws' - the number of times to play the game between the player and the computer
* Draw - draws random sets of numbers for '# of Draws' times for both the player and computer 


### Display
* Reload - reloads the graph with the new data


### Odds
These are the official odds of playing the official game through the OLG
[Odds](https://lottery.olg.ca/en-ca/daily-games/daily-keno/daily-keno-odds-and-payouts#dailykeno-odds/)


### Notes
* Randomiiiiiiizer uses a computer to generate the random set(s) of numbers.  In real life a bunch of balls are tossed around a machine and until 20 are sucked through a hole and observed.  These 2 distinct methods will have different results.
* Randomiiiiiiizer will continue to have updates and bug fixes.  Please check back for the latest version.


### Food for thought
When this game originally came out the option to select 0 as the number of matches didn't exist.  Now the option does exist.  People always say they they lose at the lotteries, or they come close to winning - both are not good.  With that in mind and now having the option to pick 0 matches, what would you do?  How many people do you think pick this?  How often would you expect to win?

Try the game and see how often it happens.