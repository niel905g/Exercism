// A Gigasecond is 10^9 (1,000,000,000) seconds.

var GIGASECOND = Math.pow(10, 12)

var Gigasecond = function (day) {
  /* Adds a gigasecond (10^9 seconds) to a date */
  this.day = day
}

Gigasecond.prototype.date = function () {
  return new Date(this.day.getTime() + GIGASECOND)
}

export default Gigasecond