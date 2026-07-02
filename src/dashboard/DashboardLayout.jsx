import { Outlet } from "react-router";
import { DashboardProvider, useDashboard } from "./context/DashboardContext";
import Sidebar from "./components/Sidebar";
import LoginForm from "./components/LoginForm";
import { useAuth } from "./hooks/useAuth";

function AuthGate() {
  const { user, loading } = useDashboard();
  const auth = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-charcoal text-white">
        <p className="text-gray-400">Loading...</p>
      </div>
    );
  }

  if (!user) {
    return (
      <LoginForm
        email={auth.email}
        setEmail={auth.setEmail}
        password={auth.password}
        setPassword={auth.setPassword}
        authError={auth.authError}
        authLoading={auth.authLoading}
        onSubmit={auth.handleLogin}
      />
    );
  }

  return (
    <div className="min-h-screen bg-charcoal">
      <Sidebar onLogout={auth.handleLogout} />
      <main className="ml-64 p-8">
        <Outlet />
      </main>
    </div>
  );
}

export default function DashboardLayout() {
  return (
    <DashboardProvider>
      <AuthGate />
    </DashboardProvider>
  );
}
