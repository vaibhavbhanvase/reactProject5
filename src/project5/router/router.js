import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import RegistratonForm from "../components/RegistratonForm";
import HodHomePage from "../pages/HodHomePage";
import Home from "../pages/Home";
import StaffHome from "../pages/StaffHome";
import ProtectedRoute from "./ProtectedRoute";
import RootLayouts from "./rootLayouts/RootLayouts";


export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayouts />}>
            <Route index element={<Home />} />
            <Route path="login" element={<LoginForm />} />
            <Route path="register" element={<RegistratonForm />} />

            <Route path="dashboard/Hod" element={<ProtectedRoute allowedRoles={"Hod"}>
                <HodHomePage />
            </ProtectedRoute>} />

            <Route path="dashboard/Staff" element={<ProtectedRoute allowedRoles={"Staff"}>
                <StaffHome />
            </ProtectedRoute>} />
        </Route>
    )
)