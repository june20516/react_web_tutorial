import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../_actions/user_action";


export default function authenticate(SpecificComponent, option, adminRoute = null) {
    // option : null => 전부 출입 가능
    //          true => 로그인 한 사람만
    //          false => 로그인 한 유저는 출입 불가능
    function AuthenticationCheck(props) {

        const dispatch = useDispatch();
        
        useEffect(() => {

            dispatch(auth()).then(response => {
                console.log(response);
                
                // not logged in
                if(response.payload.isAuth) {
                    // logged in
                    if(adminRoute && !response.payload.isAdmin) {
                        props.history.push('/');
                    } else {
                        if(option === false){
                            props.history.push('/');
                        }
                    }
                } else {
                    if(option) {
                        props.history.push('/login');
                    }
                }
            });

        }, [dispatch, props])

        return <SpecificComponent />
    }
    return AuthenticationCheck
}
