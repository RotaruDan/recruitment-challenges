const STREET_REPLACEMENTS = {
  'st.': 'street',
  'rd.': 'road'
}

class StreetNormalizer {
  /**
   *
   * @param order - order property with 'street' property that will be normalized
   */
  normalize (order) {
    Object.entries(STREET_REPLACEMENTS)
      .map((searchValue, replaceValue) => order.street.replace(searchValue, replaceValue))
  }
}

module.exports = StreetNormalizer
