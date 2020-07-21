// innerHTML: render html string O(template size) + 重新创建所有 DOM 元素 O(DOM size)
// Virtual DOM: render Virtual DOM + diff O(template size) + 必要的 DOM 更新 O(DOM change)
// Virtual DOM render + diff 显然比渲染 html 字符串要慢，但是！它依然是纯 js 层面的计算，
// 比起后面的 DOM 操作来说，依然便宜了太多。可以看到，innerHTML 的总计算量不管是 js 计算还是 DOM 操作都是和整个界面的大小相关，
// 但 Virtual DOM 的计算量里面，只有 js 计算和界面大小相关，DOM 操作是和数据的变动量相关的。


function renderHtml(el, dom) {
  el.innerHeight = dom
}

function renderAndDiff(el, dom) {
  const old = el.childNodes
  const changed = compare(old, dom)

  // O(N-S)
  for (const newDom of changed) {
    el[newDom].innerHTML = newDom
  }

  // O(N)LogN
  function compare(oldDom, newDom) {
    // 对比新旧dom，返回需要更新的dom
    return newDom - oldDom;
  }
}

// 性能对比
// 初始渲染：Virtual DOM > 脏检查 >= 依赖收集
// 小量数据更新：依赖收集 >> Virtual DOM + 优化 > 脏检查（无法优化） > Virtual DOM 无优化
// 大量数据更新：脏检查 + 优化 >= 依赖收集 + 优化 > Virtual DOM（无法/无需优化）>> MVVM 无优化
