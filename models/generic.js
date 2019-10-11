const Joi = require('joi');

module.exports.IdValidationSchema = Joi.object().keys({    
    id: Joi.string().min(24).max(24).required()
});