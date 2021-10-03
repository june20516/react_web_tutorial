import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom';

function RegisterPage(props) {

    const dispatch = useDispatch();

    const [Email, setEmail] = useState('');
    const [Name, setName] = useState('');
    const [Password, setPassword] = useState('');
    const [PasswordConfirm, setPasswordConfirm] = useState('');

    const onEmailHander = (event) => {
        setEmail(event.currentTarget.value);
    }

    const onNameHander = (event) => {
        setName(event.currentTarget.value);
    }

    const onPasswordHander = (event) => {
        setPassword(event.currentTarget.value);
    }


    const onPasswordConfirmHander = (event) => {
        setPasswordConfirm(event.currentTarget.value);
    }

    const onsubmitHander = (event) => {
        event.preventDefault();

        if (Password !== PasswordConfirm){
            return alert('Password Confirmation is fail.');
        }

        let body = {
            email: Email,
            name: Name,
            password: Password
        }

        dispatch(signUpUser(body))
            .then(response => {
                if(response.payload.success) {
                    props.history.push('/login')
                } else {
                    alert(`error!! \n${response.payload.message}`);
                }
            })
    }

    return (
        <div style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}>
            <h2>Sign Up</h2>
            <form style={{ display: 'flex', flexDirection: 'column' }}
                onSubmit={onsubmitHander}
            >
                <label>Email</label>
                <input type='email' value={Email} onChange={onEmailHander} />

                <label>Name</label>
                <input type='text' value={Name} onChange={onNameHander} />

                <label>Password</label>
                <input type='password' value={Password} onChange={onPasswordHander} />

                <label>Password confirm</label>
                <input type='password' value={PasswordConfirm} onChange={onPasswordConfirmHander} />

                <br />
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default withRouter(RegisterPage);
