import { useFormik, Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';


export const FormikComponent = () => {

    return (
        <div>
            <h1>Basic T</h1>
            <Formik
                initialValues={{ firstName: '', lastName: '', email: '', terms: true, job: '' }}
                onSubmit={
                    (values) => { console.log(values) }
                }
                validationSchema={
                    Yup.object({
                        firstName: Yup.string().max(15, 'No debe tener 15 caracteres')
                            .required('Requerido'),
                        lastName: Yup.string().max(15, 'No debe tener mas de 15 caracteres'),
                        email: Yup.string().email('El correo no tiene un formato valido').required('Requerido'),
                        terms: Yup.boolean().oneOf([true], 'Debe de aceptar las codiciones').required(),
                        job: Yup.string()
                            .notOneOf(['tres'], 'Esta opcion no es permitida')
                            .required()
                    })
                }
            >
                {() => (<Form >
                    <label htmlFor='firstName'>First Name</label>
                    <Field name="firstName" type="text" placeholder="nombre"/>
                    <ErrorMessage name="firstName" component="span" />

                    <label htmlFor='lastName'>Last Name</label>
                    <Field name="lastName" type="text" />
                    <ErrorMessage name="lastName" component="span" />

                    <label htmlFor='email'>Email</label>
                    <Field name="email" type="text" />
                    <ErrorMessage name="email" component="span" />

                    <label>Job Type</label>
                    <Field name="job" as="select">
                        <option value=""></option>
                        <option value="uno">Uno</option>
                        <option value="dos">Dos</option>
                        <option value="tres">Tres</option>
                    </Field>


                    <label>
                        <Field name="terms" type="checkbox" />
                        Terms and conditions
                    </label>
                    <ErrorMessage name="terms" component="span" />

                    <button type="submit">submit </button>
                </Form>)}

            </Formik>
        </div>
    )
}
