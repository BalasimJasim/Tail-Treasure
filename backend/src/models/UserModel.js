import { Schema, model } from "mongoose";
import { Address } from "../models/AddressModel.js";

const required = true;
const unique = true;

const userSchema = new Schema({
  firstName: { type: String, required },
  lastName: { type: String, required },
  email: { type: String, required, unique },
  password: { type: String, required },
  address: { type: Address.schema, required },
  phoneNumber: { type: String },
  bonusPoints: {
    type: Number,
    default: 0,
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },
  isAccountVerified: {
    type: Boolean,
    default: false,
  },

  history: [{}],
  favorites: [{ type: Schema.Types.ObjectId, ref: "Product" }],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const User = model("User", userSchema);
