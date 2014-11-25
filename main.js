var currentShip;

$('#aircraft').draggable({
    containment: "#board1",
    grid: [10,10],
    snap: true,
    stop: function() {
        var offset = $(this).offset();
        console.log("Top: " + offset.top + " Left: " + offset.left);
        currentShip = $(this);
		}
});

$('#battleship').draggable({
    containment: "#board1",
    grid: [10,10],
    snap: true,
    stop: function() {
        var offset = $(this).offset();
        console.log("Top: " + offset.top + " Left: " + offset.left);
        currentShip = $(this);
		}
});

$('#cruiser').draggable({
    containment: "#board1",
    grid: [10,10],
    snap: true,
    stop: function() {
        var offset = $(this).offset();
        console.log("Top: " + offset.top + " Left: " + offset.left);
        currentShip = $(this);
    }
});

$('#patrolboat').draggable({
    containment: "#board1",
    grid: [10,10],
    snap: true,
    stop: function() {
        var offset = $(this).offset();
        console.log("Top: " + offset.top + " Left: " + offset.left);
        currentShip = $(this);
    }
});

$('#submarine').draggable({
    containment: "#board1",
    grid: [10,10],
    snap: true,
    stop: function() {
        var offset = $(this).offset();
        console.log("Top: " + offset.top + " Left: " + offset.left);
        currentShip = $(this);
    }
});

var angle = 0;
$('#button').on('click', function() {
 	angle += 90;
  var $target = currentShip;
    $target.css('transform', 'rotate(' + angle +  'deg)'); 
});

$('#aircraft').click(function(){
  currentShip = $(this);
});
$('#battleship').click(function(){
  currentShip = $(this);
});
$('#cruiser').click(function(){
  currentShip = $(this);
});
$('#patrolboat').click(function(){
  currentShip = $(this);
});
$('#submarine').click(function(){
  currentShip = $(this);
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


