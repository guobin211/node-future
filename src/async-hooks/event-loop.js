/**
 * node js 事件循环
 * 微任务，宏任务
 * main async promise nextTick Mutation observer timer
 * @returns {Promise<void>}
 */
async function loop1() {
    console.log('loop1 start');
    console.log(await loop2());
    console.log('loop1 end')
}

async function loop2() {
    console.log('loop2 start');
    return 'loop2 return';
}

loop1().then(_ => console.log('async'));

/**
 * 宏任务
 */
setTimeout(() => {
    console.log('setTimeout start');
}, 0);

/**
 * 最后执行
 */
setImmediate(() => console.log('setImmediate'));

/**
 * 微任务
 */
process.nextTick(() => {
   console.log('nextTick start');
});

new Promise((resolve, reject) => {
    console.log('Promise Construct');
    resolve('promise resolve');
}).then(_ => console.log(_));

console.log('console');
