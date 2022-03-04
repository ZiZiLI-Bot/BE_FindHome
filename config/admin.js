module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'afd696254597a2412feb8f15df1f3e90'),
  },
});
