const joi = require("joi");

const validateEmail = (email) => {
  const userschema = joi.object({
    email: joi.string().email({ minDomainSegments: 2 }).required(),
  });

  const result = userschema.validate({ email });

  if (result.error) {
    // Handle validation error
    console.error(result.error.details);
    throw new Error("Validation failed");
  }

  // Validation succeeded
  return result.value;
};

module.exports = { validateEmail };
