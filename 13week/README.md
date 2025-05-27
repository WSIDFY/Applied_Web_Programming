# React Router 요약 (Web Programming 10)

## 1. 라우팅(Routing) 개념

- **라우팅**: URL에 따라 서로 다른 페이지를 보여주는 기술
- **SPA (Single Page Application)**:
  - HTML 문서를 한 번만 로드
  - 이후 페이지 전환은 **JavaScript**로 수행 (History API 사용)
  - 성능 향상 및 사용자 경험 개선

## 2. 기본 설정

```bash
npx create-react-app router-tutorial
cd router-tutorial
npm i react-router-dom
```

### index.js에 `BrowserRouter` 적용
```jsx
import { BrowserRouter } from 'react-router-dom';

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

## 3. 기본 페이지 및 라우트 구성

### 예시 페이지 컴포넌트
```jsx
// Home.js
const Home = () => <h1>홈</h1>;

// About.js
const About = () => <h1>소개</h1>;
```

### Route 설정 (App.js)
```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>
```

## 4. Link 컴포넌트

```jsx
import { Link } from 'react-router-dom';

<Link to="/about">소개</Link>
```

- `a` 태그 사용 금지 (전체 새로고침 발생)
- `Link`는 History API 기반으로 URL만 변경

## 5. URL 파라미터 & 쿼리스트링

### URL 파라미터
```jsx
<Route path="/profiles/:username" element={<Profile />} />
```
```jsx
const { username } = useParams();
```

### 쿼리스트링
```jsx
const [searchParams] = useSearchParams();
const detail = searchParams.get("detail");
```

## 6. 중첩 라우트 (Nested Routes)

```jsx
<Route path="/articles" element={<Articles />}>
  <Route path=":id" element={<Article />} />
</Route>
```

```jsx
import { Outlet } from 'react-router-dom';

const Articles = () => (
  <>
    <Outlet />
    <ul>
      <li><Link to="/articles/1">게시글 1</Link></li>
    </ul>
  </>
);
```

## 7. 공통 레이아웃 적용

```jsx
const Layout = () => (
  <div>
    <header>공통 Header</header>
    <main><Outlet /></main>
  </div>
);
```

```jsx
<Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
  <Route path="about" element={<About />} />
</Route>
```

## 8. useNavigate Hook

```jsx
const navigate = useNavigate();
navigate(-1); // 뒤로 가기
navigate("/articles"); // 특정 경로로 이동
navigate("/articles", { replace: true }); // 기록 남기지 않음
```

## 9. NavLink로 활성화 스타일 적용

```jsx
<NavLink to="/articles/1" style={({ isActive }) => isActive ? { color: 'green' } : undefined}>
  게시글 1
</NavLink>
```

- `isActive`를 이용해 현재 경로 여부 확인

## 10. NotFound 페이지 설정

```jsx
<Route path="*" element={<NotFound />} />
```

- 모든 라우트와 일치하지 않는 URL 접근 시 처리

## 11. Navigate 컴포넌트 (리다이렉트)

```jsx
if (!isLoggedIn) {
  return <Navigate to="/login" replace />;
}
```

- 조건부 페이지 접근 제한 및 강제 이동 시 사용
