
# 📘 리액트 조건부 렌더링 정리
---

## 9.1 조건부 렌더링이란?

- **조건부 렌더링(Conditional Rendering)**: 특정 조건에 따라 서로 다른 컴포넌트나 엘리먼트를 **렌더링 여부를 제어**하는 방식.
- 실제 UI에서 로그인 상태, 권한, 특정 값 유무 등에 따라 **화면이 동적으로 바뀌는 것**을 의미합니다.

---

## 9.2 엘리먼트 변수

- JSX 요소를 변수처럼 **저장해서 사용할 수 있음**.
- 조건에 따라 다른 JSX를 **선언적 방식으로 저장하고 반환**할 때 유용합니다.

```jsx
let button;
if (isLoggedIn) {
  button = <LogoutButton />;
} else {
  button = <LoginButton />;
}

return <div>{button}</div>;
```

---

## 9.3 인라인 조건

조건문을 JSX 코드 안에 직접 넣는 방식으로 렌더링 제어.

### ✅ 1) 인라인 If (`&&` 연산자 사용)

- `조건 && 렌더링 요소`
- 조건이 `true`일 경우에만 렌더링됨 (단축 평가)

```jsx
{isLoggedIn && <WelcomeMessage />}
```

### ✅ 2) 인라인 If-Else (`삼항 연산자 ?:` 사용)

- `조건 ? 참일 때 렌더링 : 거짓일 때 렌더링`
- 두 가지 결과 중 하나를 선택해 렌더링할 때 사용

```jsx
{isLoggedIn ? <LogoutButton /> : <LoginButton />}
```

---

## 9.4 컴포넌트 렌더링 막기 (null 반환)

- JSX에서 **`null`을 반환하면 아무것도 렌더링되지 않음**
- 특정 조건에서 컴포넌트를 숨기고자 할 때 유용

```jsx
function WarningBanner(props) {
  if (!props.warn) {
    return null; // 아무것도 렌더링하지 않음
  }

  return <div className="warning">경고!</div>;
}
```

---

## 9.5 로그인 여부 표시 예제 - Toolbar 컴포넌트

### ✅ Toolbar.jsx

- 로그인 상태를 기준으로 **버튼 렌더링을 다르게 처리**
- `props.isLoggedIn`을 기반으로 버튼 결정

### ✅ LandingPage.jsx

- `useState()`를 통해 로그인 여부 상태 관리
- Toolbar에 상태 전달 및 토글 함수 포함

```jsx
function LandingPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <>
      <Toolbar isLoggedIn={isLoggedIn} onClick={handleClick} />
      <Greeting isLoggedIn={isLoggedIn} />
    </>
  );
}
```

---

## ✅ 마무리 요약

| 개념 | 설명 |
|------|------|
| 조건부 렌더링 | 조건에 따라 엘리먼트 출력 제어 |
| 엘리먼트 변수 | JSX를 변수처럼 다뤄서 선언적 제어 가능 |
| 인라인 If | `&&` 연산자 사용 (조건이 참일 때만 렌더링) |
| 인라인 If-Else | 삼항 연산자 `? :` 사용 |
| null 반환 | 렌더링 방지 (숨김 처리) |
| 실습 예제 | Toolbar + LandingPage 컴포넌트를 활용한 로그인 UI 구현 |

---

> 이 문서는 React에서 조건에 따라 컴포넌트의 렌더링을 효율적으로 제어하는 방식을 배우는 데 목적이 있습니다.
