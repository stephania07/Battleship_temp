/* global describe, it */
;(function() {
  'use strict';

beforeEach(function(){
  $('#displayoutput').val('');
});

describe('valid positions', function(){
  describe('should count 385 squares', function(){
    it('should display 385', function(){
     type(1, 0, '(', 1, 0,'+', 1, ')', '*','(', 2, '*', 1, 0, '+', 1, ')')
    assert.equal(displayOutput(), '385');
  });
});

describe('occupied squares', function(){
    it('should display 17 squares are occupied', function(){
    click(piece)
    assert.equal(displayOutput(), '17');
   });
  });
 });
})();
