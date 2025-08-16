const Joi = require('joi');
module.exports.listingSchema = Joi.object({
    listing : Joi.object({
        title : Joi.string().required(),
        description : Joi.string().required(),
        location :   Joi.string().required(),
        country : Joi.string().required(),
        price : Joi.number().required().min(0).messages({
            'number.base': 'Price must be a valid number',
            'number.min': 'Price must be greater than or equal to 0'
        }),  //.min to prevent negative numbers
        image: Joi.object({
      url: Joi.string().uri().required()
    }).required(),
    }).required(),
});





module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().required().min(1).max(5),
    comment: Joi.string().required(),
  }).required()   //required mtlb review naam ki object honi hi chaiye 

});