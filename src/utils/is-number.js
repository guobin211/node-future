/**
 * isLikeNumber
 * @param val
 * @returns {boolean}
 */
function isLikeNumber(val) {
  return typeof val === 'number' || !isNaN(parseFloat(val))
}

const data = [-1, 0, 1, '2e', '-22', '23', 'e2']
for (const datum of data) {
  console.log(isLikeNumber(datum))
}
