import * as yup from 'yup';

import { object, string, number, date, InferType, boolean } from 'yup';


const createProductSchema = object({
  name: string().required(),
  price: number().min(.01).default(1).required(),
  in_stock: boolean().default(true)
});

interface CreateProduct extends InferType<typeof createProductSchema> {};


const myProduct = createProductSchema.cast({"name":123, "price":32.11, in_stock:true});
console.log(myProduct);


type CreateProducts = InferType<typeof createProductSchema>;

const my2:CreateProduct ={name:"123", price:1, in_stock:true};

const my:CreateProduct ={name:"123", price:1, in_stock:true};

