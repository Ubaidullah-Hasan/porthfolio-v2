import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import FormModal from "../components/FormModal";

const fields = [
  { name: "role", label: "Role", type: "text", required: true },
  { name: "company", label: "Company", type: "text", required: true },
  { name: "duration", label: "Duration (e.g. 2022 - Present)", type: "text" },
  { name: "description", label: "Description", type: "textarea", required: true },
];

export default function ExperienceManager() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState({ open: false, item: null });

  const fetchItems = async () => {
    const { data } = await supabase.from("experience").select("*").order("id");
    setItems(data ?? []);
    setLoading(false);
  };

  useEffect(() => { fetchItems(); }, []);

  const handleSave = async (values) => {
    if (modal.item?.id) {
      await supabase.from("experience").update(values).eq("id", modal.item.id);
    } else {
      await supabase.from("experience").insert(values);
    }
    setModal({ open: false, item: null });
    fetchItems();
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this entry?")) return;
    await supabase.from("experience").delete().eq("id", id);
    fetchItems();
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">Experience</h2>
        <button
          onClick={() => setModal({ open: true, item: null })}
          className="rounded-lg bg-fuchsia-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-fuchsia-400"
        >
          + Add Experience
        </button>
      </div>

      {loading ? (
        <p className="text-gray-400">Loading...</p>
      ) : (
        <div className="space-y-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-sm"
            >
              <div>
                <p className="font-semibold text-white">{item.role}</p>
                <p className="text-sm text-gray-400">{item.company}</p>
                {item.duration && (
                  <p className="mt-1 text-xs text-gray-500">{item.duration}</p>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setModal({ open: true, item })}
                  className="rounded-lg bg-white/10 px-3 py-1.5 text-xs text-gray-300 transition hover:bg-white/20"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(item.id)}
                  className="rounded-lg bg-red-500/10 px-3 py-1.5 text-xs text-red-400 transition hover:bg-red-500/20"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          {items.length === 0 && <p className="text-gray-500">No experience entries yet.</p>}
        </div>
      )}

      {modal.open && (
        <FormModal
          title={modal.item ? "Edit Experience" : "Add Experience"}
          fields={fields}
          values={modal.item ?? {}}
          onSave={handleSave}
          onClose={() => setModal({ open: false, item: null })}
        />
      )}
    </div>
  );
}
