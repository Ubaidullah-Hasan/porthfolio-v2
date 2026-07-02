import { useState, useEffect } from "react";

export default function FormModal({ title, fields, values = {}, onSave, onClose }) {
  const [formData, setFormData] = useState(values);

  useEffect(() => {
    setFormData(values);
  }, [values]);

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#0a0a0a] p-6 shadow-2xl"
      >
        <h3 className="mb-5 text-xl font-bold text-white">{title}</h3>

        <div className="max-h-[60vh] space-y-4 overflow-y-auto pr-1">
          {fields.map((field) => (
            <div key={field.name}>
              <label className="mb-1 block text-xs text-gray-500">
                {field.label}
                {field.required && <span className="ml-1 text-red-400">*</span>}
              </label>

              {field.type === "textarea" ? (
                <textarea
                  required={field.required}
                  value={formData[field.name] ?? ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  rows={3}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none focus:border-cyan-500/50"
                />
              ) : field.type === "select" ? (
                <select
                  required={field.required}
                  value={formData[field.name] ?? ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none focus:border-cyan-500/50"
                >
                  <option value="">Select...</option>
                  {field.options.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#0a0a0a]">
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type}
                  required={field.required}
                  value={formData[field.name] ?? ""}
                  onChange={(e) => handleChange(field.name, e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2.5 text-sm text-white outline-none focus:border-cyan-500/50"
                />
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg bg-white/10 px-4 py-2 text-sm text-gray-300 transition hover:bg-white/20"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-cyan-400"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
