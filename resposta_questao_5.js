function calculateDistinctModes(numberOfPeople) {
  // needed variable, initializing it with 1
  let distinctModes = 1

  // running a for loop to get the factorial and initializing the variable with 2
  for (let i = 2; i <= numberOfPeople; i++) {
    distinctModes *= i
  }

  return distinctModes
}

// usage example
console.log(calculateDistinctModes(5))
