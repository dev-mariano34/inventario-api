const { body, validationResult } = require("express-validator");

exports.validateCreateProduct = [
  body("name")
    .notEmpty()
    .withMessage("Name is required"),

  body("price")
    .isNumeric()
    .withMessage("Price must be a number"),

  body("stock")
    .optional()
    .isInt({ min: 0 })
    .withMessage("Stock must be a positive integer"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    next();
  }
];
