const Joi = require('joi');

export const EncounterModel = Joi.object({
  type: Joi.string().required().description('Type of the encounter'),
  name: Joi.string().required().description('Name of the encounter'),
  age: Joi.number().max(99).min(18).required()
          .description('Age'),
  bloodType: Joi.string().optional().description('Blood type').example('a+'),
}).description('Json that describes an encounter');
