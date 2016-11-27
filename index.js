module.exports = function addFn (x) {
    if (typeof x !== 'number') {
        throw new Error('addFn(x): x must be number')
    }

    return function add (y) {
        var ret = x + y
        if (typeof ret !== 'number') return null
        return ret
    }
}

