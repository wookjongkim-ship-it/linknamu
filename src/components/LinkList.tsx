"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";

export default function LinkList({ links }: { links: LinkItem[] }) {
  // 데이터를 받기 전에는 모든 링크가 0으로 보입니다.
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    let cancelled = false;
    fetch("/api/clicks", { cache: "no-store" })
      .then((res) => (res.ok ? res.json() : {}))
      .then((data: Record<string, number>) => {
        if (!cancelled) setCounts(data);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  function handleClick(linkId: string) {
    // 서버 응답을 기다리지 않고 화면의 숫자를 바로 올립니다.
    setCounts((prev) => ({ ...prev, [linkId]: (prev[linkId] ?? 0) + 1 }));
  }

  return (
    <nav className="mt-12 flex flex-col gap-4">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          link={link}
          count={counts[link.id] ?? 0}
          onClick={() => handleClick(link.id)}
        />
      ))}
    </nav>
  );
}
