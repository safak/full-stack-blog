
var assert = require('assert')

var compare = require('..')

it('should support buffers', function () {
  var distance = compare(new Buffer('0000', 'hex'), new Buffer('000F', 'hex'));
  assert.equal(distance, 4);
})

it('should support hex strings', function () {
  var distance = compare('0000', '000F');
  assert.equal(distance, 4);
})
