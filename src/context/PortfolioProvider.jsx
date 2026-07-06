import { getProfile } from "@/services/profile.service";
import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const PortfolioContext = createContext(null);

export const PortfolioProvider = ({ children }) => {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getProfile();
      setProfile(data);
    } catch (error) {
      console.error("Error fetching profile:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const defaultValues = {
    profile,
    setProfile,
    loading,
    setLoading,
    error,
    setError,
  };

  return (
    <PortfolioContext.Provider value={defaultValues}>
      {children}
    </PortfolioContext.Provider>
  );
};

