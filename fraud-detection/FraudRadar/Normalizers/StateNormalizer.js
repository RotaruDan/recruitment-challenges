const STATE_REPLACEMENTS = {
  'il': 'illinois',
  'ca': 'california',
  'ny': 'new york'
}

class StateNormalizer {
  /**
   *
   * @param order - Order object with 'state' property that will be normalized
   */
  normalize (order) {
    Object.entries(STATE_REPLACEMENTS)
      .map((searchValue, replaceValue) => order.state.replace(searchValue, replaceValue))
  }
}

module.exports = StateNormalizer
