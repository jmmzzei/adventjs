function getGiftsToRefill(a1: string[], a2: string[], a3: string[]) {
  let toRefill = []

  const arr = [a1, a2, a3].map((el) => Array.from(new Set(el))).flat()

  const items = arr.reduce(
    (acc: Record<string, number>, curr: string) =>
      Object.assign(acc, acc[curr] ? { [curr]: acc[curr] + 1 } : { [curr]: 1 }),
    {}
  )

  for (const key in items) {
    if (Object.prototype.hasOwnProperty.call(items, key))
      if (items[key] === 1) toRefill.push(key)
  }

  return toRefill
}

const a1 = ['bike', 'car', 'bike', 'bike']
const a2 = ['car', 'bike', 'doll', 'car']
const a3 = ['bike', 'pc', 'pc']

console.log(getGiftsToRefill(a1, a2, a3))
//['doll', 'pc']
