import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AnimalDocument = Animal & Document;

@Schema()
export class Animal {
  @Prop()
  name: string;

  @Prop()
  type: string;

  @Prop()
  age: number;
}

export const AnimalSchema = SchemaFactory.createForClass(Animal);
