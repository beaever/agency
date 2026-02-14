# `@agency/theme`

모노레포 내 공유 테마 패키지. Emotion 기반의 색상 팔레트, 타이포그래피, 투명도 등 디자인 토큰을 정의하고 제공한다.

---

## 디렉토리 구조

```
packages/theme/
├── .eslintrc.js             # ESLint 설정 (@repo/eslint-config/library 확장)
├── .gitignore
├── .swcrc                   # SWC 컴파일러 설정 (TS → CommonJS, minify, sourceMaps)
├── package.json             # 패키지 메타 & 의존성 정의
├── tsconfig.json            # TypeScript 설정 (소스 빌드용)
├── tsconfig.lint.json       # TypeScript 설정 (ESLint용, turbo 디렉토리 포함)
│
├── src/
│   ├── index.ts             # 패키지 엔트리포인트 — 모든 값/타입 재export
│   ├── emotion.ts           # @emotion/react 모듈 확장 (타입 선언)
│   ├── colors.ts            # 시맨틱 컬러 토큰 정의 (text, light, dark, opacity)
│   └── values.ts            # 디자인 토큰 원본 값 (palette, opacity, fonts)
│
└── dist/                    # 빌드 산출물 (gitignore 대상)
```

---

## 핵심 파일 상세

### 1. `src/emotion.ts` — Emotion 모듈 타입 확장

`@emotion/react` 모듈을 `declare module`로 확장하여 커스텀 테마 타입을 주입한다.
이 파일은 **런타임 코드 없이 타입 선언만** 포함한다.

**정의된 인터페이스:**

| 인터페이스              | 설명                                                         |
| ----------------------- | ------------------------------------------------------------ |
| `PaletteProps`          | 원시 컬러 팔레트 (8개 컬러 그룹 × 10단계 + transparent)      |
| `OpacityProps`          | 투명도 프리셋 (white/black × 30/50/70%)                      |
| `FontsProps`            | 폰트 시스템 (size, weight, style)                            |
| `TextColorProps`        | 텍스트 시맨틱 컬러 (link, active, default, error 등)         |
| `ElementColorProps`     | 요소 시맨틱 컬러 (primary~quinary, background, text)         |
| `ThemeColorProps`       | 라이트/다크 테마 컬러                                        |
| `ColorsProps`           | 통합 컬러 객체 (text + lightElement + darkElement + opacity) |
| `FontTypograpyNameType` | `FontsProps['style']`의 키 유니온 타입                       |

### 2. `src/values.ts` — 디자인 토큰 원본 값

실제 CSS 값을 가진 3개의 상수를 export한다.

#### `palette: PaletteProps` — 컬러 팔레트

8개 컬러 그룹, 각 10단계(10~100):

| 그룹            | 범위                  | 예시                     |
| --------------- | --------------------- | ------------------------ |
| **red**         | `#FFF7F7` ~ `#A70006` | 에러, 경고               |
| **blue**        | `#eaf3ff` ~ `#004DBC` | 프라이머리 (라이트 테마) |
| **yellow**      | `#FFFBEB` ~ `#DEAA00` | 강조                     |
| **green**       | `#EFF8F4` ~ `#1E6C4B` | 성공                     |
| **navy**        | `#F8F9FB` ~ `#003569` | 보조                     |
| **amber**       | `#FFF` ~ `#401801`    | 프라이머리 (다크 테마)   |
| **gray**        | `#FFF` ~ `#1A1A1A`    | 중립, 배경, 텍스트       |
| **transparent** | `transparent`         | 투명                     |

#### `opacity: OpacityProps` — 투명도 프리셋

CSS 문자열로 `background-color` + `opacity`를 조합:

| 키        | 값                                         |
| --------- | ------------------------------------------ |
| `white30` | `background-color: #fff; opacity: 30%;`    |
| `white50` | `background-color: #fff; opacity: 50%;`    |
| `white70` | `background-color: #fff; opacity: 70%;`    |
| `black30` | `background-color: #1A1A1A; opacity: 30%;` |
| `black50` | `background-color: #1A1A1A; opacity: 50%;` |
| `black70` | `background-color: #1A1A1A; opacity: 70%;` |

#### `fonts: FontsProps` — 폰트 시스템

**size** (7단계):

| 키       | 값   |
| -------- | ---- |
| `size40` | 40px |
| `size35` | 52px |
| `size26` | 26px |
| `size18` | 18px |
| `size16` | 16px |
| `size14` | 14px |
| `size12` | 12px |

**weight** (9단계): `weight100` ~ `weight900`

**style** (16개 타이포그래피 프리셋):

| 스타일      | font-size | font-weight | line-height |
| ----------- | --------- | ----------- | ----------- |
| `heading1`  | 40px      | 800         | 54px        |
| `heading2`  | 35px      | 700         | 52px        |
| `title1`    | 26px      | 800         | 42px        |
| `title2`    | 26px      | 800         | 42px        |
| `title3`    | 26px      | 500         | 42px        |
| `subtitle1` | 18px      | 700         | 30px        |
| `subtitle2` | 18px      | 500         | 30px        |
| `subtitle3` | 18px      | 400         | 30px        |
| `body1`     | 16px      | 700         | 26px        |
| `body2`     | 16px      | 500         | 26px        |
| `body3`     | 16px      | 400         | 26px        |
| `body4`     | 14px      | 700         | 22px        |
| `body5`     | 14px      | 500         | 22px        |
| `body6`     | 14px      | 400         | 22px        |
| `detail1`   | 12px      | 500         | 18px        |
| `detail2`   | 12px      | 400         | 18px        |

### 3. `src/colors.ts` — 시맨틱 컬러 토큰

`palette`의 원시 값을 의미 기반(시맨틱)으로 매핑한다.

#### `text: TextColorProps`

| 키            | palette 매핑 | 용도             |
| ------------- | ------------ | ---------------- |
| `link`        | `blue70`     | 링크 텍스트      |
| `active`      | `blue90`     | 활성 상태 텍스트 |
| `default`     | `gray90`     | 기본 텍스트      |
| `error`       | `red60`      | 에러 텍스트      |
| `white`       | `gray10`     | 흰색 텍스트      |
| `placeholder` | `gray20`     | 플레이스홀더     |
| `disabled`    | `gray30`     | 비활성 텍스트    |

#### `lightElement: ElementColorProps` (라이트 테마)

| 키           | palette 매핑 |
| ------------ | ------------ |
| `primary`    | `blue100`    |
| `secondary`  | `blue80`     |
| `tertiary`   | `blue60`     |
| `quaternary` | `blue40`     |
| `quinary`    | `blue20`     |
| `background` | `gray10`     |
| `text`       | `gray90`     |

#### `darkElement: ElementColorProps` (다크 테마)

| 키           | palette 매핑 |
| ------------ | ------------ |
| `primary`    | `amber100`   |
| `secondary`  | `amber80`    |
| `tertiary`   | `amber60`    |
| `quaternary` | `amber40`    |
| `quinary`    | `amber20`    |
| `background` | `gray100`    |
| `text`       | `gray10`     |

### 4. `src/index.ts` — 패키지 엔트리포인트

`@emotion/react`의 유틸리티와 자체 디자인 토큰을 통합 재export한다.

**값 export:**

- `colors`, `fonts`, `opacity`, `palette` — 디자인 토큰
- `ThemeProvider`, `css`, `useTheme`, `CacheProvider`, `ClassNames`, `Global`, `ThemeContext`, `jsx`, `keyframes`, `withEmotionCache` — Emotion 유틸리티

**타입 export:**

- `FontTypograpyNameType`, `ColorsProps`, `TextColorProps`, `ElementColorProps`, `ThemeColorProps`, `FontsProps`, `OpacityProps`, `PaletteProps` 등

---

## 빌드 흐름

```
src/*.ts
    ↓ (SWC: TS → CommonJS, minify)
    ↓ (tsc: 타입 선언 생성)
dist/
    ├── index.js       — 런타임 코드
    └── index.d.ts     — 타입 선언
```

**빌드 명령**: `swc src --out-dir dist && tsc`

---

## 의존성 관계

| 구분         | 패키지                      | 용도                              |
| ------------ | --------------------------- | --------------------------------- |
| **peer/dep** | `@emotion/react`            | CSS-in-JS 런타임 + 타입 확장 대상 |
| **peer/dep** | `@emotion/styled`           | styled 컴포넌트 API               |
| **dep**      | `@agency/eslint-config`     | 공유 ESLint 설정                  |
| **dep**      | `@agency/typescript-config` | 공유 TypeScript 설정              |
| **dev**      | `@swc/cli`, `@swc/core`     | SWC 트랜스파일러                  |

---

## 아키텍처 요약

```
emotion.ts (타입 선언)
    ↑ 타입 참조
values.ts (원시 디자인 토큰: palette, fonts, opacity)
    ↓ 값 참조
colors.ts (시맨틱 컬러: text, lightElement, darkElement)
    ↓
index.ts (통합 재export) → 외부 패키지에서 import
```

**핵심 설계 패턴:**

- **원시 토큰(palette)** → **시맨틱 토큰(colors)** 2단계 구조
- **라이트/다크 테마** 분리: `lightElement`(blue 계열) / `darkElement`(amber 계열)
- **Emotion 모듈 확장**: `declare module`로 타입 안전성 확보
- **CSS 문자열 기반**: fonts, opacity 값이 CSS 문자열로 저장되어 `css` 템플릿 리터럴에 직접 삽입 가능

---

## 사용 예시

```tsx
import { colors, fonts, palette, css } from '@agency/theme';

// 시맨틱 컬러 사용
const errorStyle = css`
  color: ${colors.text.error};
  background: ${colors.lightElement.background};
`;

// 타이포그래피 프리셋 사용
const titleStyle = css`
  ${fonts.style.title1}
  color: ${colors.text.default};
`;

// 원시 팔레트 직접 사용
const customStyle = css`
  border: 1px solid ${palette.navy60};
`;
```
