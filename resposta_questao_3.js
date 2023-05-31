function verifyValidSequence(bracketString) {
  // needed variables
  const stack = []
  const openBrackets = ['[', '{', '(']
  const closeBrackets = [']', '}', ')']

  // running the for loop
  for (let i = 0; i < bracketString.length; i++) {
    const character = bracketString[i]

    // checking if open brackets includes the character
    if (openBrackets.includes(character)) {
      stack.push(character)
    }

    // checking if close brackets includes the character
    if (closeBrackets.includes(character)) {
      const openChar = openBrackets[closeBrackets.indexOf(character)]

      // checking if close brackets has no lenght or if removing the latest element is equal to open brackets
      if (stack.length === 0 || stack.pop() !== openChar) {
        return false
      }
    }
  }

  return stack.length === 0
}

// usage example
console.log(verifyValidSequence('{ [ ( ) ( ) { } [ ] ] { } }')) // true
console.log(verifyValidSequence('{ [ ( ( ) ] }')) // false
console.log(verifyValidSequence('{ } [ ] ( )')) // true
console.log(verifyValidSequence('( ( ) { } [ [ ] )')) // false
console.log(verifyValidSequence('[ { } ( [ ) ] ]')) // false
