import Image from "next/image";
import type { Profile } from "@/data/profile";

export default function ProfileHeader({ profile }: { profile: Profile }) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={profile.image}
        alt={`${profile.name} 프로필 사진`}
        width={144}
        height={144}
        priority
        unoptimized
        className="h-36 w-36 rounded-full border-2 border-neutral-900 object-cover dark:border-neutral-100"
      />
      <h1 className="mt-6 text-xl font-bold">{profile.name}</h1>
      <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400">
        {profile.bio}
      </p>
    </header>
  );
}
