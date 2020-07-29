// pm2 config
module.exports = {
  apps: [
    {
      name: "my_node_server",
      script: "./server.js",
      watch: true,
      error_file: 'err.log',
      out_file: 'out.log',
      log_file: 'combined.log',
      time: true,
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
      kill_timeout : 9000,
      exp_backoff_restart_delay: 1000,
      restart_delay: 3000
    },
  ],
}
