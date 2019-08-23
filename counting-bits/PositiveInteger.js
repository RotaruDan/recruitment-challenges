/**
 * Encapsulates a positive integer from an input.
 */
class PositiveInteger {
  constructor (input) {
    if (!Number.isInteger(input)) {
      throw new TypeError('Only integer values supported')
    }
    if (input < 0) {
      throw new RangeError('Only positive integers supported')
    }

    this.number = input
  }

  /**
   * Returns an array where:
   *
   * 1) The first value is the number of bits of the binary representation of the current number that are equal to 1
   * 2) The rest of the values represent what indexes are the bits that are equal to 1
   * in the binary representation of the integer, iterating from left to right
   *
   * Example given:
   *
   * Number is 10
   * Binary Representation is 1010
   * Result array is [2, 0, 2] where:
   *    array[0] = 2 because exactly two bits in the binary representation are equal to 1
   *    array[1] = 0 because the first bit (index 0) of the binary representation is equal to 1 (reading from left to right)
   *    array[2] = 2 because the third bit (index 2) of the binary representation is equal to 1 (reading from left to right)
   *
   * @returns {[]}
   */
  reverseBitsCount () {
    let res = [0]

    let count = 0
    for (let i = 0; this.number; this.number >>= 1) {
      if (this.number & 1) {
        res.push(i)
        ++count
      }
      ++i
    }

    res[0] = count

    return res
  }
}

module.exports = PositiveInteger
