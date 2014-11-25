$('#aircraft').draggable({
    containment: "#board1",
    grid: [10,10],
    snap: true,
    stop: function() {
        var offset = $(this).offset();
        console.log("Top: " + offset.top + " Left: " + offset.left);
    }
});

$('#battleship').draggable({
    containment: "#board1",
    grid: [10,10],
    snap: true,
    stop: function() {
        var offset = $(this).offset();
        console.log("Top: " + offset.top + " Left: " + offset.left);
    }
});

$('#cruiser').draggable({
    containment: "#board1",
    grid: [10,10],
    snap: true,
    stop: function() {
        var offset = $(this).offset();
        console.log("Top: " + offset.top + " Left: " + offset.left);
    }
});

$('#patrolboat').draggable({
    containment: "#board1",
    grid: [10,10],
    snap: true,
    stop: function() {
        var offset = $(this).offset();
        console.log("Top: " + offset.top + " Left: " + offset.left);
    }
});

$('#submarine').draggable({
    containment: "#board1",
    grid: [10,10],
    snap: true,
    stop: function() {
        var offset = $(this).offset();
        console.log("Top: " + offset.top + " Left: " + offset.left);
    }
});
/*var value = 0;
$('#button').click(function(){
  $('#aircraft').rotate({
    bind: {
      click: function(){ 
      value += 90;
      $(this).rotate({animateTo:value})
    }}
  })
});
*/
//var angle = 0;
/*$(document).ready(function() {
    $("#button").click(function() {
      //angle += 90;
      $('#aircraft').rotate(90);
    });
});
/*var angle = 0;
$('#button').on('click', function() {
	angle += 90;
	angle += 120;
  var $target = $('#aircraft');
	 $target.rotate(angle);
});

//Basic function

/*$(function() {
   var battleboard = $('#boaord1');
    x = 0, y = 0;
   /* var battleboard = 
    {['A1', 'A2', 'A3', 'A4', 'A5 ', 'A6 ', 'A7', 'A8', 'A9', 'A10']',
   ['B1', 'B2', 'B3', 'B4', 'B5 ', 'B6 ', 'B7', 'B8', 'B9', 'B10']',
  "C": '[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']',
  "D": '[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']',
  "E": '[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']',
  "F": '[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']',
  "G": '[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']',
  "H": '[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']',
  "I": '[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']',
  "J": '[' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']',
  };*/


