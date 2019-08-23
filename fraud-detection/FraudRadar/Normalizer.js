const EmailNormalizer = require('./Normalizers/EmailNormalizer')
const StreetNormalizer = require('./Normalizers/StreetNormalizer')
const StateNormalizer = require('./Normalizers/StateNormalizer')
const NORMALIZERS = [
  new EmailNormalizer(),
  new StreetNormalizer(),
  new StateNormalizer()
]

/**
 * Normalizes Order's email, street and state
 */
class Normalizer {
  /**
   *
   * @param orders - array of Order objects that will be normalised
   */
  normalize (orders) {
    orders.map(order => {
      NORMALIZERS.map(normalizer => normalizer.normalize(order))
    })
  }
}

module.exports = Normalizer
