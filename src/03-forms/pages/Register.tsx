import { ChangeEvent, FormEvent, useState } from 'react';
import '../styles/styles.css';

export const Register = () => {

    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        password1: '',
        password2: ''
    });

    const { name, email, password1, password2 } = registerData;

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setRegisterData(pre => {
            return { ...pre, [event.target.name]: event.target.value }
        })
    }

    const onSubmit = (event:FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        console.log(registerData);
    }

    return (
        <div>
            <h1>Register</h1>
            <form noValidate onSubmit={onSubmit}>
                <input type="text" placeholder="Name"
                    value={name}
                    onChange={onChange}
                    name="name" />
                <input type="email"
                    placeholder="Email"
                    value={email}
                    onChange={onChange}
                    name="email" />
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
                <button type="submit"> Submit</button>
            </form>
        </div>
    )
}
