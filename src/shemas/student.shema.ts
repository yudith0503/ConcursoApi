import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type StudentDocument = HydratedDocument<Student>;

@Schema()
export class Student {
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
  @Prop()
  degree_studies: number   
}

export const StudentSchema = SchemaFactory.createForClass(Student);