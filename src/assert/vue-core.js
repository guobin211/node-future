/**
 * 三元表达式扩展 多个条件
 * @param a
 * @param b
 * @returns {*}
 */
function concat(a, b) {
  return a ? (b ? a + ' ' + b : a) : b || '';
}

console.log(concat(1, 2));

function _concat(a, b) {
  if (a && b) {
    return a + ' ' + b;
  }
  if (a) {
    return a;
  }
  if (b) {
    return b;
  }
  return '';
}

function test() {
  const data = [
    {a: 1, b: 2},
    {a: 1},
    {b: 2},
    {}
  ];

  for (const item of data) {
    if (concat(item.a, item.b) === _concat(item.a, item.b)) {
      console.log('正确');
    } else {
      console.log('错误');
    }
  }
}

test();
