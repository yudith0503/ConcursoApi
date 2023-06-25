


  import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';

import { HydratedDocument } from 'mongoose';

export type LevelDocument = HydratedDocument<Level>;

@Schema()
export class Level {
  @Prop({required:true,unique:true})
  title: string; 
  
  @Prop()
  type:{
   basic:string,
   medium :string,
   advanced:string
  };

  @Prop()
  description: string;
  
}

export const LevelSchema = SchemaFactory.createForClass(Level);