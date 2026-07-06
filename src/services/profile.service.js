import { supabase } from "@/lib/supabase";

export async function getProfile() {
  const { data: profile, error } = await supabase
    .from("profiles")
    .select("*")
    .single();
  if (error) {
      console.error("Error fetching profile:", error);
      throw new Error("Error fetching profile:", error);
  }
  console.log("Fetched profile data:", profile);
  return profile;
}

/**
 * Update Portfolio Profile
 */
export async function updateProfile(updatedProfileData) {
  const { data, error } = await supabase
    .from("profiles")
    .update(updatedProfileData)
    .eq("id", updatedProfileData.id)
    .select()
    .single();

  if (error) {
    console.error("Error updating profile:", error);
    throw new Error("Error updating profile:", error);
  }
  return data;
}
