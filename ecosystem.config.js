module.exports = {
  apps: [
    {
      name: "folio",
      script: "npm",
      args: "start",
      env_production: {
        NODE_ENV: "production",
        PORT: 3012
      }
    }
  ]
};