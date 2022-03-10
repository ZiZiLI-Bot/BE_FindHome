module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6863965bd59407356023275b5f6a8371'),
  },
});
