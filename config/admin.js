module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '90fbf306ed45d05f0df54d69ad59e050'),
  },
});
