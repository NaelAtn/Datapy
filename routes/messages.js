const express = require("express") ;
const { postMessage, getMessages, deleteMessage } = require("../controllers/messages");
const { messageValidator, validation } = require("../middlewares/Validator");
const router = express.Router();

router.post('/sendMessage' , messageValidator() ,validation, postMessage)

router.get('/allMessages', getMessages)

router.delete('/:_id', deleteMessage);


module.exports = router;