import * as yup from "yup";

export const formSchema = yup.object().shape({
    name: yup.string().required('Please fill out this field'),
    email: yup.string().email('must be a valid email').required(),
    password: yup.string().required(),
    confirm: yup.string().oneOf([yup.ref("password"), null], "Passwords must match"),
    terms: yup.boolean().oneOf([true], "Please agree to the terms").required(),
    role: yup.string().matches(/(renter|user)/),
    authCode: yup.string()
})