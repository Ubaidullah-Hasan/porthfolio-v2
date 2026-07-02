export default function LoadingSpinner() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-charcoal text-white">
      <div className="flex flex-col items-center gap-3">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-cyan-400" />
        <p className="text-sm text-gray-400">Loading...</p>
      </div>
    </div>
  );
}
