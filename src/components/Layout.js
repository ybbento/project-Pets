import { Link, Outlet } from "react-router-dom";
import AuthStatus from "./AuthStatus";

function Layout() {
	return (
		<div>
			<AuthStatus />
			<ul>
				<li>
					<Link to="/">Home Page</Link>
				</li>
				<li>
					<Link to="/pets/CreatePet"> Create a Pet</Link>
				</li>
			</ul>

			<Outlet />
		</div>
	);
}

export default Layout;
