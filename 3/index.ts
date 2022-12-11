function distributeGifts(packOfGifts: string[], reindeers: string[]) {
  const giftsWeight = packOfGifts.reduce((acc, curr) => curr.length + acc, 0)

  const maxWeightLimit = reindeers.reduce(
    (acc, curr) => curr.length * 2 + acc,
    0
  )

  const maxPackages = Math.floor(maxWeightLimit / giftsWeight)

  return maxPackages
}

const packOfGifts = ['book', 'doll', 'ball']
const reindeers = ['dasher', 'dancer']

const maxPackages = distributeGifts(packOfGifts, reindeers)

console.log(maxPackages)
// 2
