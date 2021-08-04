import React from 'react';
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup"
import {ValidationForm} from "../../helpers/validator";


const LoginForm = ({login}) => {
    const validationsSchema = yup.object().shape({
        email: yup.string().typeError('Должно быть строкой').required('Обязательное поле'),
        password: yup.string().typeError('Должно быть строкой').required('Обязательное поле').min(5, "Пароль должен быть больше 5 символов."),
        checkbox: yup.bool().oneOf([true], 'Поставьте галочку').required('Обязательное поле'),
    });
    const submitFormik = (values, {setSubmitting, resetForm, setStatus}) => {
        alert(JSON.stringify(values));
        const {email, password, checkbox} = values;
        resetForm();
        login(email, password, checkbox, setStatus, setSubmitting);
    };
    return (
        <Formik
            initialValues={{email: '', password: '', checkbox: false}}
            onSubmit={submitFormik}
            validateOnBlur
            validationSchema={validationsSchema}
        >
            {({isSubmitting, isValid, dirty, status}) => {

                return <Form>
                    <div>
                        <Field type="text" name="email"/>
                        <ErrorMessage name="email" component={ValidationForm}/>
                    </div>
                    <div>
                        <Field type="password" name="password"/>
                        <ErrorMessage name="password" component={ValidationForm}/>
                    </div>
                    <div>
                        <Field name="checkbox" type={"checkbox"}/>
                        <ErrorMessage name="checkbox" component={ValidationForm}/>
                    </div>
                    {status && status.message && (
                        <div style={{color: "red"}}>{status.message}</div>
                    )}
                    <div>
                        <button type="submit" disabled={isSubmitting && !isValid && !dirty}>
                            login
                        </button>
                    </div>
                </Form>
            }
            }
        </Formik>
    );
};
export default LoginForm;