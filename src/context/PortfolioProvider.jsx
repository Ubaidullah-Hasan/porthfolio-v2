import { getProfile } from "@/services/profile.service";
import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const PortfolioContext = createContext(null);

export const PortfolioProvider = ({ children }) => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    async function fetchProfile() {
      try {
        setError(null);
        const data = await getProfile();
        if (!cancelled) {
          setProfileData(data);
        }
      } catch (err) {
        console.error("Error fetching profile:", err);
        if (!cancelled) {
          setError(err);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchProfile();

    return () => {
      cancelled = true;
    };
  }, []);

  const defaultValues = {
    profileData,
    setProfileData,
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

