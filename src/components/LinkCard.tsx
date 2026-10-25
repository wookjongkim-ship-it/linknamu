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
      className="block w-full rounded-2xl border-2 border-neutral-900 bg-white px-5 py-5 text-center font-medium transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-100 dark:bg-neutral-900"
    >
      {link.title}
    </a>
  );
}
