import { Routes, Route } from "react-router-dom";
import PublicPage from "./routes/PublicPage";

import Login from "./routes/Login";
import Layout from "./components/Layout";
import CreatePet from "./routes/CreatePet";
import { AuthProvider, RequireAuth } from "./context/auth-context";

function App() {
	return (
		<AuthProvider>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<PublicPage />} />
					<Route path="/login" element={<Login />} />

					<Route
						path="/pets/CreatePet"
						element={
							<RequireAuth>
								<CreatePet />
							</RequireAuth>
						}
					/>
				</Route>
			</Routes>
		</AuthProvider>
	);
}

export default App;
