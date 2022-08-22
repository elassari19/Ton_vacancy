import * as yup from "yup";

export default yup.object().shape({
  user: yup.string().required(),
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required("Password is required"),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Your passwords do not match."),
  privacy: yup.boolean().oneOf([false], "accept to continue"),
});
