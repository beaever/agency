# `@agency/icons`

모노레포 내 아이콘 라이브러리 패키지. SVG 아이콘을 React 컴포넌트로 변환하여 제공한다.

---

## 디렉토리 구조

```
packages/icons/
├── .eslintrc.cjs            # ESLint 설정 (TS + React Hooks 규칙)
├── .gitignore
├── custom.d.ts              # *.svg 모듈 타입 선언
├── styled.d.ts              # @emotion/react css prop 타입 참조
├── index.html               # Vite 개발 서버용 HTML 엔트리
├── package.json             # 패키지 메타 & 의존성 정의
├── tsconfig.json            # TypeScript 설정 (소스 빌드용)
├── tsconfig.node.json       # TypeScript 설정 (Vite 설정 파일용)
├── vite.config.ts           # Vite 빌드 설정 (라이브러리 모드)
│
├── public/
│   └── svg/                 # 원본 SVG 파일 저장소 (21개)
│       ├── icAlert.svg
│       ├── icArrowBottom.svg
│       ├── icCamera.svg
│       ├── icChecked.svg
│       ├── icCodeBrackets.svg
│       ├── icColors.svg
│       ├── icComments.svg
│       ├── icDirection.svg
│       ├── icFlow.svg
│       ├── icHeaderLogo.svg
│       ├── icInputDelete.svg
│       ├── icInputModify.svg
│       ├── icNotionLogo.svg
│       ├── icPlugin.svg
│       ├── icPopupClose.svg
│       ├── icRepo.svg
│       ├── icSearch.svg
│       ├── icSelectArrow.svg
│       ├── icSend.svg
│       ├── icStackalt.svg
│       └── icVisible.svg
│
├── src/
│   ├── index.ts             # 루트 엔트리 (현재 비어있음)
│   ├── vite-env.d.ts        # Vite 클라이언트 타입 참조
│   │
│   ├── components/
│   │   ├── component.ts     # 빌드 엔트리포인트 — Icon, IconProps, IconBoxProps, IconType 재export
│   │   └── Icon.tsx         # Icon 컴포넌트 구현체
│   │
│   └── svg/
│       ├── index.ts         # svg.ts 재export 배럴 파일
│       └── svg.ts           # public/svg/*.svg 21개를 import/export하는 매핑 파일
│
└── dist/                    # 빌드 산출물 (gitignore 대상)
```

---

## 핵심 파일 상세

### 1. `src/components/Icon.tsx` — Icon 컴포넌트

- **역할**: SVG 아이콘을 React 컴포넌트로 렌더링하는 핵심 UI 컴포넌트
- **스타일링**: `@agency/theme`의 `css` (Emotion)를 사용
- **주요 Props (`IconBoxProps`)**:
  | Prop | 타입 | 기본값 | 설명 |
  |------|------|--------|------|
  | `name` | `IconType` | 필수 | 아이콘 이름 (svg.ts에 정의된 키) |
  | `rotate` | `number` | `0` | 회전 각도 (deg) |
  | `width` | `string` | `'20px'` | 아이콘 너비 |
  | `height` | `string` | `'20px'` | 아이콘 높이 |
  | `color` | `string` | `'#3A3A3A'` | 아이콘 색상 |
  | `isNotHover` | `boolean` | `undefined` | hover 스타일 적용 여부 |
  | `className` | `string` | `undefined` | 추가 CSS 클래스 |
- **내부 동작**: `createElement`로 `icons[name]`에 해당하는 SVG 컴포넌트를 동적 생성 (viewBox: `0 0 32 32`)

### 2. `src/components/component.ts` — 빌드 엔트리포인트

- `Icon` 컴포넌트와 관련 타입(`IconProps`, `IconBoxProps`, `IconType`)을 재export
- `vite.config.ts`의 `rollupOptions.input`에서 이 파일을 빌드 엔트리로 지정

### 3. `src/svg/svg.ts` — SVG 매핑

- `public/svg/` 디렉토리의 21개 SVG 파일을 개별 import 후 named export
- `vite-plugin-svgr`에 의해 각 SVG가 React 컴포넌트로 변환됨
- **`IconType`은 이 파일의 export 키들로 결정됨** → 아이콘 추가 시 이 파일에 import/export 추가 필요

### 4. `custom.d.ts` — SVG 모듈 타입 선언

- `*.svg` 파일을 TypeScript에서 모듈로 import할 수 있도록 타입 선언
- `ReactComponent`(React 컴포넌트)와 `default`(문자열 경로) 두 가지 형태로 export

### 5. `vite.config.ts` — 빌드 설정

- **모드**: 라이브러리 빌드 (`build.lib`)
- **포맷**: ES Module + CommonJS
- **플러그인**:
  - `@vitejs/plugin-react-swc` — SWC 기반 React 변환 (Emotion JSX)
  - `vite-plugin-dts` — `.d.ts` 타입 파일 자동 생성
  - `vite-plugin-svgr` — SVG → React 컴포넌트 변환
- **External**: `peerDependencies`에 명시된 패키지는 번들에서 제외

---

## 빌드 & Export 흐름

```
public/svg/*.svg
    ↓ (vite-plugin-svgr: SVG → React Component)
src/svg/svg.ts          — 21개 SVG를 named export
    ↓
src/svg/index.ts        — 배럴 재export
    ↓
src/components/Icon.tsx — icons[name]으로 동적 렌더링
    ↓
src/components/component.ts — Icon + 타입 재export (빌드 엔트리)
    ↓ (vite build)
dist/component.mjs      — 최종 번들 산출물
dist/index.d.ts         — 타입 선언 파일
```

**패키지 소비자 사용 경로** (`package.json`의 `exports`):

- **타입**: `./dist/index.d.ts`
- **ESM/CJS**: `./dist/component.mjs`

---

## 의존성 관계

| 구분     | 패키지                      | 용도                               |
| -------- | --------------------------- | ---------------------------------- |
| **peer** | `@agency/theme`             | Emotion css, colors 등 스타일 유틸 |
| **peer** | `@agency/eslint-config`     | 공유 ESLint 설정                   |
| **peer** | `@agency/typescript-config` | 공유 TypeScript 설정               |
| **peer** | `react`, `react-dom`        | React 런타임                       |
| **dev**  | `vite-plugin-svgr`          | SVG → React 컴포넌트 변환          |
| **dev**  | `vite-plugin-dts`           | 타입 선언 파일 생성                |
| **dev**  | `@svgr/rollup`              | Rollup용 SVGR 플러그인             |

---

## 아이콘 추가 방법

1. `public/svg/` 에 `ic{IconName}.svg` 파일 추가
2. `src/svg/svg.ts` 에 import 및 export 추가
3. `Icon` 컴포넌트에서 `name="ic{IconName}"` 으로 사용 가능

---

## 사용 예시

```tsx
import { Icon } from '@agency/icons';

<Icon name="icSearch" width="24px" height="24px" color="#000" />
<Icon name="icArrowBottom" rotate={180} />
```
