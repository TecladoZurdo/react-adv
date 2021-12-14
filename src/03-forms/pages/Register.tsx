import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';
import '../styles/styles.css';

export const Register = () => {

    const { name, email, password1, password2, onChange, reset, isValidEmail } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: ''
    });


    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    }

    return (
        <div>
            <h1>Register</h1>
            <form noValidate onSubmit={onSubmit}>
                <input type="text" placeholder="Name"
                    value={name}
                    onChange={onChange}
                    name="name"
                    className={`${name.trim().length <= 0 && 'has-error'}`} />
                {name.trim().length <= 0 && <span>Este es campo es necesario</span>}
                <input type="email"
                    placeholder="Email"
                    value={email}
                    onChange={onChange}
                    name="email" />
                {!isValidEmail(email) && <span>No es un email valido</span>}
                <input type="password"
                    placeholder="Password"
                    value={password1}
                    onChange={onChange}
                    name="password1" />
                <input type="password"
                    placeholder="Repeat password"
                    value={password2}
                    onChange={onChange}
                    name="password2" />
                <button type="reset" onClick={reset}> Reset</button>
                <button type="submit"> Submit</button>
            </form>
        </div>
    )
}
