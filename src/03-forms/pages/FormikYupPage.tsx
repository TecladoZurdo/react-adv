import { useFormik } from 'formik';
import * as Yup from 'yup';
import '../styles/styles.css';


export const FormikYupPage = () => {


    const {  handleSubmit,  errors, touched, getFieldProps } = useFormik({
            initialValues: { firstName: '', lastName: '', email: '' },
            onSubmit: values => {
                console.log(values);
            },
            validationSchema: Yup.object({
                firstName: Yup.string().max(15, 'No debe tener 15 caracteres')
                    .required('Requerido'),
                lastName: Yup.string().max(15, 'No debe tener mas de 15 caracteres'),
                email: Yup.string().email('El correo no tiene un formato valido').required('Requerido')
            })
        });


    return (
        <div>
            <h1>Basic T</h1>
            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor='firstName'>First Name</label>
                <input type="text"
                    {...getFieldProps('firstName')} />
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                <label htmlFor='lastName'>Last Name</label>
                <input type="text" {...getFieldProps('lastName')} />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                <label htmlFor='email'>Email</label>
                <input type="text" {...getFieldProps('email')} />
                {touched.email && errors.email && <span>{errors.email}</span>}

                <button type="submit">submit </button>
            </form>
        </div>
    )
}
