"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "밝은 화면으로 전환" : "어두운 화면으로 전환"}
      className="rounded-full border border-neutral-200 bg-white p-2 text-lg shadow-sm transition hover:scale-105 dark:border-neutral-800 dark:bg-neutral-900"
    >
      {/* 첫 렌더에서는 테마를 모르므로 아이콘을 비워 깜빡임을 막습니다. */}
      <span className="block h-6 w-6 leading-6">
        {isDark === null ? "" : isDark ? "☀️" : "🌙"}
      </span>
    </button>
  );
}
