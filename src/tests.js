const { expect } = require('chai')
const { add, subtract } = require('./lib')

describe('add', function () {
    it('should be a function', function () {
        expect(add).to.be.a('function')
    })

    it('should return a number', function () {
        expect(typeof add(1, 2)).to.equal("number")
    })
})

describe('subtract', function () {
    it('should be a function', function () {
        expect(subtract).to.be.a('function')
    })

    it('should return a number', function () {
        expect(typeof subtract(1, 2)).to.equal("number")
    })
})