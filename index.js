function decimalToRoman (num) {
  var numeral_map = {
    ones: ['I', 'V', 'X'],
    tens: ['X', 'L', 'C'],
    hundreds: ['C', 'D', 'M'],
    thousands: ['M', 'V', 'X']
  }

  var places = ['ones', 'tens', 'hundreds', 'thousands']

  function toRoman() {
    var result = ''
    var currentPlaceIndex = 0

    while(parseInt(num) !== 0) {
      placesValue = num % 10
      result = translateByPlace(placesValue, places[currentPlaceIndex]) + result

      num = parseInt(num /= 10)
      currentPlaceIndex += 1
    }

    return result
  }

  function translateByPlace(num, place){
    var small = numeral_map[place][0]
    var med = numeral_map[place][1]
    var big = numeral_map[place][2]

    result = ''

    if(num < 4){
      result = copyString(small, num)
    } else if(num == 4) {
      result = small + med
    } else if (num == 5) {
      result = med
    } else if (num > 5 && num < 9) {
      med + copyString(small, num - 5)
    } else if (num == 9) {
      small + big
    }

    return result
  }

  function copyString(str, num) {
    var result = ''

    for (var i = 0; i < num; i++) {
      result += str
    }

    return result
  }


  return toRoman(num)
}

module.exports = decimalToRoman
