const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkSchema = new Schema({
  consultorioId: { type: mongoose.Types.ObjectId, ref: 'Consultorio', required: [true, "Consultório é obrigatório"] },
  title: { type: String, required: [true, "Título é obrigatório"] },
  price: { type: Number, required: [true, "Preço é obrigatório"] },
  commission: { type: Number, required: [true, "Comissão é obrigatório"] },
  time: { type: Number, required: [true, "Tempo de Duração é obrigatório"] },
  recurrence: { type: Number, required: true },
  desciption: { type: String, required: [true, "Descrição é obrigatório"] },
  status: { type: String, enum: ['A', 'E','I'], default: 'A', required: true },
  dataRegister: { type: Date, default: Date.now },
});


module.exports = mongoose.model("Work", WorkSchema);
