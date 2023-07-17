const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ConsultorioSchema = new Schema({
  name: { type: String, required: [true, "Nome é obrigatório"] },
  photo: String,
  wallpapper: String,
  email: { type: String, required: [true, "Email é obrigatório"] },
  password: String,
  phone: String,
  address: {
    country: String,
    uf: String,
    city: String,
    cep: String,
    number: String,
  },
  geo: {
    type: { type: String },
    coordinates: Array,

  },
  dataRegister: { type: Date, default: Date.now },
});

ConsultorioSchema.index({ geo: "2dsphere" });

module.exports = mongoose.model("Consultorio", ConsultorioSchema);
