const validate = (decoded, request, callback) => {

    // This validate function is meant to add any layers of security 
    // we think are necessary. In most cases, no additional checks are
    // necessary since the IDP has already verified the identity and 
    // credentials of the user.

    const isNicePerson = true;
    
    if (!isNicePerson) {
      return callback(null, false);
    }
    else {
      return callback(null, true);
    }
};

export function register (server, options, next) {
    server.register(require("hapi-auth-jwt2"), (err) => {  
        if(err){
           console.log(err);
        }

        server.auth.strategy('jwt', 'jwt',
        { 
            key: process.env.AUTH_SHARED_KEY || 'NeverShareYourSecret', 
            validateFunc: validate,            
            verifyOptions: { algorithms: [ 'HS256' ] } 
        });

        server.auth.default('jwt');
        next();
    });
}

exports.register.attributes = { name: "auth", version: "1.0.0" };