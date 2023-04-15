import * as  yup from "yup";
export const inputSchema= yup.object({
    username:yup.string().required("Username is required").min(3, "Username must be at least 3 characters long")
    .matches(/^[a-zA-Z0-9]+$/,"Username must be alphanumeric"),

    email:yup.string().required("Email is required").email("Email is invalid"),

    password: yup.string().required("Password is required").min(8, "Password must be at least 8 characters long")
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "Minimum eight characters, at least one letter and one number" ),

    confirmPassword: yup.string().required("Confirm password is required").oneOf([yup.ref("password")],"Password must match")
    // yup.ref("password") passworde referans veriyor ve onun aynısının olmasını istiyor
})