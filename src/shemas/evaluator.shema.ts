import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Chat } from './chat.shema';
import { Contents } from './contents.shema';
import { Help } from './help.shema';


export type EvaluatorDocument = HydratedDocument<Evaluator>;

@Schema()
export class Evaluator {
  @Prop({required:true,unique:true})
  name: string;

  @Prop()
  lastname: string;

  @Prop()
  number_identity:number;

  @Prop()
  sex:{
    female:string
    male: string
  }

  @Prop()
  age: number;

  @Prop()
  adress: string;

  @Prop()
  scool: string

  @Prop()
  teaching_level:{
    primary: string
    secondary: string
    undergraduate: string
    academic: string
  }  
  
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Chat' })
  chat: Chat;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Contents' })
  content: Contents;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Help' })
  help: Help;
}

export const EvaluatorSchema = SchemaFactory.createForClass(Evaluator);