import { AuthProvider, useAuth } from "./context/AuthContext";
import LoginForm from "./components/LoginForm";
import DashboardShell from "./components/DashboardShell";
import LoadingSpinner from "./components/LoadingSpinner";

function AuthGate() {
  const { user, loading, handleLogout } = useAuth();

  if (loading) return <LoadingSpinner />;
  if (!user) return <LoginForm />;

  return <DashboardShell onLogout={handleLogout} />;
}

export default function DashboardLayout() {
  return (
    <AuthProvider>
      <AuthGate />
    </AuthProvider>
  );
}
