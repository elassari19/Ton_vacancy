import * as yup from "yup";

export default yup.object().shape({
  vacancy: yup.string().required(),
  Category: yup.array().of(yup.string()),
  descriprion: yup.string().required(),
  Salary: {
    delay: yup.number(),
    from: yup.number(),
    to: yup.number(),
  },
  options: {},
});
