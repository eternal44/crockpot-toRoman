var tap = require('tap')
var toRoman = require('../index.js')

tap.equal(toRoman(5), 'V')
tap.equal(toRoman(3), 'III')
tap.equal(toRoman(13), 'XIII')
tap.equal(toRoman(60), "LX")
tap.equal(toRoman(4), "IV")
tap.equal(toRoman(207), "CCVII")
tap.equal(toRoman(1066), "MLXVI")
tap.equal(toRoman("horse"), null)
