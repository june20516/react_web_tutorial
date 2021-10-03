import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import { withRouter } from 'react-router-dom';

function LoginPage(props) {

    const dispatch = useDispatch();

    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');

    const onEmailHander = (event) => {
        setEmail(event.currentTarget.value);
    }

    const onPasswordHander = (event) => {
        setPassword(event.currentTarget.value);
    }

    const onsubmitHander = (event) => {
        event.preventDefault();

        let body = {
            email: Email,
            password: Password
        }

        dispatch(loginUser(body))
            .then(response => {
                if(response.payload.loginSuccess) {
                    props.history.push('/')
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
            <h2>Sign In</h2>
            <form style={{ display: 'flex', flexDirection: 'column' }}
                onSubmit={onsubmitHander}
            >
                <label>Email</label>
                <input type='email' value={Email} onChange={onEmailHander} />
                <label>Password</label>
                <input type='password' value={Password} onChange={onPasswordHander} />

                <br />
                <button type='submit'>Sign In</button>
            </form>
        </div>
    )
}

export default withRouter(LoginPage);
