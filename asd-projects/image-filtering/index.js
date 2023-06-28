// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
  applyFilterNoBackground(reddify)
  applyFilter(keepInBounds)
  applyFilterNoBackground(decreaseBlue)
  applyFilterNoBackground(increaseGreenByBlue)
  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction) {
  for (var i = 0; i < image.length; i++) {
    for (var j = 0; j < image[i].length; j++) {
      rgbString = image[i][j]

      var rgbNumbers = rgbStringToArray(rgbString)
      filterFunction(rgbNumbers)
      rgbString = rgbArrayToString(rgbNumbers)
      image[i][j] = rgbString


    }
  }
}

// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction) {
  var background = image[0][0]
  for (var i = 0; i < image.length; i++) {
    for (var j = 0; j < image[i].length; j++) {
      rgbString = image[i][j]
      if (rgbString !== background) {
        var rgbNumbers = rgbStringToArray(rgbString)
        filterFunction(rgbNumbers)
        rgbString = rgbArrayToString(rgbNumbers)

        image[i][j] = rgbString
      }
    }
  }
}

// TODO 5: Create the keepInBounds function
function keepInBounds(num) {
  var x = 0
  var y = 255

  return num < 0 ? 0 : Math.min(num, y)
}

// TODO 3: Create reddify function
function reddify(reddy) {
  reddy[RED] = 200;
}

// TODO 6: Create more filter functions
function decreaseBlue(arr) {
  arr[BLUE] = keepInBounds(arr[BLUE] - 50)
}
function increaseGreenByBlue(arr2) {
  arr2[GREEN] = keepInBounds(arr2[GREEN] + arr2[BLUE])
}
// CHALLENGE code goes below here
