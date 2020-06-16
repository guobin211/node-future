/**
 *  index.js
 * @Date 2020-06-12
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project node-future
 */
const G6 = window.G6;
window.onload = function () {
  setTimeout(()=> {  initChart()}, 33)
}

function getSize() {
  const {clientWidth, clientHeight} = window.document.body
  const dpr = window.devicePixelRatio
  return { width: clientWidth * dpr, height: clientHeight * dpr }
}

function getLayoutSize() {
  const el = document.getElementById('mountNode')
  const width = el.scrollWidth;
  const height = el.scrollHeight || 500;
  return {width, height}
}

function getDefault() {
}

function initChart() {
  const data = {
    nodes: [
      {
        id: '0',
        label: '&',
      },
      {
        id: '1',
        label: '1',
      },
      {
        id: '2',
        label: '>=1',
      },
      {
        id: '3',
        label: '&',
      },
      {
        id: '4',
        label: 'P10',
      },
      {
        id: '5',
        label: '>=1',
      },
      {
        id: '6',
        label: '中间量程闭锁',
      },
      {
        id: '7',
        label: '中间量程闭锁',
      },
    ],
    edges: [
      {
        source: '0',
        target: '1',
      },
      {
        source: '0',
        target: '2',
      },
      {
        source: '1',
        target: '3',
      },
      {
        source: '1',
        target: '5',
      },
      {
        source: '3',
        target: '4',
      },
      {
        source: '3',
        target: '5',
      },
      {
        source: '5',
        target: '3',
      },
      {
        source: '5',
        target: '6',
      },
      {
        source: '5',
        target: '7',
      },
    ],
  };
  const {width, height} = getLayoutSize()
  const graph = new G6.Graph({
    container: 'mountNode',
    width,
    height,
    fitView: true,
    modes: {
      default: ['drag-canvas', 'drag-node'],
    },
    layout: {
      type: 'dagre',
      rankdir: 'LR',
      align: 'DL',
      nodesepFunc: () => 1,
      ranksepFunc: () => 1,
    },
    defaultNode: {
      size: [30, 20],
      type: 'rect',
      style: {
        lineWidth: 2,
        stroke: '#5B8FF9',
        fill: '#C6E5FF',
      },
    },
    defaultEdge: {
      size: 1,
      color: '#e2e2e2',
      style: {
        endArrow: {
          path: 'M 0,0 L 8,4 L 8,-4 Z',
          fill: '#e2e2e2'
        },
      },
    },
  });
  graph.data(data);
  graph.render();
}
