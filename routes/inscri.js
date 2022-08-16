const express = require("express");
const { Inscription, getInscriptions, deleteInscri } = require("../controllers/Inscri");
const { inscriValidator, validation } = require("../middlewares/Validator");

const router = express.Router();

router.post('/inscription' , inscriValidator(),validation ,Inscription)

router.get('/getInscriptions' , getInscriptions)

router.delete('/:_id' , deleteInscri)



module.exports = router ;