'use strict';
exports.isValid = function (data){
    let validator = require('is-my-json-valid');
    let validate = validator({
        required: true,
        type: 'object',        
        properties: {
            name: { required: true, type: 'string' },
            user: { required: true, type: 'string' },
            password: { required: true, type: 'string' },
            email: { required: true, type: 'string' }
        }
    });
    return validate(data);
}