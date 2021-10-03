import React, { useEffect } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom';

function LandingPage(props) {
    useEffect(() => {
        axios.get('/api/landing')
            .then(res => { console.log(res) })
    }, [])

    const logoutOnclickHandler = () => {
        axios.get('/api/users/logout')
        .then(res => {
            if(res.data.success === true){
            props.history.push('/login');
            } else {
                alert('fail to logout!');
            }
        })
    }
    return (
        <div style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}>
            <h2> Welcome tutorial</h2>
            <button onClick={logoutOnclickHandler}>
                logout
            </button>
        </div>
    )
}

export default withRouter(LandingPage);
