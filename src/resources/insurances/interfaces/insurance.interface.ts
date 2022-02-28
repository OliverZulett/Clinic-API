import { Document } from 'mongoose';

export interface InsuranceModel extends Document {
  readonly name: String;
  readonly address: String;
  readonly phone: String;
  readonly email: String;
  readonly postal_code: String;
}