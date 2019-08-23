const Parser = require('./Parser')
const Normalizer = require('./Normalizer')
const Checker = require('./Checker')

function Check (fileHandler) {
  let parser = new Parser(fileHandler)
  let normalizer = new Normalizer()
  let checker = new Checker()

  let orders = parser.getOrders()
  normalizer.normalize(orders)
  let frauds = checker.check(orders)

  return frauds
}

module.exports = { Check }
