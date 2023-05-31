function calculateYearWithMorePeopleWorking(arrayOfYears) {
  // initializing variables
  let yearsOfWork = {}
  let maximumPeople = 0
  let yearsWithMorePeople = []

  // running for loop on arrayOfYears
  for (let i = 0; i < arrayOfYears.length; i++) {
    // spliting the beginning and retirement years
    const [beginningYear, retirementYear] = arrayOfYears[i]

    // running a for loop and initializing the year variable being equal to beginningYear
    for (let year = beginningYear; year <= retirementYear; year++) {
      if (yearsOfWork[year]) {
        yearsOfWork[year]++
      } else {
        yearsOfWork[year] = 1
      }
    }
  }

  // running for loop on yearsOfWork
  for (const year in yearsOfWork) {
    if (yearsOfWork[year] > maximumPeople) {
      maximumPeople = yearsOfWork[year]
      yearsWithMorePeople = [year]
    }

    if (yearsOfWork[year] === maximumPeople) {
      yearsWithMorePeople.push(year)
    }
  }

  return yearsWithMorePeople
}

// usage example
console.log(
  calculateYearWithMorePeopleWorking([
    [1960, 2005],
    [1945, 2008],
    [1938, 1999],
  ])
)
