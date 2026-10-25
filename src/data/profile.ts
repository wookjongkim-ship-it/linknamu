export type Profile = {
  name: string;
  bio: string;
  image: string;
};

export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

// TODO: 아래는 화면 확인용 더미 값입니다. 실제 프로필과 링크로 교체하세요.
export const profile: Profile = {
  name: "nookworks",
  bio: "방구석개발공방:AI coder",
  image: "/profile.svg",
};

export const links: LinkItem[] = [
  { id: "github", title: "GitHub", url: "https://example.com/github" },
  { id: "instagram", title: "Instagram", url: "https://example.com/instagram" },
  { id: "youtube", title: "YouTube", url: "https://example.com/youtube" },
  { id: "blog", title: "블로그", url: "https://example.com/blog" },
  { id: "portfolio", title: "포트폴리오", url: "https://example.com/portfolio" },
];
