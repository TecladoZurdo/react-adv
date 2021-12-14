import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { MyChecbox } from '../components/MyCheckbox';
import { MySelect } from '../components/MySelect';
import { MyTextImput } from '../components/MyTextImput';
import '../styles/styles.css';


export const FormikAbstractation = () => {

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
                    <MyTextImput label="First Name" name="firstName" />
                    <MyTextImput label="Last Name" name="lastName" />
                    <MyTextImput label="Email" name="email" />
                    
                    <MySelect name="job" label="select">
                        <option value=""></option>
                        <option value="uno">Uno</option>
                        <option value="dos">Dos</option>
                        <option value="tres">Tres</option>
                    </MySelect>


                    <MyChecbox label="Terms and conditions" name="terms"/>

                    <button type="submit">submit </button>
                </Form>)}

            </Formik>
        </div>
    )
}
