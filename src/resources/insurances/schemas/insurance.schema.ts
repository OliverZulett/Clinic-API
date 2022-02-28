import mongoose from 'mongoose';
export const InsuranceSchema = new mongoose.Schema(
  {
    name: String,
    address: String,
    phone: String,
    email: String,
    postal_code: String,
  },
  {
    collection: 'INSURANCES',
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);
