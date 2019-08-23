const BaseChecker = require('./BaseChecker')

/**
 * Extends the BaseChecker's functionality by adding 'email' property equality comparison
 */
class EmailChecker extends BaseChecker {
  check (oneOrder, anotherOrder) {
    return super.check(oneOrder, anotherOrder) &&
            oneOrder.email === anotherOrder.email
  }
}

module.exports = EmailChecker
