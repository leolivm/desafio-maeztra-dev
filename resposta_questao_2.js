function hasDuplicates(arrayOfNumbers) {
  // needed variables
  let duplicated = []
  let counter = {}

  // running the for loop
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    const element = arrayOfNumbers[i]
    counter[element] = (counter[element] || 0) + 1

    // checking if there is duplicated values inside the array
    // pushing them to the returned variable
    if (counter[element] === 2) {
      duplicated.push(element)
    }
  }

  return duplicated
}

// usage example
console.log(hasDuplicates([4, 5, 44, 98, 4, 5, 6, 7]))
console.log(hasDuplicates([8, 2, 1, 3, 3, 4, 2, 8, 1]))
