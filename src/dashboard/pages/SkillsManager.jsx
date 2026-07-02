import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import FormModal from "../components/FormModal";

const fields = [
  { name: "name", label: "Skill Name", type: "text", required: true },
  {
    name: "category",
    label: "Category",
    type: "select",
    options: ["frontend", "backend", "tools"],
    required: true,
  },
  { name: "level", label: "Level (e.g. 90)", type: "number" },
];

export default function SkillsManager() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState({ open: false, item: null });

  const fetchItems = async () => {
    const { data } = await supabase.from("skills").select("*").order("category");
    setItems(data ?? []);
    setLoading(false);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleSave = async (values) => {
    if (modal.item?.id) {
      await supabase.from("skills").update(values).eq("id", modal.item.id);
    } else {
      await supabase.from("skills").insert(values);
    }
    setModal({ open: false, item: null });
    fetchItems();
  };

  const handleDelete = async (id) => {
    if (!confirm("Delete this skill?")) return;
    await supabase.from("skills").delete().eq("id", id);
    fetchItems();
  };

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-bold text-white">Skills</h2>
        <button
          onClick={() => setModal({ open: true, item: null })}
          className="rounded-lg bg-emerald-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-emerald-400"
        >
          + Add Skill
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
                <p className="font-semibold text-white">{item.name}</p>
                <p className="text-sm text-gray-400">{item.category}</p>
                {item.level != null && (
                  <div className="mt-1.5 h-1.5 w-24 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-emerald-400"
                      style={{ width: `${item.level}%` }}
                    />
                  </div>
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
          {items.length === 0 && (
            <p className="text-gray-500">No skills yet.</p>
          )}
        </div>
      )}

      {modal.open && (
        <FormModal
          title={modal.item ? "Edit Skill" : "Add Skill"}
          fields={fields}
          values={modal.item ?? {}}
          onSave={handleSave}
          onClose={() => setModal({ open: false, item: null })}
        />
      )}
    </div>
  );
}
