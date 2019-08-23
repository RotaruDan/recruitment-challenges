const Order = require('./order')

/**
 * Receives a FileHandler and parses the lines of the file t obtain Orders
 */
class Parser {
  /**
   * Builds a Parser that is capable of extracting the comma separated values from a FileHandler
   * @param fileHandler - pointing to the CSV file with the Orders
   */
  constructor (fileHandler) {
    this.fileHandler = fileHandler
  }

  /**
   * Parses each line from the file by separating the values by comma (CSV).
   * @returns {Array} of Orders, one per line
   */
  getOrders () {
    let lines = this.fileHandler.getLines()
    const orders = []
    lines.map(line => {
      let items = line.split(',')
      orders.push(new Order(items))
    })
    return orders
  }
}

module.exports = Parser
