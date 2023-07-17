const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TimeSchema = new Schema({
  consultorioId: { type: mongoose.Types.ObjectId, ref: 'Consultorio', required: [true, "Consultório é obrigatório"] },
  specialties: [{ type: mongoose.Types.ObjectId, ref: 'Work', required: [true, "Especialidade é obrigatório"] }],
  colaborators: [{ type: mongoose.Types.ObjectId, ref: 'Colaborator', required: [true, "Colaborador é obrigatório"] }],
  days: [{ type: [Number], required: [true, "Dia é obrigatório"] }],
  begin: { type: Date, required: [true, "Hora de início é obrigatório"] },
  end: { type: Date, required: [true, "Hora de término é obrigatório"] },
  dataRegister: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Time", TimeSchema);
