function verifySequentialOrder(number) {
  // converting the number to string
  const stringfiedNumber = String(number)

  // verify if it's a growing sequence
  const growing = [...stringfiedNumber].every((digit, i) => {
    return i === 0 || Number(digit) >= Number(stringfiedNumber[i - 1])
  })

  // verify if it's a descending sequence
  const descending = [...stringfiedNumber].every((digit, i) => {
    return i === 0 || Number(digit) <= Number(stringfiedNumber[i - 1])
  })

  if (growing) {
    return `${number} -> It is ordered`
  }

  if (descending) {
    return `${number} -> It is not ordered`
  }

  return `${number} -> It is not ordered`
}

// usage example
console.log(verifySequentialOrder(123456)) // ordered
console.log(verifySequentialOrder(654321)) // not ordered
console.log(verifySequentialOrder(123546)) // not ordered
