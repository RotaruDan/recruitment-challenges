/**
 * Base class that implements the basic functionality of the check method.
 */
class BaseChecker {
  /**
  * Checks if the 'dealId' property is the same but the 'creditCard' differs
  * @param oneOrder an order object
  * @param anotherOrder another Order object for the comparison
  * @returns {boolean} true if the cbove condition is satisfied
  */
  check (oneOrder, anotherOrder) {
    return oneOrder.dealId === anotherOrder.dealId &&
            oneOrder.creditCard !== anotherOrder.creditCard
  }
}

module.exports = BaseChecker
