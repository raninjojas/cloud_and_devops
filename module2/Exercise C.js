function numberChecker(num) { // this func will take an input, based on the conditions we are checking if this input is a number.
    if (num > 20) { // if the input we pased is bigger than 20 then print the number we pased and the message.
      return `${num} is greater than 20`;
    } else if (num === 20) { // if the input we pased is equal value and equal type then print the number we pased and the message.
      return `${num} is equal to 20`;
    } else if (num < 20) { // if the input we pased is less than 20 then print the number we pased and the message.
      return `${num} is less than 20`;
    } else { // else, if the input is not matching the condtions then prit out the input we pased and the message
        // this condition will apply if we passed a string.
      return `${num} isn't even a number :(`;
    }
  }