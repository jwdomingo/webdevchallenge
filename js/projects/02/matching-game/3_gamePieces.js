(function() {
  // Let's return to our gameBoard now. Step back up to just before we started the reduce mini-sprint to remind yourself what we were doing. 

  // First, note that in this file we still have access to our gameBoard object. This is because in boardBasics.js we put it on the window object. You can test this by trying to print the gameBoard variable to the console:
  // console.log('gameBoard object in gamePieces.js is:', gameBoard);

  // Remember that we'd just used each and filter to find all the gamePieces on the board: "results after filter: [Array[0], Array[0], Array[0], Array[3], Array[0], Array[2], Array[0], Array[0]]" for a gameBoard that has three gamePieces on row 3 and two game pieces on row 5.
  // Having that information scattered throughout a bunch of different arrays seems messy. You can probably think of plenty of cases where we'd want to have all that information collected into a single array. 
    // Wait, that's starting to sound like reduce! We're taking a collection of a bunch of things, and reducing it down to a single thing. 
      // Can you think of a way we could reduce an array filled with arrays to a single array just filled with all the values contained in each subarray? 
      // Hint: what if we tried passing in an empty array as the starting value?

  // This ends our intro to the capstone project. By this point you should be pretty familiar with the gameBoard, the makePiece function, and all four of the main functional programming tools (each, map, filter, and reduce). From here on out, we're intentionally going to give you less guidance. One of the key skills to be a successful engineer is autonomy in accomplishing tasks that are given to you. We want you to get used to that feeling with these upcoming exercises. 


  // 1. Create an array called piecesToAdd that holds the names of each of the pieces we'll create for each player. For example: ['kuddlyKoala', 'babyDino','babyDino', 'babyDino', 'fierceDragon', 'lazyPanda', 'lazyPanda']

  // 2. Create an array of the playerNames. For example: ['hermoineGranger', 'graceHopper']

  // 3. Now use two (nested) each loops to add these pieces to the board. Remember that we have the makePiece function! 
    // Question1: How can you make sure each piece ends up on a different square on the board? 
    // Question2: What happens when you get to the end of a line? How do you know to start on the first position of the next line? Think if you can use the modulus "%" operator for this. If you're not familiar with the modulus operator, it gives you the remainder from dividing two numbers. So if we divide 12 by 8, that gives us a remainder of 4 (we have 4 left over after taking 8 out of 12). As always, feel free to google around for more information!
    // Question3: How can we line these pieces up on opposite sides of the board?
    // BEST PRACTICE: Pseudocode the specific steps you'll need to accomplish. This takes a seemingly large and complex task and breaks it down into solvable chunks. 

  // 4. Great! Now we have two fierce opposing armies (or two groups of friends just trying to gather together on the same square for a group hug?!) arranged on the board. It's time to make them look intimidating or pretty for their impending battle or hugfest. 
    // Let's use a couple of our functional programming skills here. We'll chain them together, slowly building up to do some fairly complex operations. 
      // A. Use filter to iterate through a single row, returning an arr of the squareObj in that row that have a gamePiece on them. 
      // B. Use map to change each of the objects in the array returned from filter to an array of their positions. Positions are a property saved as a property on each object. Console.log each object to check it out!
      // C. Use each or map to repeat this process on each row in your gameBoard. At this point, you should have an array of subarrays. Each of those subarrays will contain the positions of the squares in a given row that have a gamePiece on them.
      // D. Now, let's use reduce to reduce this down to a single array that contains the position of all the squares we're interested in. 
      // E. Whew! You've now used all four of the canonical functional programming functions! Great job getting here. Now we have a single array that holds the position of all the gamePieces. Let's use each to go through that array and do something for each item in that array. Except we're going to use it in a slightly creative way (yay for creativity in programming! And here my momma thought I'd never be an artist.). We're just going to use each item in the positionsArray as information to go find the gamePiece at that position. Then, once we have those gamePieces, let's add an imageURL to each gamePiece so we can see the gamePieces on the board. 
        // imageURL is just a property on each object. All you need to do is add a link to an image. If you haven't done this before, you can right click on any image online, and get a link to that image. Set the imageURL property equal to that string, and voila! Your image will appear on the screen. 

  // 5. Use filter to grab all gamePieces of the same type, and then use each to iterate through them and set their movement descriptions. Don't worry about building out the logic of how you'd make them move- for now just have fun coming up with moves you'd want your various pieces to do. For example, maybe scaredKitty goes and hides in the corner, and impetuousDragon frequently flies off and leaves the board entirely. 

  // 6. Use reduce to create an object that has a tally of all our gamePieces. For example, the result might be: 
  // { babyDino: 3,
  //   impetutousDragon: 2,
  //   scaredKitty: 4,
  //   hobblingPirate:8,
  //   groupHuggers:12 }
    // You should be able to do this from scratch by just using reduce inside of another reduce if you're feeling ambitious!

  // CARRY ON...
  // You're doing great!!! Go ahead and check out the file called '4_gamePlay.js' in the yourOwnGame folder for more fun!
})();
