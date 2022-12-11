function countHours(year: number, holidays: string[]) {
  if (!holidays) return 0

  return holidays.reduce((acc, cur) => {
    const date = new Date(cur)
    date.setFullYear(year)
    const day = date.getDay()
    if (day > 0 && day < 6) return acc + 2
    return acc + 0
  }, 0)
}

const year = 2022
const holidays = ['01/06', '04/01', '12/25'] // format MM/DD

const result = countHours(year, holidays)

console.log(result)
// 4
