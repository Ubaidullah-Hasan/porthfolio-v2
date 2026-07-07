/* eslint-disable react-refresh/only-export-components */
import { getProfile, updateProfileService } from "@/services/profile.service";
import { createContext, useEffect, useState } from "react";

/**
 * @typedef {Object} PortfolioContextValue
 * @property {Object|null} profileData
 * @property {React.Dispatch<React.SetStateAction<Object|null>>} setProfileData
 * @property {boolean} loading
 * @property {React.Dispatch<React.SetStateAction<boolean>>} setLoading
 * @property {Error|null} error
 * @property {React.Dispatch<React.SetStateAction<Error|null>>} setError
 */

/** @type {import('react').Context<PortfolioContextValue|null>} */

export const PortfolioContext = createContext(null);

export const PortfolioProvider = ({ children }) => {
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updating, setUpdating] = useState(false);

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

  // ============================
  // Update Profile
  // ============================
  async function updateProfile(profileData) {
    try {
      setError(null);
      setUpdating(true);

      const updatedProfile = await updateProfileService(profileData);

      // UI instantly update হবে
      setProfileData(updatedProfile);

      return updatedProfile;
    } catch (err) {
      setError(err.message);
      throw err;
    } finally {
      setUpdating(false);
    }
  }

  const defaultValues = {
    profileData,
    loading,
    error,
    updateProfile,
    updating,
  };

  return (
    <PortfolioContext.Provider value={defaultValues}>
      {children}
    </PortfolioContext.Provider>
  );
};
