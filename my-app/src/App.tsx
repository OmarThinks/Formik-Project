import React from 'react';
import logo from './logo.svg';
import './App.css';
import Form1 from './forms/form1';
import Form2 from './forms/form2';


import * as yup from 'yup';

import { object, string, number, date, InferType, boolean } from 'yup';






function App() {


  const createProductSchema = object({
    name: string().min(3).required(), 
    price: number().min(.01).default(1).required(),
    in_stock: boolean().default(true)
  });
  
  interface CreateProduct extends InferType<typeof createProductSchema> {};
  
  
  const myProduct = createProductSchema.validateSync(
    {"name":124565, "price":"65545.114", in_stock:true});
  console.log(myProduct);


  return (
    <div className="App">
      <Form2 />
    </div>
  );
}

export default App;
