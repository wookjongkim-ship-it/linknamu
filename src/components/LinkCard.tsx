"use client";

import type { LinkItem } from "@/data/profile";

export default function LinkCard({ link }: { link: LinkItem }) {
  function handleClick() {
    // 새 탭으로 이동해도 요청이 끊기지 않도록 keepalive로 보냅니다.
    fetch("/api/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ linkId: link.id }),
      keepalive: true,
    }).catch(() => {});
  }

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="block w-full rounded-[1.25rem] border border-white/70 bg-white/45 px-6 py-[1.125rem] text-center text-[0.9375rem] font-medium shadow-glass backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-px hover:bg-white/60 hover:shadow-glass-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e9a07a]/60 active:translate-y-0 active:scale-[0.99] motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-white/10 dark:bg-white/[0.06] dark:hover:bg-white/[0.1]"
    >
      {link.title}
    </a>
  );
}
