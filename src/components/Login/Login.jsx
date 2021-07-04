import React from 'react';
import classes from './Login.module.css';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup"
import {ValidationForm} from "../../helpers/validator";


const Login = (props) => {
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginForm/>
        </div>
);
};

const LoginForm = (props) => {

    const validationsSchema = yup.object().shape({
    login: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
    password: yup.string().typeError('Должно быть строкой').required('Обязательное поле').min(5, "Пароль должен быть больше 5 символов."),
    checkbox: yup.bool().oneOf([true], 'Поставьте галочку').required('Обязательное поле'),
});

    const submitFormik = (values, {setSubmitting}) => {
    alert(JSON.stringify(values));
    setSubmitting(false);
};
    return (
    <Formik
    initialValues={{login: '', password: '', checkbox: false}}
    onSubmit={submitFormik}
    validateOnBlur
    validationSchema={validationsSchema}
    >
    {({isSubmitting, isValid, dirty}) => (
        <Form>
            <div>
                <Field type="text" name="login"/>
                <ErrorMessage name="login" component={ValidationForm}/>
            </div>
            <div>
                <Field type="password" name="password"/>
                <ErrorMessage name="password" component={ValidationForm}/>
            </div>
            <div>
                <Field name="checkbox" type={"checkbox"}/>
                <ErrorMessage name="checkbox" component={ValidationForm}/>
            </div>
            <div>
                <button type="submit" disabled={isSubmitting && !isValid && !dirty}>
                    login
                </button>
            </div>
        </Form>
    )}
    </Formik>
    );
};

export default Login;