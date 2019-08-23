const PositiveInteger = require('./PositiveInteger')

function Count (input) {
  let positiveInteger = new PositiveInteger(input)
  return positiveInteger.reverseBitsCount()
}

module.exports = {Count}
