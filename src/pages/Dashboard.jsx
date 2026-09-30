import { Link } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
    return (
        <main className="dashboard">

            {/* HERO */}
            <section className="dashboard-hero">
                <div className="hero-content">
                    <span className="hero-badge">
                        College Management Platform
                    </span>

                    <h1>
                        Student Management,
                        <br />
                        <span>simplified.</span>
                    </h1>

                    <p>
                        A modern REST-based platform for managing students,
                        departments and academic information efficiently.
                    </p>

                    <div className="hero-actions">
                        <Link to="/students" className="primary-action">
                            Explore Students
                        </Link>

                        <Link to="/departments" className="secondary-action">
                            View Departments
                        </Link>
                    </div>
                </div>

                <div className="hero-card">
                    <div className="hero-card-top">
                        <span>REST API</span>
                        <span className="status-dot"></span>
                    </div>

                    <div className="api-icon">
                        {"</>"}
                    </div>

                    <h3>Student Management API</h3>

                    <p>
                        Spring Boot · MySQL · JWT · React
                    </p>

                    <div className="api-line"></div>

                    <div className="api-info">
                        <span>API Status</span>
                        <strong>Operational</strong>
                    </div>
                </div>
            </section>


            {/* FEATURES */}
            <section className="feature-section">

                <div className="section-heading">
                    <span>PLATFORM</span>
                    <h2>Everything you need to manage academics.</h2>
                </div>

                <div className="feature-grid">

                    <div className="feature-card">
                        <div className="feature-number">01</div>
                        <h3>Students</h3>
                        <p>
                            Create, update, view and manage student records
                            through a secure REST API.
                        </p>
                        <Link to="/students">Manage Students →</Link>
                    </div>

                    <div className="feature-card">
                        <div className="feature-number">02</div>
                        <h3>Departments</h3>
                        <p>
                            Organize students using structured college
                            departments and academic information.
                        </p>
                        <Link to="/departments">View Departments →</Link>
                    </div>

                    <div className="feature-card">
                        <div className="feature-number">03</div>
                        <h3>Secure API</h3>
                        <p>
                            JWT authentication and role-based access control
                            protect your application endpoints.
                        </p>
                        <Link to="/login">Access Platform →</Link>
                    </div>

                </div>

            </section>


            {/* COLLEGE TEMPLATES */}
            <section className="college-section">

                <div className="section-heading">
                    <span>ACADEMICS</span>
                    <h2>College templates</h2>
                    <p>
                        A foundation for organizing different academic
                        structures inside the platform.
                    </p>
                </div>

                <div className="college-grid">

                    <div className="college-card">
                        <div className="college-icon">CS</div>

                        <div>
                            <h3>Computer Science</h3>
                            <p>Programming · Algorithms · Software Engineering</p>
                        </div>

                        <span>→</span>
                    </div>

                    <div className="college-card">
                        <div className="college-icon">EC</div>

                        <div>
                            <h3>Electronics</h3>
                            <p>Circuits · Embedded Systems · Communication</p>
                        </div>

                        <span>→</span>
                    </div>

                    <div className="college-card">
                        <div className="college-icon">ME</div>

                        <div>
                            <h3>Mechanical</h3>
                            <p>Design · Manufacturing · Thermodynamics</p>
                        </div>

                        <span>→</span>
                    </div>

                    <div className="college-card">
                        <div className="college-icon">BA</div>

                        <div>
                            <h3>Business Administration</h3>
                            <p>Finance · Marketing · Management</p>
                        </div>

                        <span>→</span>
                    </div>

                </div>

            </section>


            {/* CTA */}
            <section className="dashboard-cta">
                <div>
                    <span>READY TO START?</span>
                    <h2>Manage your college data from one place.</h2>
                </div>

                <Link to="/login">
                    Get Started →
                </Link>
            </section>

        </main>
    );
};

export default Dashboard;