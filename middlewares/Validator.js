const { check , validationResult } = require("express-validator")

exports.messageValidator = () => [  
    check("name" , "Veuillez insérer votre Nom et Prénom !").not().isEmpty(),
    check("email" , "N'est pas un e-mail").isEmail(),
    check("phone" , "Veuillez insérer votre Numéro de téléphone ").not().isEmpty(),
    check("message" , "Veuillez insérer votre Message").not().isEmpty()
]


exports.inscriValidator = () => [  
    check("name" , "Veuillez insérer votre Nom !").not().isEmpty(),
    check("firstname" , "Veuillez insérer votre Prénom !").not().isEmpty(),
    check("email" , "N'est pas un e-mail").isEmail(),
    check("phone" , "Veuillez insérer votre Numéro de téléphone ").not().isEmpty(),
    check("course" , "Veuillez choisir votre parcourse").not().isEmpty(),
    check("format" , "Veuillez choisir votre format de cours").not().isEmpty()
]

exports.validation = (req , res , next) =>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors : errors.array()})
     }
    next();
}

