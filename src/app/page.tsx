import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-[26rem] px-7 pb-20 pt-24 sm:px-8 sm:pt-28">
      {/* 와이어프레임에는 없지만 PRD의 다크모드 기능을 위해 우측 상단에 둡니다. */}
      <div className="fixed right-5 top-5 z-10">
        <ThemeToggle />
      </div>

      <ProfileHeader profile={profile} />

      <nav className="mt-12 flex flex-col gap-4">
        {links.map((link) => (
          <LinkCard key={link.id} link={link} />
        ))}
      </nav>
    </main>
  );
}
