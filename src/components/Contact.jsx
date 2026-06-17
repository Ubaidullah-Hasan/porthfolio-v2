import { motion } from "framer-motion";
import { useRef, useState } from "react";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const [focused, setFocused] = useState({
    name: false,
    email: false,
    message: false,
  });

  const fileInputRef = useRef(null);

  const isFloating = (field) => {
    return focused[field] || form[field].trim().length > 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (field) => {
    setFocused((prev) => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field) => {
    setFocused((prev) => ({ ...prev, [field]: false }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    setFileError("");

    if (!selectedFile) return;

    const isPdf =
      selectedFile.type === "application/pdf" ||
      selectedFile.name.toLowerCase().endsWith(".pdf");

    if (!isPdf) {
      setFileError("Only PDF files are allowed.");
      e.target.value = "";
      return;
    }

    if (selectedFile.size > MAX_FILE_SIZE) {
      setFileError("PDF file size should be less than 5MB.");
      e.target.value = "";
      return;
    }

    setFile(selectedFile);
  };

  const removeFile = () => {
    setFile(null);
    setFileError("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return `${(bytes / Math.pow(k, i)).toFixed(1)} ${sizes[i]}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.message.trim()
    ) {
      return;
    }

    const payload = {
      ...form,
      file: file
        ? {
            name: file.name,
            size: file.size,
            type: file.type,
          }
        : null,
    };

    console.log("Form submitted →", payload);
    alert("Thanks! I will get back to you shortly.");

    setForm({ name: "", email: "", message: "" });
    setFocused({ name: false, email: false, message: false });
    setFile(null);
    setFileError("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#050816] py-24">
      {/* Section background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.20),transparent_35%),radial-gradient(circle_at_top_right,rgba(168,85,247,0.20),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.04),transparent)]" />

        <div className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -right-24 bottom-16 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8 shadow-2xl backdrop-blur-xl"
        >
          <div className="mb-6 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200">
            Contact
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Let’s build something{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-fuchsia-400 bg-clip-text text-transparent">
              brilliant.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-300">
            Have a project, idea, or collaboration in mind? Send me a message
            and I’ll get back to you as soon as possible.
          </p>

          <div className="mt-10 space-y-4">
            {[
              {
                label: "Email",
                value: "hello@example.com",
                icon: "✉",
                gradient: "from-cyan-400/20 to-cyan-300/5",
              },
              {
                label: "Phone",
                value: "+880 1XXX XXXXXX",
                icon: "☎",
                gradient: "from-fuchsia-400/20 to-fuchsia-300/5",
              },
              {
                label: "Location",
                value: "Available worldwide",
                icon: "⌖",
                gradient: "from-emerald-400/20 to-emerald-300/5",
              },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex items-center gap-4 rounded-2xl border border-white/10 bg-gradient-to-r ${item.gradient} p-4`}
              >
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-xl text-white">
                  {item.icon}
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-400">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    {item.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-6 shadow-2xl backdrop-blur-xl sm:p-8"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white">Send a message</h3>
            <p className="mt-2 text-sm text-gray-400">
              Fill the form and attach a PDF if you need to share a document.
            </p>
          </div>

          <div className="space-y-5">
            {/* Name */}
            <div className="relative">
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                onFocus={() => handleFocus("name")}
                onBlur={() => handleBlur("name")}
                required
                placeholder=" "
                className="peer h-14 w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 pt-6 text-sm text-white outline-none transition placeholder:text-transparent focus:border-cyan-300/70 focus:bg-white/[0.07] focus:ring-4 focus:ring-cyan-300/10"
              />

              <label
                htmlFor="name"
                className={`pointer-events-none absolute left-4 text-sm transition-all ${
                  isFloating("name")
                    ? "top-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300"
                    : "top-1/2 -translate-y-1/2 text-gray-400"
                }`}
              >
                Your Name
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                onFocus={() => handleFocus("email")}
                onBlur={() => handleBlur("email")}
                required
                placeholder=" "
                className="peer h-14 w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 pt-6 text-sm text-white outline-none transition placeholder:text-transparent focus:border-cyan-300/70 focus:bg-white/[0.07] focus:ring-4 focus:ring-cyan-300/10"
              />

              <label
                htmlFor="email"
                className={`pointer-events-none absolute left-4 text-sm transition-all ${
                  isFloating("email")
                    ? "top-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300"
                    : "top-1/2 -translate-y-1/2 text-gray-400"
                }`}
              >
                Email Address
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                onFocus={() => handleFocus("message")}
                onBlur={() => handleBlur("message")}
                required
                placeholder=" "
                className="peer min-h-[160px] w-full resize-none rounded-2xl border border-white/10 bg-white/[0.05] px-4 pt-6 text-sm text-white outline-none transition placeholder:text-transparent focus:border-cyan-300/70 focus:bg-white/[0.07] focus:ring-4 focus:ring-cyan-300/10"
              />

              <label
                htmlFor="message"
                className={`pointer-events-none absolute left-4 text-sm transition-all ${
                  isFloating("message")
                    ? "top-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300"
                    : "top-4 text-gray-400"
                }`}
              >
                Message
              </label>
            </div>

            {/* File upload */}
            <div>
              <label
                htmlFor="pdf-upload"
                className="mb-3 block text-sm font-medium text-gray-200"
              >
                Attach PDF
              </label>

              <input
                ref={fileInputRef}
                id="pdf-upload"
                name="pdf"
                type="file"
                accept="application/pdf,.pdf"
                onChange={handleFileChange}
                className="hidden"
              />

              <label
                htmlFor="pdf-upload"
                className="group flex cursor-pointer items-center justify-between rounded-2xl border border-dashed border-cyan-300/40 bg-white/[0.04] p-4 transition hover:border-cyan-300 hover:bg-white/[0.07]"
              >
                <span className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-cyan-300/10 text-cyan-300">
                    PDF
                  </span>

                  <span>
                    <span className="block text-sm font-semibold text-white">
                      Upload document
                    </span>
                    <span className="block text-xs text-gray-400">
                      PDF only • Max 5MB
                    </span>
                  </span>
                </span>

                <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-200">
                  Choose File
                </span>
              </label>
            </div>

            {/* Uploaded file preview */}
            {file && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-300/10 to-fuchsia-400/10 p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-red-500/15 text-sm font-bold text-red-300">
                    PDF
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold text-white">
                      {file.name}
                    </p>
                    <p className="text-xs text-gray-400">
                      {formatFileSize(file.size)} • Ready to upload
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={removeFile}
                    className="rounded-full p-2 text-gray-400 transition hover:bg-white/10 hover:text-red-300"
                    aria-label="Remove uploaded file"
                  >
                    ✕
                  </button>
                </div>
              </motion.div>
            )}

            {fileError && (
              <p className="rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                {fileError}
              </p>
            )}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full rounded-2xl bg-gradient-to-r from-cyan-300 to-fuchsia-400 px-6 py-4 text-sm font-bold uppercase tracking-[0.2em] text-black shadow-lg shadow-cyan-500/20 transition hover:shadow-cyan-500/30"
            >
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}