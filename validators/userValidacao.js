const Joi = require('joi');

const usuarioSchema = Joi.object({
    nome: Joi.string()
    .min(3)
    .max(100)
    .required()
    .messages({
        'string.base': 'O nome deve ser um texto',
        'string.empty': 'O nome é obrigatório',
        'string.min': 'O nome deve ter pelo menos 3 caracteres',
        'any.required': 'O nome é obrigatório'
    }),
    email: Joi.string()
    .email()
    .required()
    .messages({
        'string.email': 'O e-mail deve ser válido',
        'string.empty': 'O e-mail é obrigatório',
        'any.required': 'O e-mail é obrigatório'
    }),
    login: Joi.string()
    .alphanum()
    .min(3)
    .required()
    .messages({
        'string.alphanum': 'O login só pode conter letras e números',
        'string.min': 'O login deve conter pelo menos 3 caracteres',
        'any.required': 'O login é obrigatório'
    }),
    senha: Joi.string()
    .min(6)
    .required()
    .messages({
        'string.min': 'A senha deve conter pelo menos 6 caracteres',
        'any.required': 'A senha é obrigatória'
    })
});

module.exports = usuarioSchema;