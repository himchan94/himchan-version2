# 마크업 블로그 프로젝트

이 프로젝트는 Next.js 기반의 개인 블로그 웹사이트입니다. MDX를 사용하여 블로그 글을 작성하고 관리합니다.

## 시작하기

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
# 또는
bun dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)를 열어 결과를 확인할 수 있습니다.

## 프로젝트 구조

```
src/
├── app/                 # Next.js 앱 라우터
│   ├── about/           # 소개 페이지
│   ├── blog/            # 블로그 목록 페이지
│   ├── posts/           # 게시물 관련 페이지
│   ├── globals.css      # 전역 스타일
│   ├── layout.tsx       # 레이아웃 컴포넌트
│   └── page.tsx         # 메인 페이지
├── components/          # 재사용 가능한 컴포넌트
├── content/             # MDX 콘텐츠
│   ├── posts/           # 블로그 게시물
│   └── about.mdx        # 소개 페이지 콘텐츠
├── consts/              # 상수 정의
├── lib/                 # 유틸리티 함수
└── types/               # TypeScript 타입 정의
```

## 기술 스택

- [Next.js](https://nextjs.org) - React 프레임워크
- [TypeScript](https://www.typescriptlang.org) - 타입 안전성
- [Tailwind CSS](https://tailwindcss.com) - 스타일링
- [MDX](https://mdxjs.com) - 마크다운 + JSX로 콘텐츠 작성
- [React 19](https://react.dev) - 최신 React 버전

## 배포

이 프로젝트는 GitHub Actions를 통해 자동으로 배포됩니다. 메인 브랜치에 푸시하면 다음과 같은 워크플로우가 실행됩니다:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main # 메인 브랜치에 푸시될 때마다 실행됩니다.

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: "20"
          cache: "npm"

      - name: Install dependencies
        run: npm ci

      - name: Build and Export
        run: npm run build
        env:
          NEXT_PUBLIC_BASE_PATH: /himchan-version2 # GitHub 레포지토리 이름 설정

      - name: Configure output directory
        run: |
          touch out/.nojekyll  # Jekyll 처리 방지

      - name: Deploy to GitHub Pages
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          branch: gh-pages
          folder: out
          clean: true
```

## 개발 범위

- 블로그 게시물 작성 및 렌더링
- 코드 하이라이팅
- 마크다운 표 지원 (GFM)
- 반응형 디자인

## 배포 블로그 주소

devhimchan.com

## 라이선스

MIT License
