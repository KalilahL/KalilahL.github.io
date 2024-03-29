/* global $, sessionStorage */


$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()

function runProgram() {
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    "LEFT": 37,
    "UP": 38,
    "DOWN": 40,
    "RIGHT": 39,
  }

  var positionX = 0
  var positionY = 0
  var speedX = 0;
  var speedY = 0;
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
   redrawGameItem()
   repositionGameItem()
  }

  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    console.log(handleKeyDown)

    if (event.which === KEY.LEFT) {
      console.log("left pressed")
      speedX = -5
    }
    else if (event.which === KEY.UP) {
      console.log("up pressed")
      speedY = -5
    }
    else if (event.which === KEY.RIGHT) {
      console.log("right pressed")
      speedX = 5
    }
    else if (event.which === KEY.DOWN) {
      console.log("down pressed")
      speedY = 5
    }
  }
    ////////////////////////////////
    ///////////////////////////////
  function handleKeyUp(event) {
      if (event.which === KEY.LEFT) {
        console.log("left unpressed")
        speedX = 0
      }
      else if (event.which === KEY.UP) {
        console.log("up unpressed")
        speedY = 0
      }
      else if (event.which === KEY.RIGHT) {
        console.log("right unpressed")
        speedX = 0
      }
      else if (event.which === KEY.DOWN){
        console.log("down unpressed")
        speedY = 0
    }
    }

////////////////////////////////////////////////////////////////////////////////
////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


function endGame() {
  // stop the interval timer
  clearInterval(interval);

  // turn off event handlers
  $(document).off();
}

function repositionGameItem() {
  positionX += speedX
  positionY += speedY
}

function redrawGameItem() {
 $("#walker").css("left", positionX)
 $("#walker").css("top", positionY)
}
}