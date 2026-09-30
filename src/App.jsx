import {
    BrowserRouter,
    Routes,
    Route,
    Navigate
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

import Layout from "./components/common/Layout/Layout";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
    return (
        <BrowserRouter>

            <Routes>

                {/* Common Layout */}
                <Route element={<Layout />}>

                    {/* Public Pages */}
                    <Route
                        path="/"
                        element={<Dashboard />}
                    />

                    <Route
                        path="/login"
                        element={<Login />}
                    />

                    <Route
                        path="/register"
                        element={<Register />}
                    />


                    {/* Protected Pages */}
                    <Route element={<ProtectedRoute />}>

                        <Route
                            path="/dashboard"
                            element={<Dashboard />}
                        />

                    </Route>


                    {/* Unknown URL */}
                    <Route
                        path="*"
                        element={<Navigate to="/" replace />}
                    />

                </Route>

            </Routes>

        </BrowserRouter>
    );
}

export default App;