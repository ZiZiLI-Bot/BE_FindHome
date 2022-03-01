module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'de6e4f941e5475a8e12de10d4e47d0f0'),
  },
});
