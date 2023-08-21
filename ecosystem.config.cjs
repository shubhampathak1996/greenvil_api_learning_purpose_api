module.exports = {
  apps: [
    {
      name: 'edchimp-api',
      cwd: '/var/www/edchimp-api',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
