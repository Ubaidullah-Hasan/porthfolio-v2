import { Outlet } from "react-router";
import Sidebar from "./Sidebar";

export default function DashboardShell({ onLogout }) {
  return (
    <div className="min-h-screen bg-charcoal">
      <Sidebar onLogout={onLogout} />
      <main className="ml-64 p-8">
        <Outlet />
      </main>
    </div>
  );
}
