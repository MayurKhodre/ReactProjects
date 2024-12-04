import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Home from './components/Home';
import ProtectedRoute from './utils/ProtectedRoute';

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/login" element={<Login />} />
					<Route element={<ProtectedRoute />}>
						<Route path="/home" element={<Home />} />
						<Route path="/" element={<Home />} />
					</Route>
				</Routes>
			</Router>
		</>
	);
}

export default App;
