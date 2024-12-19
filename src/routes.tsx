import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./pages/app/dashboard";
import { SignIn } from "./pages/auth/sign-in";
import { AppLayout } from "./layout/appLayout";
import { AuthLayout } from "./layout/authLayout";

export const router = createBrowserRouter([
    {
        path: '/', 
        element: <AppLayout/>,
        children: [{ path: '/', element: <Dashboard /> }]
    },

    {
        path: '/', 
        element: <AuthLayout/>,
        children: [{ path: '/sign-in', element: <SignIn /> }]
    },
    
])