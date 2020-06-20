/**
 * map_speed.js
 * @Date 2020-06-20
 * @Author GuoBin<guobin201314@gmail.com>
 * @Project node-future
 */
console.time("loop");

const obj = new Map();

for (let i = 0; i < 1000000; i++) {
  const time = Date.now();
  obj.set(`${i}_${time}`, time);
}

console.timeEnd("loop");

function test() {
  console.time("loop");

  const obj = new Map();

  for (let i = 0; i < 1000000; i++) {
    const time = Date.now();
    obj.set(`${i}_${time}`, time);
  }

  console.timeEnd("loop");
}
