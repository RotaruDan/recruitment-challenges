const FraudRadar = require('./FraudRadar/index')
const FileHandler = require('./FraudRadar/FileHandler')
const assert = require('assert')


describe('Fraud Radar', function () {
  it('Should process the one line file', function () {

    let oneLineFileHandler = new FileHandler(['Files', 'OneLineFile.txt'])
    let result = FraudRadar.Check(oneLineFileHandler)
    assert.ok(result)
    assert.equal(result.length, 0)
  })

  it('Should process the two line file in which the second is fraudulent', function () {
    let twoLineFileHandler = new FileHandler(['Files', 'TwoLines_FraudulentSecond.txt'])
    let result = FraudRadar.Check(twoLineFileHandler)
    assert.ok(result)
    assert.equal(result.length, 1)
    assert.equal(result[0].isFraudulent, true)
    assert.equal(result[0].orderId, 2)
  })

  it('Should process the three line file in which the second is fraudulent', function () {
    let threeLineFileHandler = new FileHandler(['Files', 'ThreeLines_FraudulentSecond.txt'])
    let result = FraudRadar.Check(threeLineFileHandler)
    assert.ok(result)
    assert.equal(result.length, 1)
    assert.equal(result[0].isFraudulent, true)
    assert.equal(result[0].orderId, 2)
  })

  it('Should process the four line file in which more than one order is fraudulent', function () {
    let fourLineFileHandler = new FileHandler(['Files', 'FourLines_MoreThanOneFraudulent.txt'])
    let result = FraudRadar.Check(fourLineFileHandler)
    assert.ok(result)
    assert.equal(result.length, 2)
  })
})
