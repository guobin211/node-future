const { createConnection } = require('./connect')
const { config } = require('./config')

function run() {
  const connect = createConnection(config)
  connect.connect((err, args) => {
    if (err) {
      console.log(err)
    }
    console.log(args)
  })
  tableCount(connect, c => console.log(c))
  const page = 4
  pageQuery(connect, page)
  connect.end()
}

/**
 * 分页查询
 * @param connect
 * @param page
 */
function pageQuery(connect, page) {
  const offset = 1000 * page
  const sql = `SELECT * FROM \`esg\`.\`tbl_company\` LIMIT ${offset}, 1000`
  connect.query(sql, function(err, res, fields) {
    if (err) {
      console.error(err)
    }
    console.log(res[0])
    console.log(res.length)
  })
}

/**
 * 查询table - count
 * @param connect
 * @param callback
 */
function tableCount(connect, callback) {
  const sql = `SELECT COUNT(*) FROM \`esg\`.\`tbl_company\``
  connect.query(sql, (err, results) => {
    if (err) {
      console.error(err)
    }
    callback(results[0]['COUNT(*)'])
  })
}

run()
