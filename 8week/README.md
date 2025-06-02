
# 📘 리액트 이벤트 핸들링 정리

---

## 8.1 이벤트 처리하기

### ✅ 이벤트란?
- **정의**: 사용자의 클릭, 입력, 이동 등 **행위에 따라 발생하는 사건(Event)**을 의미함.
- 예시: 버튼 클릭, 키보드 입력 등

### ✅ DOM vs React 이벤트 차이점

| 구분 | DOM 이벤트 | React 이벤트 |
|------|------------|--------------|
| 이벤트 이름 | 모두 소문자 | 카멜표기법 (`onClick`) |
| 이벤트 등록 방식 | 문자열로 함수 이름 전달 | 함수 자체를 전달 |

### ✅ 이벤트 핸들러(Event Handler)
- 이벤트 발생 시 실행되는 **함수**.
- **Event Listener**라고도 불림.

### ✅ 컴포넌트 유형별 사용법
#### 1. 클래스 컴포넌트
- 클래스 메서드로 이벤트 핸들러 정의
- `this` 바인딩 필요 → `constructor`에서 `bind()` 사용
- 혹은 **클래스 필드 문법**으로 화살표 함수 사용 가능

```jsx
class MyButton extends React.Component {
  handleClick = () => {
    console.log("Clicked!");
  };

  render() {
    return <button onClick={this.handleClick}>Click Me</button>;
  }
}
```

#### 2. 함수 컴포넌트
- 컴포넌트 함수 내부에 핸들러 함수 정의
- **화살표 함수** 또는 일반 함수 모두 가능

```jsx
function MyButton() {
  const handleClick = () => {
    console.log("Clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}
```

---

## 8.2 Arguments 전달하기

### ✅ Argument란?
- **이벤트 핸들러에 전달되는 데이터**
- 함수의 **매개변수(Parameter)** 역할

### ✅ 클래스 컴포넌트에서 전달하는 법
- 화살표 함수 사용 또는 `.bind()` 활용

```jsx
<button onClick={(event) => this.handleClick(id, event)}>Click</button>
```

### ✅ 함수 컴포넌트에서 전달하는 법
- 필요한 인자를 직접 넘기면 됨

```jsx
<button onClick={(e) => handleClick(id, e)}>Click</button>
```

---

## 8.3 클릭 이벤트 실습

### ✅ ConfirmButton 컴포넌트 실습 예시

#### 1. 클래스 컴포넌트 (기본 방식)
- 핸들러를 `constructor`에서 `.bind(this)`로 바인딩

#### 2. 클래스 필드 문법 사용
- 화살표 함수로 간결하게 변경

#### 3. 함수 컴포넌트 전환
- `useState()` 훅 활용
- 이벤트 핸들러는 화살표 함수

```jsx
import { useState } from "react";

function ConfirmButton() {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleClick = () => {
    setIsConfirmed(!isConfirmed);
  };

  return (
    <button onClick={handleClick}>
      {isConfirmed ? "확인됨" : "확인하기"}
    </button>
  );
}
```

---

## ✅ 마무리

| 개념 | 설명 |
|------|------|
| 이벤트핸들러 | 이벤트 발생 시 호출되는 함수 |
| 클래스 vs 함수형 | 클래스는 `this` 바인딩 필요, 함수형은 `useState`와 화살표 함수 사용 |
| 이벤트 이름 | `onClick`, `onChange` 등 카멜케이스 |
| 인자 전달 | (event) → 함수로 직접 전달 가능 |

---

> 이 문서는 React 초심자가 이벤트 핸들링을 이해하고 실습할 수 있도록 구성되었습니다.
