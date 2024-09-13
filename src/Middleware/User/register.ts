

// Define validation rules
const registerValidation: ValidationChain[] = [
    body('firstName')
        .notEmpty().withMessage('First name is required')
        .isAlpha().withMessage('First name must contain only letters')
        .isLength({ min: 2 }).withMessage('First name must be at least 2 characters long'),

    body('lastName')
        .notEmpty().withMessage('Last name is required')
        .isAlpha().withMessage('Last name must contain only letters')
        .isLength({ min: 2 }).withMessage('Last name must be at least 2 characters long'),

    body('email')
        .notEmpty().withMessage('Email is required')
        .isEmail().withMessage('Please provide a valid email address'),

    body('password')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
        .matches(/\d/).withMessage('Password must contain at least one number'),

    body('age')
        .isInt({ min: 18 }).withMessage('Age must be at least 18'),

    body('phoneNumber')
        .notEmpty().withMessage('Phone number is required')
        .isMobilePhone().withMessage('Please provide a valid phone number'),

    body('address') // corrected typo from 'adress' to 'address'
        .notEmpty().withMessage('Address is required')
        .isLength({ min: 5 }).withMessage('Address must be at least 5 characters long'),
];

// Middleware to validate and handle errors
const validateUser = (req: any, res: any, next: any) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};

export { registerValidation, validateUser };
