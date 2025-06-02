function isSameType(value1, value2) {
	 const val1 = parseFloat(value1);
  const val2 = parseFloat(value2);

  const isVal1NaN = Number.isNaN(val1);
  const isVal2NaN = Number.isNaN(val2);

  if (isVal1NaN && isVal2NaN) {
    return true;
  }

  if (!isVal1NaN && !isVal2NaN) {
    return true; // Both are valid numbers
  }

  return false; // One is NaN, the other is not
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
