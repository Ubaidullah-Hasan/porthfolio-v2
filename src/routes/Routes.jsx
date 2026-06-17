import {
  createBrowserRouter
} from "react-router";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        // errorElement: <NotFoundPage />,
        children: [
            // {
            //     path: "/",
            //     element: <Home />,
            // },
            // {
            //     path: "services/:serviceId",
            //     element: <ServiceDetailsPage />,
            // },
            // {
            //     path: "reviews",
            //     element: <Review />,
            // },
            // {
            //     path: "booking",
            //     element: <ProtectedRoute role="user">
            //         <Booking />
            //     </ProtectedRoute>,
            // },
        ]
    },
    // {
    //     path: "/dashboard",
    //     element: <DashboardLayout />,
    //     children: [

            // for admin
            
            // {
            //     path: "admin/userManagement",
            //     element: <ProtectedRoute role={"admin"}>
            //         <UserManagement />
            //     </ProtectedRoute>
            // },
            // {
            //     path: "admin/userBooking",
            //     element: <ProtectedRoute role="admin">
            //         <UserBookings />
            //     </ProtectedRoute >
            // },
            // for user
            
            // {
            //     path: "user/profile",
            //     element: <ProtectedRoute role={"user"}>
            //         <UserProfile />,
            //     </ProtectedRoute>
            // },
            // {
            //     path: "user/serviceManagement",
            //     element: <ServiceManagement />,
            // },

    //     ]
    // },
    // {
    //     path: "/signin",
    //     element: <SignIn />
    // },
    // {
    //     path: "/signup",
    //     element: <SignUp />
    // }
]);

export default router;