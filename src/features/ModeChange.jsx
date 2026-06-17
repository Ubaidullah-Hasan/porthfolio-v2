import { useEffect, useState } from "react";

export default function ModeChange() {
  // ১. ডার্ক মোডের স্টেট তৈরি (ডিফল্ট ফলস থাকবে)
  const [darkMode, setDarkMode] = useState(false);

  // ২. স্টেট চেঞ্জ হলে <html> ট্যাগে 'dark' ক্লাস যোগ বা বিয়োগ হবে
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-6 py-2 rounded-full font-semibold transition-all cursor-pointer bg-gray-950 dark:bg-white text-white hover:bg-opacity-90 active:scale-95"
      >
        {darkMode ? "dark 🌙" : "light ☀️"}
      </button>
    </>
  );
}
