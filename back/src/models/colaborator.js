const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ColaboratorSchema = new Schema({
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
  bankAccount: {
    holder: { type: String, required: [true, "Titular é obrigatório"] },
    cpf: { type: String, required: [true, "CPF é obrigatório"] },
    bank: { type: String, required: [true, "Banco é obrigatório"] },
    agency: { type: String, required: [true, "Agência é obrigatório"] },
    account: { type: String, required: [true, "Conta é obrigatório"] },
    dv: { type: String, required: [true, "Digito verificador é obrigatório"] },
  },
  recipientId: { type: String, required: [true, "RecipientId é obrigatório"] },
  dataRegister: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Colaborator", ColaboratorSchema);
