# 소개

이 프로젝트는 Typescript, Next.js, Supabase를 사용하여 구축된 템플릿으로 풀스택 웹 애플리케이션 개발 시 반복적인 개발 환경 세팅을 예방하기 위해 개발되었습니다.

**템플릿의 사용 방법**은 하단 **'사용방법' 섹션**에서 확인 가능하며 기능별 사용방법은 각 파일 또는 폴더에 위치한 \_README 파일에서 확인 가능합니다.

## 이 템플릿의 장점

- **Next.js 앱라우터 적용**: 최신 Next.js 라우팅 시스템 사용
- **Next.js 기반 풀스택 폴더 구조 적용**: 프론트엔드와 백엔드 코드를 효율적으로 관리
- **Supabase 적용**: 인증, 데이터베이스, 스토리지 등 백엔드 기능 제공
- **전역 상태 관리 적용(Zustand)**: 간결하고 효율적인 상태 관리
- **UI 라이브러리 적용(MUI)**: 미리 디자인된 컴포넌트로 빠른 UI 개발
- **style-in-JS 적용(Emotion)**: 컴포넌트 기반 스타일링
- **공통 컴포넌트 제공**: 재사용 가능한 UI 컴포넌트
- **PC | Tablet | Mobile 미디어쿼리 커스텀훅 제공**: 반응형 디자인 지원
- **스낵바 알림 기능 제공**: 사용자 피드백을 위한 알림 시스템
- **Supabase + 카카오톡 인증 기능 제공**: 소셜 로그인 통합
- **믹스인 시스템**: 재사용 가능한 스타일 패턴 제공

## 주요 기능 및 구성요소

### 스타일링 시스템

- **테마 설정**: `project/src/styles/theme.ts`에서 전체 애플리케이션의 색상, 타이포그래피 등 테마 설정
- **글로벌 스타일**: `project/src/styles/GlobalStyles.tsx`에서 전역 스타일 정의
- **믹스인**: `project/src/styles/mixins.ts`에서 재사용 가능한 스타일 패턴 제공
  - Flex 레이아웃, 폰트 스타일, 반응형 디자인, 애니메이션 등 다양한 믹스인 제공
  - 예: `mixinFlex`, `mixinContainer`, `mixinBorderRadius` 등

### 공통 컴포넌트

- **헤더**: `project/src/components/common/CommonHeader.tsx`
- **바텀 내비게이션**: `project/src/components/common/CommonBottomNavigation.tsx`
- **기타 재사용 가능한 UI 컴포넌트**: 버튼, 카드, 입력 필드 등

### 페이지 구조

- **앱 라우터**: Next.js 13+ 앱 라우터 구조 적용
- **레이아웃**: 공통 레이아웃 컴포넌트로 일관된 UI 제공

<br/>

# 사용 방법

<br/>

> 프로젝트 클론

```bash
git clone https://github.com/LDK1009/Next_Start_Template.git
```

```bash
cd ./Next_Start_Template
```

```bash
cd ./project
```

<br/>

> 의존성 설치

```bash
npm install
```

<br/>

> Supabase 세팅(필수)

[Supabase 세팅 방법](https://sooncoding.tistory.com/265)

<br/>

> 개발 서버 실행

```bash
npm run dev
```

```bash
// 브라우저 접속
http://localhost:3000
```

# 주의사항

1. **Supabase 세팅은 필수사항입니다.** Supabase 미세팅 시 인증 관련 기능 및 페이지 로드에 오류가 발생합니다. [Supabase 세팅 방법](https://sooncoding.tistory.com/265)
2. Supabase 세팅 후 오류가 발생한다면 .env 파일을 검토 부탁드립니다.
3. Supabase 세팅 후 프로젝트 실행 시 페이지 로드에 오류가 발생할 경우 브라우저 캐시를 삭제하고 다시 시작해주세요.
4. 프로젝트 실행 시 오류가 발생할 경우 콘솔 로그를 확인 부탁드립니다.

<br/>

# 폴더 구조

```
project/
├── public/              # 정적 파일
├── src/
│   ├── app/             # Next.js 앱 라우터
│   │   ├── common/      # 공통 컴포넌트
│   │   └── pages/       # 페이지별 컴포넌트
│   ├── hooks/           # 커스텀 훅
│   ├── lib/             # 유틸리티 함수
│   ├── service/         # API 서비스
│   ├── store/           # Zustand 상태 관리
│   └── styles/          # 스타일 관련 파일
│       ├── GlobalStyles.tsx  # 전역 스타일
│       ├── mixins.ts         # 스타일 믹스인
│       └── theme.ts          # MUI 테마 설정
└── package.json         # 프로젝트 의존성
```
