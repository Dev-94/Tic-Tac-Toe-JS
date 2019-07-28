// Minimum Requirements
// Display an empty tic-tac-toe board when the page is initially displayed.
// A player can click on the nine cells to make a move.
// Every click will alternate between marking an X and O.
// Once occupied with an X or O, the cell cannot be played again.
// Provide a Reset Game button that will clear the contents of the board.


// Getting Started / Hints
// Create an index.html page.
// Create and include in your index.html page, main.css and main.js files.
// Start by writing the HTML and CSS that displays a 3x3 grid and the reset game button.
// Using id and/or class attributes will help you target elements for styling and wiring up your click event listeners.
// Programs, including games, are frequently focused on manipulating data and displaying that data to a user. Decide on the data structures, held in variables, that will maintain the state (data / status) of the game.
// Note that the values you use to represent the state of your game, doesn't necessarily have to match what you want to display. For example, just because you want to display X and Os doesn't mean that you have to use those letters in your data structure. You might choose to use 1 to represent player X and -1 to represent player O for example. Then, in your render function you would have the logic to translate data to what you want to display.
// Wire up your click event listener(s). Using a single listener with event bubbling is recommended but not required.
// Lots of little functions!


//add players
//create board in css, html
//add event click and place them in 9 areas
//alternate players
// boards stays white, put in divs with black lines on certain sides not others


// 1) Define required constants







//NEW MESSAGE
    //look over code
    //find why it stop iterating thru players after the first move
    //find why image is not changing from white after click
    //learn how to change image to tacos and toes
        //https://pbs.twimg.com/profile_images/638445562484781057/pLaAiF5d_400x400.png
        //https://pbs.twimg.com/profile_images/631592765139238913/r3-Yuaba_400x400.jpg

const PLAYERS = {
    '1': 'Toe',
    '-1': 'Taco',
    'null': 'white'
};

const winComb = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
//add more combos once I understand how they are labeled




// 2) Define required variables used to track the state of the game
let board, turn, winner;

// 3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.
var box = document.querySelectorAll('section div');
var msg = document.querySelector('h1');


// 4) Upon loading the app should:
// 	4.1) Initialize the state variables
// 	4.2) Render those values to the page
// 	4.3) Wait for the user to click a square

// event listeners
document.querySelector('section.board div').addEventListener('click', handleMove);
document.querySelector('button').addEventListener('click', initialize);

// 5) Handle a player clicking a square
initialize();

function handleMove(evt) {
    //obtain index of square
    var idx = parseInt(evt.target.id.replace('sq', ''));
    //check if square is available and return if not
    if (board[idx] || winner) return;
    //update state (board, turn, winner)
    board[idx] = turn;
    turn *= -1;
    winner = getWinner();
    render();
}


function getWinner() {
    for (var i=0; i<winComb.length; i++) {
        if (Math.abs(board[winComb[i][0]] + board[winComb[i][1]] + board[winComb[i][2]]) === 3) return board[winComb[i][0]];
    //     if(Math.abs(board[0] + board[1] + board[2]) === 3) return board[0];
    //     if(Math.abs(board[3] + board[4] + board[5]) === 3) return board[3];
    //     if(Math.abs(board[6] + board[7] + board[8]) === 3) return board[6];
    //     if(Math.abs(board[0] + board[3] + board[6]) === 3) return board[0];
    //     if(Math.abs(board[1] + board[4] + board[7]) === 3) return board[1];
    //     if(Math.abs(board[2] + board[5] + board[8]) === 3) return board[2];
    //     if(Math.abs(board[0] + board[4] + board[8]) === 3) return board[0];
    //     if(Math.abs(board[2] + board[4] + board[6]) === 3) return board[2];
    // 
    }
    if(board.includes(null)) return null;
    return 'T';
}

function render() {
    board.forEach(function(sq, idx) {
        box[idx].style.background = PLAYERS[sq];
        //change style.background to image associated with PLAYERS
        //change sq to part of css?????
    });
    if(winner === 'T') {
        msg.innerHTML = 'Rats, another tie!';
    } else if (winner) {
        msg.innerHTML = `Congrats ${PLAYERS[winner].toUpperCase()}!`;
    } else {
        msg.innerHTML = `${PLAYERS[turn].toUpperCase()}'s Turn`;
    }
}

function initialize() {
    board = [null,null,null,null,null,null,null,null,null];
    turn = 1;
    winner = null;
    render();
}

    //below if code from connect four, to allow for clicking of squares
// document.querySelector('section.markers')
//     .addEventListener('click',handleClick);


//may not need below
/*    //FUNCTIONs for each state variable
    board = [
        [0, 0, 0], // column 1 (index 0)
        [0, 0, 0], // column 2 (index 1)
        [0, 0, 0], // column 3 (index 2)
    ];
    turn = 1;
    winner = null;    // 1, -1, null(no winner), 'T'(tie)

                //does board show up, does each space have to be iterated and rendered thru js or css??
*/
//may not need above

//function of scenarios where the user is alerted a winner, game logic
/*
if 
0[0] === -1 || 0[0] === 1
0[1] === -1 || 0[1] === 1
0[2] === -1 || 0[2] === 1

1[0] === -1 || 1[0] === 1
1[1] === -1 || 1[1] === 1
1[2] === -1 || 1[2] === 1

2[0] === -1 || 2[0] === 1
2[1] === -1 || 2[1] === 1
2[2] === -1 || 2[2] === 1

return function (message)

else
next persons turn

message is (taco wins || toe wins)



everytime a box is clicked is changed to either 1 || -1
everytime a box is clicked the turn changes from 1 to -1 || -1 to 1



when js hears a click the box turn to 1 || -1
then limit clicks to boxes and nothing else
*/
// document.addEventListener('click', dsafdasf);
//     //replace 0 in id box
//     //itereates through each box to see if it was clicked
//     for(let i=0; i > board.length; i++) { 
//         for(let j=0; j > board.length; j++) {
//         document.getElementById([i][j])
//     }
// //find id of specific box that was clicked and change its color
//                 //div.onClick().getElementByID(value === 1) 
//                     //if 1 turn taco
//                     // else turn toe
//     document.querySelector('section.div.board').addEventListener('click', color());
//     function color() {
//  //       if statement;
//     };
 
//     document.getElementById("c0r0").addEventListener("click", function() {
//             document.getElementById("box").style.color = "Blue";
//         }
//     );






/*
when a box is clicked it can not changed   
    put unclickable div there?
*/









// 6) Handle a player clicking the replay button
