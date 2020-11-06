import { Col, Row } from 'antd';
import React from 'react';
import googleIcon from './../images/google-icon.svg';
import { signInWithGoogle } from "./../services/firebase";

const Login = () => {
    return (
        <Row align='middle' justify='center'>
            <Col>
                <div className="login-buttons">
                    <button className="login-provider-button" onClick={signInWithGoogle}>
                        <img src={googleIcon} alt="google icon" height={60} width={60} />
                        <span> Signin with Google</span>
                    </button>
                </div>
            </Col>
        </Row>
    )
}

export default Login;