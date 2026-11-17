# Randomiiiiiiizer

## Developed for educational use (MA570)
This project helps visualize randomness and probability by displaying data in bar charts.

## Special thanks
* ZingChart - for the charting library
* [ZingChart](https://www.zingchart.com/)
* Chance - for generating the random data set used by this app
* [Chance](https://chancejs.com/)

### Installation instructions
1. Copy the project files to a local folder.
2. Download the JavaScript libraries referenced above, or point the HTML script tags at external versions if you prefer.
3. Open `index.html` in a browser.
4. Have fun!

### How to use
This tool is based on the game Keno. The app is set up so that the player picks 10 unique numbers and the computer (the OLG draw) picks 20 unique numbers. The goal is to see how many numbers match in each draw. A "draw" is one random generation of numbers for both the player and the computer.

Note: When the page initially loads, it contains sample data in the graph. This is just there to provide a visible chart before you start generating new results.

The "Single draw of random numbers" section shows how the game works. Click "Draw Player & PC" to generate the numbers and immediately update the graph. Optionally, click "Alert Player and PC" at any time after the numbers are generated to view both sets of numbers.

After a single play, the histogram updates to show the number of matches between the player and the computer. You can repeat this to see the pattern evolve. This is mainly useful for understanding the mechanics behind the game.

The "Multiple draws of random numbers" section shows the data after playing the game many times. The graph updates automatically after the draws finish. You can also click "Reload Graph" to refresh it manually.

When you hover over a bar with your mouse, the count for that bar appears. For example, if the bar in the "5" column shows 24, it means you and the computer matched 5 numbers 24 times. If the "0" bar shows 10, it means there were 10 draws with no matches.

### Single draw
* Draw Player & PC - generates both sets of numbers in one action
* Alert Player and PC - shows both sets of numbers and the number of matches

### Multiple draws
* "# of Draws" - the number of games to simulate
* Draw Numbers - generates random sets for the specified number of draws

### Display
* Reload Graph - manually refreshes the chart with the latest data

### Odds
These are the official odds for the OLG Keno game:
[Odds](https://lottery.olg.ca/en-ca/daily-games/daily-keno/daily-keno-odds-and-payouts#dailykeno-odds/)

### Notes
* Randomiiiiiiizer uses a computer to generate the random set(s) of numbers. In real life, a machine draws numbered balls and 20 are selected. Those two methods produce different results.
* Randomiiiiiiizer will continue to receive updates and bug fixes. Please check back for the latest version.

### Food for thought
When this game was first introduced, the option to select 0 matches did not exist. Now it does. People often say they lose at the lottery or come close to winning. With that in mind, and now that 0 matches is an option, what would you do? How many people do you think choose this outcome? How often would you expect to win?

Try the game and see how often it happens.