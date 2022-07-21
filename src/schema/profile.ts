import * as yup from "yup";

export default yup.object({
  image: yup.string().notRequired(),
  name: yup.string().required().min(5),
  category: yup.string().notRequired(),
  description: yup.string().notRequired(),
  phone: yup.number().positive().integer(),
  email: yup.string().email().notRequired(),
  telegram: yup.string().notRequired(),
  city: yup.string().notRequired(),
  events: yup.boolean().notRequired(),
  insurance: yup.boolean().notRequired(),
  bonus: yup.boolean().notRequired(),
  review: yup.boolean().notRequired(),
  discount: yup.boolean().notRequired(),
  schedule: yup.boolean().notRequired()
})