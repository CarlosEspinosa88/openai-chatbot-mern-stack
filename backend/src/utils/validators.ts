import { Request, Response, NextFunction } from "express"
import { body, validationResult, ValidationChain } from 'express-validator'

export const validate = (validations: ValidationChain[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    // check all fields validations
    for(let validation of  validations) {
      const result = await validation.run(req);
      if(!result.isEmpty()) {
        break
      }
    }

    // final resolve for validations
    const errors = validationResult(req);

    if(errors.isEmpty()) {
      // if everything is ok, it goes next to another middleware
      return next()
    }

    return res.status(422).json({ error: errors.array()})
  }
}

export const loginValidator = [
  body("email").trim().isEmail().withMessage("Email is required"),
  body("password").trim().isLength({ min: 6 }).withMessage("Password should content at least 6 characters"),
]

export const signupValidator = [
  body("name").notEmpty().withMessage("Name is required"),
  ...loginValidator
]
