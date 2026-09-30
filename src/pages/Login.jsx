import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "./Login.css";

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        setLoading(true);

        try {
            await login(formData);
            navigate("/dashboard");
        } catch (error) {
            console.error(error);

            setError(
                error.response?.data?.message ||
                error.message ||
                "Login failed. Check username and password."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="login-page">

            <div className="login-container">

                {/* LEFT SIDE */}
                <div className="login-info">

                    <div className="login-brand">
                        <span className="brand-mark">N</span>
                        <span>Niraj-devs</span>
                    </div>

                    <div className="login-message">
                        <span>STUDENT MANAGEMENT PLATFORM</span>

                        <h1>
                            Welcome
                            <br />
                            back.
                        </h1>

                        <p>
                            Access your student management dashboard,
                            departments and academic data securely.
                        </p>
                    </div>

                    <div className="login-tech">
                        <span>Spring Boot</span>
                        <span>React</span>
                        <span>MySQL</span>
                        <span>JWT</span>
                    </div>

                </div>


                {/* RIGHT SIDE */}
                <div className="login-box">

                    <div className="login-heading">
                        <span>ACCOUNT LOGIN</span>
                        <h2>Sign in</h2>
                        <p>
                            Enter your credentials to continue.
                        </p>
                    </div>

                    <form onSubmit={handleSubmit}>

                        <div className="form-group">
                            <label>Username</label>

                            <input
                                type="text"
                                name="username"
                                placeholder="Enter your username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>

                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {error && (
                            <div className="login-error">
                                {error}
                            </div>
                        )}

                        <button
                            type="submit"
                            className="login-submit"
                            disabled={loading}
                        >
                            {loading ? "Signing in..." : "Sign in →"}
                        </button>

                    </form>

                    <div className="register-link">
                        Don't have an account?
                        <Link to="/register">Create account</Link>
                    </div>

                </div>

            </div>

        </main>
    );
};

export default Login;