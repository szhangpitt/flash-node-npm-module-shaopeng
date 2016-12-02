# TOC
   - [addFn](#addfn)
     - [usage](#addfn-usage)
     - [input/output](#addfn-inputoutput)
     - [pure number adder](#addfn-pure-number-adder)
<a name=""></a>
 
<a name="addfn"></a>
# addFn
<a name="addfn-usage"></a>
## usage
require(this-module) returns a function.

```js
assert(typeof addFn === 'function', 
    'addFn should be a function')
```

addFn(number) returns a function.

```js
var add30 = addFn(30);
assert(typeof add30 === 'function', 
    'addFn(number) should be a function')
```

addFn(x)(y) === x + y.

```js
assert.strictEqual(addFn(30)(50), 80, 
    'addFn(x)(y) should strictly equal to x + y')
```

<a name="addfn-inputoutput"></a>
## input/output
input non-number --> output null.

```js
assert.strictEqual(addFn(1)('b'), null)
```

<a name="addfn-pure-number-adder"></a>
## pure number adder
addFn(non-number) throws Error.

```js
var adderWithNonNumber = addFn.bind(null, 'abc')
assert.throws(adderWithNonNumber, Error)
assert.throws(adderWithNonNumber, /must be number/)
```

