export default function AboutImage() {
  return (
    <div className="flex items-center justify-center">
      <div className="h-72 w-72 rounded-full bg-linear-to-r from-cyan-300 via-fuchsia-400 to-emerald-300 p-0.75 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
        <div className="h-full w-full overflow-hidden rounded-full bg-[#020617] p-2">
          <img
            src="https://ui-avatars.com/api/?name=Hasan&background=0f172a&color=38bdf8&size=512&bold=true"
            alt="Hasan"
            className="h-full w-full rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
