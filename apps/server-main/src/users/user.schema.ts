import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { UserRole } from "../enum/UserRole.enum";

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop({ type: String, enum: UserRole, default: UserRole.Guest })
  role: UserRole
}

export const UserSchema = SchemaFactory.createForClass(User);
