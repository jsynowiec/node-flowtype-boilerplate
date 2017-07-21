const hapiAuthJwt = require('hapi-auth-jwt2');

export function register(server, options, next) {
  const validate = (decoded, request, callback) => {
    // This validate function is meant to add any layers of security
    // we think are necessary. In most cases, no additional checks are
    // necessary since the IDP has already verified the identity and
    // credentials of the user.

    const isNicePerson = true;

    if (!isNicePerson) {
      return callback(null, false);
    }

    return callback(null, true);
  };


  server.register(hapiAuthJwt, (err) => {
    if (err) {
      throw new Error(err);
    }

    server.auth.strategy('jwt', 'jwt',
      {
        key: process.env.AUTH_SHARED_KEY || 'NeverShareYourSecret',
        validateFunc: validate,
        verifyOptions: { algorithms: ['HS256'] },
      });

    server.auth.default('jwt');
    next();
  });
}

exports.register.attributes = { name: 'auth', version: '1.0.0' };
