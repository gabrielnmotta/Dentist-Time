const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  name: { type: String, required: [true, "Nome é obrigatório"] },
  photo: { type: String, required: [true, "Foto é obrigatório"] },
  email: { type: String, required: [true, "Email é obrigatório"] },
  password: { type: String, required: [true, "Senha é obrigatório"] },
  phone: { type: String, required: [true, "Telefone é obrigatório"] },
  birthday: { type: String, required: [true, "Data de nascimento é obrigatório"] },
  sex: { type: String, enum: ['M', 'F'] ,required: [true, "Sexo é obrigatório"] },
  status: { type: String, enum: ['A', 'I'], default: 'A', required: true },
  address: {
    country: String,
    uf: String,
    city: String,
    cep: String,
    number: String,
  },
  document: {
    type: { type: String, enum: ['CPF', 'RG'] ,required: [true, "Tipo de documento é obrigatório"] },
    number: { type: String, required: [true, "Número do documento é obrigatório"] },
  },
  dataRegister: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Client", ClientSchema);
