const fs = require('fs')

const BATH_PATH = '/Users/guobin/vscode/node-future/assets/'
const BASE_DATA = [
  {
    "key": "医用防护口罩 | N95口罩",
    "value": 0,
    "specification": "GB 19083-2010, 建议3M 1860/1870/9123,防飞沫血液体液款"
  },
  {
    "key": "防冲击眼罩/护目镜/防护眼镜",
    "value": 0
  },
  {
    "key": "防护面罩",
    "value": 0
  },
  {
    "key": "防护帽/医用帽/圆帽",
    "value": 0
  },
  {
    "key": "隔离衣",
    "value": 0
  },
  {
    "key": "防护服",
    "value": 0,
    "specification": "GB 19082-2003"
  },
  {
    "key": "乳胶手套",
    "value": 0,
    "specification": "灭菌，GB 10213-2006"
  },
  {
    "key": "防污染鞋套",
    "value": 0
  },
  {
    "key": "测体温设备",
    "value": 0
  }
]
const header = ['城市']
for (const data of BASE_DATA) {
  header.push(data.key)
}
const BASE_CSV = [header]
const Total = [];

function createEmptyMap() {
  const baseMap = new Map()
  for (const item of BASE_DATA) {
    baseMap.set(item.key, 0)
  }
  return baseMap;
}

function createCSV(city, map) {
  const val = map.values()
  return [city, ...val]
}

function readDir() {
  const files = fs.readdirSync(BATH_PATH)
  for (const file of files) {
    if (file !== 'data.json') {
      const cites = JSON.parse(fs.readFileSync(BATH_PATH + file).toString())
      let cityName;
      const baseMap = createEmptyMap();
      for (const city of cites) {
        if (!cityName) {
          cityName = city.city;
        }
        for (const item of city.supplies) {
          const current = baseMap.get(item.key);
          if (current >= 0 && item.value > 1) {
            baseMap.set(item.key, current + item.value)
          }
        }
      }
      const cityItem = {
        city: cityName,
        data: []
      }
      baseMap.forEach((value, key) => {
        cityItem.data.push({
          name: key,
          value: value
        })
      })
      Total.push(cityItem)
    }
  }
  createJSON(Total)
}

function createJSON(arr) {
  fs.writeFileSync('count.json', JSON.stringify(Total))
}

readDir()

