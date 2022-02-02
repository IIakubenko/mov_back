import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
    @Prop()
    title: string

    @Prop()
    price: number

    @Prop()
    date: string

    @Prop()
    description: string

    @Prop()
    url: string

    @Prop()
    img: string

    @Prop()
    genre: string
}

export const ProductSchema = SchemaFactory.createForClass(Product);
