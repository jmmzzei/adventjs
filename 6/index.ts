function createCube(size: number) {
  let top = ''
  let bottom = ''

  for (let i = 1; i <= size; i++) {
    top += ' '.repeat(size - i) + '/\\'.repeat(i) + '_\\'.repeat(size)
    top += '\n'
  }

  for (let i = size; i > 0; i--) {
    bottom += ' '.repeat(size - i) + '\\/'.repeat(i) + '_/'.repeat(size)
    if (i !== 1) {
      bottom += '\n'
    }
  }

  return top + bottom
}

let cube = createCube(2)

console.log(cube)
//  /\_\_\
// /\/\_\_\
// \/\/_/_/
//  \/_/_/
