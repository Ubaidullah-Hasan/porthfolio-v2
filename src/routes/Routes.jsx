import { createBrowserRouter } from "react-router";
import App from "../App";
import NotFound from "../components/NotFound";
import DashboardLayout from "../dashboard/DashboardLayout";
import DashboardHome from "../dashboard/pages/DashboardHome";
import ProjectsManager from "../dashboard/pages/ProjectsManager";
import ExperienceManager from "../dashboard/pages/ExperienceManager";
import SkillsManager from "../dashboard/pages/SkillsManager";
import ContactManager from "../dashboard/pages/ContactManager";
import ProfileSettings from "../dashboard/pages/ProfileSettings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      { index: true, element: <DashboardHome /> },
      { path: "projects", element: <ProjectsManager /> },
      { path: "experience", element: <ExperienceManager /> },
      { path: "skills", element: <SkillsManager /> },
      { path: "contact", element: <ContactManager /> },
      { path: "profile", element: <ProfileSettings /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
