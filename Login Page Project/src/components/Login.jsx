import React from 'react'
import axios from 'axios';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import api from '../utils/Api';

function Login() {
	const navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");


	const logDetails = async (e) => {
		e.preventDefault();
		api.post('/users/login', { 'email': email, 'password': password }).then((res) => {
			const { accessToken, refreshToken, user } = res.data.data;
			// Store tokens and user details in localStorage
			localStorage.setItem('authToken', accessToken);
			localStorage.setItem('refreshToken', refreshToken);
			localStorage.setItem('userEmail', user.email);
			localStorage.setItem('userId', user._id);
			navigate('/home');
		}).catch((err) => {
			console.log('err: ', err);
			alert("Error while login, Check your credentials");

		})
	}

	// const handleInputValues = (e) => {
	// 	setEmail(e.target.value);
	// }

	return (
		<div className="login-form h-screen w-full flex items-center justify-center bg-gray-100">
			<div className="login-container w-[30%] bg-white p-4 rounded shadow-lg">
				<h1 className='text-center text-xl font-semibold'>Login</h1>
				<form onSubmit={logDetails}>
					<label htmlFor="email" className="block mb-2 text-gray-700">Email</label>
					<input
						type="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Email"
						autoComplete="email"
						className="w-full border border-gray-300 rounded p-2"
					/>
					<label htmlFor="password" className="block mb-2 text-gray-700">Password</label>
					<input
						type="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Password"
						autoComplete="current-password"	// attribute to auto fill the input (here password)
						className="w-full border border-gray-300 rounded p-2"
					/>
					<button type="submit" className="bg-blue-400 rounded p-[3px] mt-[10px] text-white w-full">Login</button>
				</form>
			</div>
		</div>
	)
}

export default Login;