export default function FloatingField({
  id,
  name,
  label,
  type = "text",
  value,
  onChange,
  onFocus,
  onBlur,
  isFocused,
  hasValue,
  component = "input",
  rows,
  required = false,
}) {
  const floating = isFocused || hasValue;

  const commonClasses =
    "peer h-14 w-full rounded-2xl border border-white/10 bg-white/[0.05] px-4 pt-6 text-sm text-white outline-none transition placeholder:text-transparent focus:border-cyan-300/70 focus:bg-white/[0.07] focus:ring-4 focus:ring-cyan-300/10";

  const labelClasses = `pointer-events-none absolute left-4 text-sm transition-all ${
    floating
      ? "top-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-cyan-300"
      : "top-1/2 -translate-y-1/2 text-gray-400"
  }`;

  if (component === "textarea") {
    return (
      <div className="relative">
        <textarea
          id={id}
          name={name}
          rows={rows}
          value={value}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          required={required}
          placeholder=" "
          className="peer min-h-[160px] w-full resize-none rounded-2xl border border-white/10 bg-white/[0.05] px-4 pt-6 text-sm text-white outline-none transition placeholder:text-transparent focus:border-cyan-300/70 focus:bg-white/[0.07] focus:ring-4 focus:ring-cyan-300/10"
        />

        <label htmlFor={id} className={labelClasses}>
          {label}
        </label>
      </div>
    );
  }

  return (
    <div className="relative">
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        required={required}
        placeholder=" "
        className={commonClasses}
      />

      <label htmlFor={id} className={labelClasses}>
        {label}
      </label>
    </div>
  );
}