import * as yup from 'yup';

const createProductSchema = yup.object({
  name: yup.string().required().defined(),
  price: yup.number().min(.01).default(1).required(),
  in_stock: yup.boolean().default(true)
});

interface CreateProduct extends yup.InferType<typeof createProductSchema> {}