//global variables
var board1 = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
             [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]];
var $currentship;
var $lastshipMoved;
var $selectedship;
var $spaces = $("table#board1 td");
var $ships = $('.piece');

//make the DOM ready
$(document).ready(function(){
    generateGrid(board1);
});

//generate the grid
function generateGrid(board1){
var $table = document.querySelector('#board1');
  $table.innerHTML = '';
  board1.forEach(function(row){
  var $tr = document.createElement('tr');
  row.forEach(function(cell){
  var $td = createTableCell(cell);
  $tr.appendChild($td);
  });
  $table.appendChild($tr);
  });
}
function createTableCell(){
  var $td = document.createElement('td');
  return $td;
}

//drag the ships to the board
$ships.draggable({
    snap: 'td',
    containment: "table",
    start: function(event, ui){
    $currentship = $(this);
    }
});

//selects the ships according to their id
  function ships($piece){
    return $piece.attr('id');
 }

//create rotate button
var $button = document.createElement('button');
$button.innerHTML = 'Rotate';
document.body.appendChild($button);

//rotate the ships 
  var angle = 0;
  $('button').on('click', function() {
   angle += 90;
   var $target = $currentship;
   console.log($target);
    $target.css('transform', 'rotate(' + angle +  'deg)');
 });
