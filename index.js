module.exports = function addFn (x) {
    return function add (y) {
        return x + y
    }
}

