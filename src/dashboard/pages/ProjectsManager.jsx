import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import FormModal from "../components/FormModal";

const fields = [
  { name: "title", label: "Project Title", type: "text", required: true },
  { name: "description", label: "Description", type: "textarea", required: true },
  { name: "tech", label: "Technologies (comma-separated)", type: "text", required: true },
  { name: "link", label: "Live Link", type: "url" },
  { name: "image", label: "Image URL", type: "url" },
];

export default function ProjectsManager() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState({ open: false, item: null });

  const fetchItems = async () => {
    const { data } = await supabase.from("projects").select("*").order("id");
    setItems(data ?? []);
    setLoading(false);
  };

  useEffect(() => { fetchItems(); }, []);

  const handleSave = async (values) => {
    const payload = { ...values, tech: values.tech.split(",").map((t) => t.trim()) };
    if (modal.item?.id) {
      await supabase.from("projects").update(payload).eq("id", modal.item.id);
    } else {
      await supabase.from("projects").insert(payload);
    }
    setModal({ open: false, item: null });
    fetchItems();
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this project?")) return;
    await supabase.from("projects").delete().eq("id", id);
    fetchItems();
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">Projects</h2>
        <button
          onClick={() => setModal({ open: true, item: null })}
          className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-cyan-400"
        >
          + Add Project
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
                <p className="font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-xs text-gray-400">
                  {Array.isArray(item.tech) ? item.tech.join(", ") : item.tech}
                </p>
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
          {items.length === 0 && <p className="text-gray-500">No projects yet.</p>}
        </div>
      )}

      {modal.open && (
        <FormModal
          title={modal.item ? "Edit Project" : "Add Project"}
          fields={fields}
          values={modal.item ? { ...modal.item, tech: Array.isArray(modal.item.tech) ? modal.item.tech.join(", ") : "" } : {}}
          onSave={handleSave}
          onClose={() => setModal({ open: false, item: null })}
        />
      )}
    </div>
  );
}
