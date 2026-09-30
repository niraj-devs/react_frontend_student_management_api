import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Navbar.css";

const Navbar = () => {
    const { isAuthenticated, logout } = useAuth();

    const handleLogout = () => {
        logout();
    };

    return (
        <nav className="navbar">
            {/* LEFT */}
            <div className="navbar-brand">
                <Link to="/">
                    <span className="brand-mark">N</span>
                    <span>Niraj-devs</span>
                </Link>
            </div>

            {/* CENTER */}
            <div className="navbar-title">
                Student-Management-Rest API
            </div>

            {/* RIGHT */}
            <div className="navbar-actions">
                {isAuthenticated ? (
                    <>
                        <Link to="/dashboard" className="nav-link">
                            Dashboard
                        </Link>

                        <button
                            className="nav-btn logout-btn"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <Link to="/login" className="nav-btn login-btn">
                        Login
                    </Link>
                )}
            </div>
        </nav>
    );
};

export default Navbar;