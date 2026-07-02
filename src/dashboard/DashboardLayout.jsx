import { DashboardProvider, useDashboard } from "./context/DashboardContext";
import LoginForm from "./components/LoginForm";
import DashboardShell from "./components/DashboardShell";
import LoadingSpinner from "./components/LoadingSpinner";
import { useAuth } from "./hooks/useAuth";

function AuthGate() {
  const { user, loading } = useDashboard();
  const auth = useAuth();

  if (loading) return <LoadingSpinner />;
  if (!user) return <LoginForm {...auth} onSubmit={auth.handleLogin} />;

  return <DashboardShell onLogout={auth.handleLogout} />;
}

export default function DashboardLayout() {
  return (
    <DashboardProvider>
      <AuthGate />
    </DashboardProvider>
  );
}
