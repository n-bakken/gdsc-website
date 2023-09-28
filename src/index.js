// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter, Routes, Route } from "react-router-dom";


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';

ReactDOM.render(
	<React.StrictMode>
		<GoogleOAuthProvider clientId="857647722831-dksl94msme5t7sacimil60a57kshrnn4.apps.googleusercontent.com">
			<App />
		</GoogleOAuthProvider>
	</React.StrictMode>,
	document.getElementById('root')
);
