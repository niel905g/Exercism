/* Et armstrong nummer er et nummer hvis sum af dets cifre opløftet til potensen af antalet af cifre i nummeret, er det samme som nummeret! F.eks: 153 is an Armstrong number, because: `153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153` */

import 'dart:math';

class ArmstrongNumbers {
  // Returns `true` if the number passed is an Armstrong Number
  bool isArmstrongNumber (int number) {
    if (number < 0) {
      return false;
    }
  // convert to string to get the length
  var numberStr = number.toString();
  var numberLgh = numberStr.length;
    // variables:
  int tempNumber;
  var total = 0;

  for (var i = 0; i < numberLgh; i++) {
    try {
      // should be an int
      tempNumber = int.parse(numberStr[i]);
      // Armstrong Number computation
      total += pow(tempNumber, numberLgh) as int;
    } catch (ex) {
      throw ex;
    }
  }
  // Return result
  return total == number;
} 
/* "The elegant way:"
import 'dart:math' show pow;
class ArmstrongNumbers {
  /// The parameters and variables within the method that are set to final, are final (const) in order to prevent an accidental modification of the values.
    bool isArmstrongNumber(final num input) {
    final String numberAsString = input.toString();
    final int numOfDigits = numberAsString.length;
    num sum = 0;

    for (int count = 0; count < numOfDigits; count++) {
      final String digitAsString = numberAsString.substring(count, count + 1);
      final int digit = int.parse(digitAsString);
      sum += pow(digit, numOfDigits);
    }

    return input == sum;
  }*/
} 