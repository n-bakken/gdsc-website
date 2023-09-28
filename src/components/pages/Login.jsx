import React from 'react'
import { GoogleLogin } from '@react-oauth/google';

const Login = () => {
  return (
    <div className="App">
          <GoogleLogin
            onSuccess={credentialResponse => {
              console.log(credentialResponse);
            }}
          
            onError={() => {
              console.log('Login Failed');
            }}
          
          />
      </div>
  );
}

export default Login
