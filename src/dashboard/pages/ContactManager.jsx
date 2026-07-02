import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import FormModal from "../components/FormModal";

const fields = [
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone", type: "text" },
  { name: "location", label: "Location", type: "text" },
  { name: "github", label: "GitHub URL", type: "url" },
  { name: "linkedin", label: "LinkedIn URL", type: "url" },
  { name: "twitter", label: "Twitter/X URL", type: "url" },
];

export default function ContactManager() {
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    async function fetchContact() {
      const { data } = await supabase
        .from("contact_info")
        .select("*")
        .limit(1)
        .single();
      setItem(data);
      setLoading(false);
    }
    fetchContact();
  }, []);

  const handleSave = async (values) => {
    if (item?.id) {
      await supabase.from("contact_info").update(values).eq("id", item.id);
    } else {
      const { data } = await supabase.from("contact_info").insert(values).select().single();
      setItem(data);
    }
    setItem((prev) => ({ ...prev, ...values }));
    setModal(false);
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">Contact Info</h2>
        <button
          onClick={() => setModal(true)}
          className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-cyan-400"
        >
          {item ? "Edit" : "Add Info"}
        </button>
      </div>

      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : !item ? (
        <p className="text-gray-500">No contact info yet. Add one to get started.</p>
      ) : (
        <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          {fields.map((field) => (
            <div key={field.name} className="mb-3">
              <p className="text-xs text-gray-500">{field.label}</p>
              <p className="text-white">{item[field.name] || "—"}</p>
            </div>
          ))}
        </div>
      )}

      {modal && (
        <FormModal
          title="Contact Information"
          fields={fields}
          values={item ?? {}}
          onSave={handleSave}
          onClose={() => setModal(false)}
        />
      )}
    </div>
  );
}
