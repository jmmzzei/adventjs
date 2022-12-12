function fitsInOneBox(
  boxes: {
    l: number
    w: number
    h: number
  }[]
) {
  const sorted = boxes.sort((a, b) => {
    const aSum = a.h + a.l + a.w
    const bSum = b.h + b.l + b.w

    if (aSum > bSum) return 1
    if (aSum < bSum) return -1
    return 0
  })

  return sorted
    .slice(0, -1)
    .map((el, i) => {
      if (el.l >= sorted[i + 1]?.l) {
        return false
      }
      if (el.w >= sorted[i + 1]?.w) {
        return false
      }
      if (el.h >= sorted[i + 1]?.h) {
        return false
      }

      return true
    })
    .every((el) => el)
}

const boxes = [
  {
    l: 1,
    w: 1,
    h: 1,
  },
  {
    l: 3,
    w: 3,
    h: 3,
  },
  {
    l: 2,
    w: 2,
    h: 2,
  },
]

let fits = fitsInOneBox(boxes)

console.log(fits)
// true
