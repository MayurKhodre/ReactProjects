import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
	const accessToken = localStorage.getItem('authToken');
	return accessToken ? <Outlet /> : <Navigate to='/login' /> // use direct path/route here ('/login') to navigate
}

export default ProtectedRoute;

