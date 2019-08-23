const EmailChecker = require('./Checkers/EmailChecker')
const AddressChecker = require('./Checkers/AddressChecker')
const CHECKERS = [
  new EmailChecker(),
  new AddressChecker()
]

class Checker {
  /**
     * Receives an array of normalized Order objects and will check if there are any frauds.
     * Frauds are obtained by testing different Credit Cards for the same Order
     * (same properties, with different credit cards)
     * @param orders Array of normalized Order objects
     * @returns {Array} of frauds with the following format:
     * {
     *    isFraudulent: true,
     *    orderId: <string>
     * }
     */
  check (orders) {
    const fraudResults = []

    for (let i = 0; i < orders.length; i++) {
      let current = orders[i]

      for (let j = i + 1; j < orders.length; j++) {
        if (CHECKERS.some(checker => { return checker.check(current, orders[j]) })) {
          fraudResults.push({
            isFraudulent: true,
            orderId: orders[j].orderId
          })
        }
      }
    }
    return fraudResults
  }
}

module.exports = Checker
