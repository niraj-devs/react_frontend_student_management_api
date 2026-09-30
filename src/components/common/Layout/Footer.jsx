import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-main">

                <div className="footer-brand">
                    <div className="footer-logo">
                        N
                    </div>

                    <div>
                        <h3>Niraj-devs</h3>
                        <p>
                            Student Management REST API
                        </p>
                    </div>
                </div>

                <div className="footer-links">
                    <Link to="/">Dashboard</Link>
                    <Link to="/students">Students</Link>
                    <Link to="/departments">Departments</Link>
                </div>

            </div>

            <div className="footer-bottom">
                <span>
                    © 2026 Niraj-devs. Student Management System.
                </span>

                <span>
                    Built with React · Spring Boot · MySQL
                </span>
            </div>

        </footer>
    );
};

export default Footer;