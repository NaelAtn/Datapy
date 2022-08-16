const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const InscriSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  course: {
    type: String,
    required: true,
    default : ["Data Science" , "FullStack JS"]
  },
  format: {
    type: String,
    required: true,
    default: ["Formule en Présentiel","Formule à distance"]
  },
});

module.exports = Inscri = model("inscri", InscriSchema);
