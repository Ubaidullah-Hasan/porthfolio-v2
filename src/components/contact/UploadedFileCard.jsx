import { motion } from "framer-motion";
import { formatFileSize } from "./contactUtils";

export default function UploadedFileCard({ file, onRemove }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-3 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-r from-cyan-300/10 to-fuchsia-400/10 p-4"
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
            {formatFileSize(file.size)} &bull; Ready to upload
          </p>
        </div>

        <button
          type="button"
          onClick={onRemove}
          className="rounded-full p-2 text-gray-400 transition hover:bg-white/10 hover:text-red-300"
          aria-label="Remove uploaded file"
        >
          &#10005;
        </button>
      </div>
    </motion.div>
  );
}
