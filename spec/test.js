/* global describe, it */
;(function() {
  'use strict';

beforeEach(function(){
  $('#displayoutput').val('');
});

function type(){
  var args = Array.prototype.slice.call(arguments);
  args.forEach(function(arg){
    press(arg);
  });
}

describe('Entering numbers', function(){

  describe('displayoutput', function(){
    it('should return the value of the display', function(){
      $('#displayoutput').val(1.23);
      assert.equal(displayOutput(), 1.23);

      $('#displayoutput').val(2.34);
      assert.equal(displayOutput(), 2.34);
    });
  });

  describe('10x10 Battleship board', function(){
    it('should display 100 squares', function(){
      assert.equal(displayOutput(), '[]');
    });
  });

  describe('Entering the decimal number 7 . 8 9', function(){
    it('should display 7.89', function(){
      type(7);
      type('.');
      type(8);
      type(9);
      assert.equal(displayOutput(), 7.89);
    });
  });
});

describe('17 squares are occupied', function(){
  describe('should display 17 squares are occupied', function(){
    it('should be 6', function(){
    type(2, '*', 3, '=')
    assert.equal(displayOutput(), '6');
  });
});
}):
})();
