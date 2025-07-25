이 사이트는 [제가](https://github.com/YangSiJun528) 운영하는 개인 사이트입니다. 블로그 포스트, 유용한 정보, 개인 이력 등 다양한 콘텐츠를 담고 있습니다.

동시에 직접 개발한 Static Blog Generator 프로젝트도 함께 관리하고 있습니다.

---

## Static Blog Generator

Markdown 파일을 HTML 기반 정적 웹사이트로 변환해주는 블로그 생성기입니다.

Node.js, TypeScript를 사용하여 개발되었습니다.

직관적인 디렉토리 구조의 미리보기 기능을 지원합니다.

### 주요 기능

- Markdown → HTML 변환: Markdown 파일을 HTML 페이지로 변환합니다.
- 정적 파일 처리: `assets`, `statics` 등 필요한 모든 파일을 포함하여 완성된 웹사이트를 생성합니다.
- 디렉토리 인덱스 페이지
  - 폴더 내 파일 목록을 한눈에 확인 가능
  - 다른 폴더와 파일 내용을 미리보기로 열람 가능

### 사용법

1. **저장소 복제:**
   ```bash
   git clone https://github.com/YangSiJun528/YangSiJun528.github.io.git
   ```

2. **의존성 설치:**
   ```bash
   npm install
   ```

3. **정적 사이트 생성:**
   ```bash
   npm start
   ```

   명령어를 실행하면 `output` 디렉토리에 결과물이 생성됩니다.

### 프로젝트 구조

- **`src`**: 블로그 생성기 소스 코드를 관리합니다.
- **`content`**: 마크다운으로 작성된 블로그 포스트를 이곳에 저장합니다.
- **`assets`**: CSS, 이미지 등 소스 코드 내부에서 사용하는 파일을 보관합니다.
- **`statics`**: `robots.txt`, `favicon.ico`처럼 사이트의 루트에 위치해야 할 정적 파일을 관리합니다.
- **`output`**: 생성된 웹사이트 결과물이 저장되는 곳입니다.

> 소스 코드를 직접 수정하지 않고 블로그 포스트나 페이지만 관리하고 싶다면 `content`와 `statics` 디렉토리만 사용하면 됩니다.

### 개발 배경

#### 왜 디렉토리 구조를 사용하나요?

개인적인 작업 스타일과 일치하기 때문입니다. 
자료를 저장할 때, 분리하지 않고, 한 곳에 모아두며, 많은 depth를 두지 않고, 빠르게 원하는 정보를 찾을 수 있도록 합니다.

예전에 [TIL(Today I Learned)](https://github.com/YangSiJun528/memory)를 진행했는데, 이때 사용한 정리 방식이 매우 직관적이고 편리했습니다.

비록 현재는 TIL을 작성하지 않지만, 그때의 문서 정리 방식을 지금도 활용하고 있습니다.

#### 개발 동기

기존 오픈소스 블로그 서비스들은 디렉토리 구조를 제대로 지원하지 않았습니다.

제가 원하는 스타일의 사이트를 만들고 싶었지만, 적합한 도구를 찾을 수 없었습니다.

마침 AI 기술의 발전으로 개발이 훨씬 수월해져서, 직접 만들기로 결정했습니다.

---

### TMI

Obsidian을 사용하여 문서를 작성하고 있습니다.

Obsidian에서도 비슷한 방식을 지원하는 [inline-toggle-notes](https://github.com/YangSiJun528/inline-toggle-notes) 플러그인을 직접 개발했습니다.
