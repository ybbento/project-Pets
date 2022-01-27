import { Link, Outlet } from "react-router-dom";
import AuthStatus from "./AuthStatus";
import "./Layout.css";

function Layout() {
	return (
		<div>
			<header>
				<ul className="menu">
					<li>
						<Link to="/" className="menu-link">
							Home Page
						</Link>
					</li>
					<li>
						<Link to="/pets/CreatePet" className="menu-link">
							{" "}
							Create a Pet
						</Link>
					</li>
				</ul>

				<AuthStatus />
			</header>

			<Outlet />
		</div>
	);
}

export default Layout;
