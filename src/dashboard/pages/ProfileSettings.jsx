import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import FormModal from "../components/FormModal";

const fields = [
  { name: "name", label: "Full Name", type: "text", required: true },
  { name: "title", label: "Title (e.g. Full Stack Developer)", type: "text", required: true },
  { name: "bio", label: "Bio", type: "textarea", required: true },
  { name: "avatar_url", label: "Avatar URL", type: "url" },
];

export default function ProfileSettings() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    async function fetchProfile() {
      const { data } = await supabase
        .from("profile")
        .select("*")
        .limit(1)
        .single();
      setItem(data);
      setLoading(false);
    }
    fetchProfile();
  }, []);

  const handleSave = async (values) => {
    setSaving(true);
    if (item?.id) {
      await supabase.from("profile").update(values).eq("id", item.id);
      setItem((prev) => ({ ...prev, ...values }));
    } else {
      const { data } = await supabase.from("profile").insert(values).select().single();
      setItem(data);
    }
    setSaving(false);
    setModal(false);
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">Profile Settings</h2>
        <button
          onClick={() => setModal(true)}
          className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-400"
        >
          {item ? "Edit Profile" : "Create Profile"}
        </button>
      </div>

      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : !item ? (
        <div className="rounded-xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
          <p className="text-gray-400">No profile yet. Click "Create Profile" to add one.</p>
        </div>
      ) : (
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          {item.avatar_url && (
            <img
              src={item.avatar_url}
              alt={item.name}
              className="mb-4 h-20 w-20 rounded-full border-2 border-white/10 object-cover"
            />
          )}
          <p className="text-xs text-gray-500">Name</p>
          <p className="mb-3 text-lg font-semibold text-white">{item.name}</p>

          <p className="text-xs text-gray-500">Title</p>
          <p className="mb-3 text-sm text-gray-300">{item.title}</p>

          <p className="text-xs text-gray-500">Bio</p>
          <p className="text-sm leading-relaxed text-gray-300">{item.bio}</p>
        </div>
      )}

      {modal && (
        <FormModal
          title="Profile Settings"
          fields={fields}
          values={item ?? {}}
          onSave={handleSave}
          onClose={() => setModal(false)}
          saving={saving}
        />
      )}
    </div>
  );
}
