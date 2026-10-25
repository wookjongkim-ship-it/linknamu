import Image from "next/image";
import type { Profile } from "@/data/profile";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="rounded-full bg-white/50 p-1.5 shadow-glass ring-1 ring-white/70 backdrop-blur-md dark:bg-white/[0.06] dark:ring-white/10">
        <Image
          src={profile.image}
          alt={`${profile.name} 프로필 사진`}
          width={112}
          height={112}
          priority
          unoptimized
          className="h-24 w-24 rounded-full object-cover sm:h-28 sm:w-28"
        />
      </div>
      <h1 className="mt-6 text-[1.375rem] font-semibold tracking-tight">
        {profile.name}
      </h1>
      <p className="mt-1.5 text-[0.9375rem] text-muted">{profile.bio}</p>
    </header>
  );
}
