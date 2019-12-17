/**
 * 查看进程对象
 * version node 版本号
 * versions {
 *     node,
 *     v8: js引擎,
 *     uv: 异步编程实现,
 *     zlib: 压缩,
 *     brotli: 压缩,
 *     ares: 异步DNS解析库,
 *     modules: 模块,
 *     nghttp2: http,
 *     napi: 扩展接口,
 *     llhttp: http解析库,
 *     http_parser: 解析http协议,
 *     openssl: ssl证书,
 *     cldr: 翻译,
 *     icu,
 *     tz,
 *     unicode: 编码库,
 * }
 * arch: 'x64' <cpu架构>
 * platform: 'darwin' 平台<mac os>
 * release: node版本地址
 * moduleLoadList: [] 加载模块
 * binding: fn 绑定
 * config: {
 *     target_defaults: {},
 *     variables: {}
 * }
 * abort: fn
 * umask: fn
 * chdir: fn
 * cwd: fn cwd
 * kill: fn
 * exit: fn
 * env: {
 *     PATH: '',
 * },
 * title: '进程标题'
 * argv: [] node 参数
 */
function checkProcess() {
  // console.log(process);
  // console.log(Object.keys(process));
  console.log(process.argv)
  console.log(process.env)
}

checkProcess()
