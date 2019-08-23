/**
 * Represents an Order with the following properties:
 *
 * - orderId: ID of the order (usually a positive integer represented as a string)
 * - dealId: ID of the deal (usually a positive integer represented as a string)
 * - email: Email of this order (string)
 * - street: The street address (strung)
 * - city: name of the city of this order (string)
 * - state: State name of the order (string)
 * - zipCode: The ZIP Code of the order (string)
 * - creditCard: The Credit/Debit Card of the order (string)
 */
class Order {
  /**
   * Builds an Order from an array with exactly 8 elements in the following order:
   * (1) orderId, (2) dealId, (3) email, (4) street, (5) city, (6) state, (7) zipCode, (8) creditCard
   * @param items - an array with the string representation of the properties
   */
  constructor (items) {
    this.orderId = Number(items[0])
    this.dealId = Number(items[1])
    this.email = items[2].toLowerCase()
    this.street = items[3].toLowerCase()
    this.city = items[4].toLowerCase()
    this.state = items[5].toLowerCase()
    this.zipCode = items[6]
    this.creditCard = items[7]
  }
}

module.exports = Order
