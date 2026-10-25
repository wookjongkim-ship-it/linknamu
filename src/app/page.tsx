import LinkCard from "@/components/LinkCard";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-md px-4 pb-12 pt-16">
      {/* 와이어프레임에는 없지만 PRD의 다크모드 기능을 위해 우측 상단에 둡니다. */}
      <div className="fixed right-4 top-4">
        <ThemeToggle />
      </div>

      <ProfileHeader profile={profile} />

      <nav className="mt-8 flex flex-col gap-4">
        {links.map((link) => (
          <LinkCard key={link.id} link={link} />
        ))}
      </nav>
    </main>
  );
}
