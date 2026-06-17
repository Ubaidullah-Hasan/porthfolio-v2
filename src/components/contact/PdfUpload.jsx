import { motion } from "framer-motion";
import UploadedFileCard from "./UploadedFileCard";

export default function PdfUpload({
  file,
  fileError,
  onFileChange,
  onRemoveFile,
}) {
  return (
    <div>
      <label className="mb-3 block text-sm font-medium text-gray-200">
        Attach PDF
      </label>

      <input
        id="pdf-upload"
        type="file"
        accept="application/pdf,.pdf"
        onChange={onFileChange}
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

      {file && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <UploadedFileCard file={file} onRemove={onRemoveFile} />
        </motion.div>
      )}

      {fileError && (
        <p className="mt-3 rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {fileError}
        </p>
      )}
    </div>
  );
}