import { motion } from "framer-motion";
import { useRef, useState } from "react";
import FloatingField from "./FloatingField";
import PdfUpload from "./PdfUpload";
import { MAX_FILE_SIZE } from "./contactUtils";

export default function ContactForm() {
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

    resetForm();
  };

  const resetForm = () => {
    setForm({
      name: "",
      email: "",
      message: "",
    });

    setFocused({
      name: false,
      email: false,
      message: false,
    });

    setFile(null);
    setFileError("");

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
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
        <FloatingField
          id="name"
          name="name"
          label="Your Name"
          value={form.name}
          onChange={handleChange}
          onFocus={() => handleFocus("name")}
          onBlur={() => handleBlur("name")}
          isFocused={focused.name}
          hasValue={form.name.length > 0}
          required
        />

        <FloatingField
          id="email"
          name="email"
          label="Email Address"
          type="email"
          value={form.email}
          onChange={handleChange}
          onFocus={() => handleFocus("email")}
          onBlur={() => handleBlur("email")}
          isFocused={focused.email}
          hasValue={form.email.length > 0}
          required
        />

        <FloatingField
          id="message"
          name="message"
          label="Message"
          component="textarea"
          rows={5}
          value={form.message}
          onChange={handleChange}
          onFocus={() => handleFocus("message")}
          onBlur={() => handleBlur("message")}
          isFocused={focused.message}
          hasValue={form.message.length > 0}
          required
        />

        <PdfUpload
          file={file}
          fileError={fileError}
          onFileChange={handleFileChange}
          onRemoveFile={removeFile}
        />

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
  );
}