# 링크나무

내 모든 링크를 한 페이지에 모아두고, 하나의 URL로 공유하는 서비스입니다.

## 시작하기

```bash
npm install
cp .env.example .env.local   # MongoDB Atlas 연결 정보 입력
npm run dev
```

http://localhost:3000 에서 확인할 수 있습니다.

## 수정하기

- 프로필·링크 목록: `src/data/profile.ts`
- 프로필 사진: `public/` 에 이미지를 넣고 `profile.image` 경로 변경

## 클릭 수 집계

링크를 누르면 `/api/clicks` 로 요청이 가고, MongoDB `clicks` 컬렉션에 링크별 횟수가 저장됩니다.
`MONGODB_URI` 가 없으면 페이지는 정상 동작하고 클릭 수는 저장되지 않습니다.
