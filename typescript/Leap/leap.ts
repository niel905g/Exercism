//let year = 2019
function isLeapYear(year: number= 2019) {
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)
}
export default isLeapYear