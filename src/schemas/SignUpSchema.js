import * as yup from "yup";
const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
export const SignUpSchema = yup.object().shape({
    name: yup
        .string()
        .min(3,"name must contain at least 3 characters")
        .max(15,"name maximum number of characters allowed 15")
        .required("name must not be empty"),
    lastname: yup
        .string()
        .min(3,"lastname must contain at least 3 characters")
        .max(20,"lastname maximum number of characters allowed 20")
        .required("lastname must not be empty"),
    username: yup
        .string()
        .min(5,"username must contain at least 5 characters")
        .required("username must not be empty"),
    email: yup
        .string()
        .email("please enter valid email address")
        .required("email must not be empty"),
    age: yup
        .number()
        .positive("non positive numbers not allowed!")
        .integer("float numbers not allowed!")
        .min(15,"minimum age is 15 years old!")
        .required("age must not be empty"),
    password: yup
        .string()
        .min(8,"password must contain at least 5 characters")
        .matches(regex,"password must contains minimum 1 uppercase, 1 number, 1 lowercase")
        .required("password must not be empty")
});


