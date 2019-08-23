const BaseChecker = require('./BaseChecker')

/**
 * Extends the BaseChecker's functionality by adding address equality comparison
 * checking the 'state', 'zipCode', 'street' and 'city'
 */
class AddressChecker extends BaseChecker {
  check (oneOrder, anotherOrder) {
    return super.check(oneOrder, anotherOrder) &&
            oneOrder.state === anotherOrder.state &&
            oneOrder.zipCode === anotherOrder.zipCode &&
            oneOrder.street === anotherOrder.street &&
            oneOrder.city === anotherOrder.city
  }
}

module.exports = AddressChecker
