import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
	const navigate = useNavigate();

	const logout = () => {		
		localStorage.removeItem("authToken");
		localStorage.removeItem("refreshToken");
		localStorage.removeItem("userEmail");
		localStorage.removeItem("userId");
		navigate('/login');
	}

	return (
		<div className='w-full bg-blue-600 shadow-gray-400 shadow-sm absolute top-0'>
			<ul className='flex justify-end'>
				<li className='text-white h-full hover:bg-blue-800 p-2 cursor-pointer' title='Logout' onClick={logout}>
					<FontAwesomeIcon icon={faRightFromBracket} size="lg" />
				</li>
			</ul>
		</div>
	)
}
