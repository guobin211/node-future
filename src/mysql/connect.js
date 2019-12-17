const mysql = require('mysql')

/**
 * 连接mysql
 * @param config
 * @returns {Connection}
 */
function createConnection(config) {
  return mysql.createConnection({
    host: config.host,
    user: config.username,
    password: config.password,
    database: config.database,
    port: config.port ? config.port : 3306,
  })
}

module.exports = {
  createConnection: createConnection,
}
