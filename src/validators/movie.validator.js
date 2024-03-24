const { param, body } = require("express-validator");

const createMovieValidator = [
  body('title')
    .isString().withMessage("title should be a string")
    .trim()
    .isLength({ min: 2 }).withMessage("title should have at least 2 characters"),

  body('review')
    .isString().withMessage("review should be a string")
    .trim()
    .isLength({ min: 8, max: 240 })
    .withMessage("review should have between 8 and 240 characters"),

  body('cover')
    .isString().withMessage("cover should be a string")
    .isURL().withMessage("cover should be a valid URL"),

  body('stars')
    .isNumeric().withMessage("stars should be a number")
    .isInt({ min: 0, max: 5 }).withMessage("stars should be between 0 and 5"),

  body('favorite')
    .optional()
    .isBoolean().withMessage("favorite should be a boolean"),
];

const updateMovieValidator = [
  body('title')
    .optional()
    .isString().withMessage("title should be a string")
    .trim()
    .isLength({ min: 2 }).withMessage("title should have at least 2 characters"),

  body('review')
    .optional()
    .isString().withMessage("review should be a string")
    .trim()
    .isLength({ min: 8, max: 240 })
    .withMessage("review should have between 8 and 240 characters"),

  body('cover')
    .optional()
    .isString().withMessage("cover should be a string")
    .isURL().withMessage("cover should be a valid URL"),

  body('stars')
    .optional()
    .isNumeric().withMessage("stars should be a number")
    .isInt({ min: 0, max: 5 }).withMessage("stars should be between 0 and 5"),
];

const idInParams = [
  param("id")
    .notEmpty().withMessage("id field is required")
    .isMongoId().withMessage("id must be mongo id")
]



module.exports = { idInParams, createMovieValidator, updateMovieValidator };
