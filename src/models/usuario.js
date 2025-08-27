import mongoose, { Schema } from "mongoose";

const usuarioSchema = new Schema({
  nombreUsuario: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (valor) => {
        return /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(valor);
      },
    },
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: (valor) => {
        return /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,100}$/.test(valor);
      },
    },
  },
});

const Usuario = mongoose.model("usuario", usuarioSchema);

export default Usuario;
