function wrapping(gifts: string[]) {
  return gifts.map((gift) => {
    let giftArr = [...gift]
    const topBottomrapper = giftArr.map((_el) => '*').join('') + '**'

    giftArr.unshift(topBottomrapper + '\n*')
    giftArr.push('*\n' + topBottomrapper)

    return giftArr.join('')
  })
}

const gifts = ['cat', 'game', 'socks']
const wrapped = wrapping(gifts)

console.log(wrapped)
// [
//   '*****\n*cat*\n*****',
//   '******\n*game*\n******',
//   '*******\n*socks*\n*******'
// ]
