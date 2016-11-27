var assert = require('assert')
var addFn = require('../index')

describe('addFn', function () {
    describe('usage', function () {
        it('require(this-module) returns a function', function () {
            assert(typeof addFn === 'function', 
                'addFn should be a function')
        })
        
        it('addFn(number) returns a function', function () {
            var add30 = addFn(30);
            assert(typeof add30 === 'function', 
                'addFn(number) should be a function')
        })
        
        it('addFn(x)(y) === x + y', function () {
            assert.strictEqual(addFn(30)(50), 80, 
                'addFn(x)(y) should strictly equal to x + y')
        })
    })

    describe('input/output', function () {
        it('input non-number --> output null', function () {
            assert.strictEqual(addFn(1)('b'), null)
        })
    })

    describe('pure number adder', function () {
        it('addFn(non-number) throws Error', function () {
            var adderWithNonNumber = addFn.bind(null, 'abc')
            assert.throws(adderWithNonNumber, Error)
            assert.throws(adderWithNonNumber, /must be number/)
        })
    })
})

