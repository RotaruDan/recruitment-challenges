class EmailNormalizer {
  /**
   *
   * @param order - Order object with 'email' property that wil be normalized
   */
  normalize (order) {
    let aux = order.email.split('@')
    let atIndex = aux[0].indexOf('+')
    if (atIndex < 0) {
      aux[0] = aux[0].replace('.', '')
    } else {
      aux[0] = aux[0].replace('.', '').substring(0, atIndex - 1)
    }
    order.email = aux.join('@')
  }
}

module.exports = EmailNormalizer
