/* Et armstrong nummer er et nummer hvis sum af dets cifre opløftet til potensen af antalet af cifre i nummeret, er det samme som nummeret! */
class ArmstrongNumbers {
  public static isArmstrongNumber(input: number): boolean {
    const digits = `${input}`.split('').map((digit) => parseInt(digit, 10))
    const factor = digits.length

    return input === digits.reduce((sum, digit) => sum + Math.pow(digit, factor), 0)
  }
}
export default ArmstrongNumbers