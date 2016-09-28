var tap = require('tap')
var toRoman = require('../index.js')

tap.equal(toRoman(5), 'V')
tap.equal(toRoman(3), 'III')
tap.equal(toRoman(13), 'XIII')
