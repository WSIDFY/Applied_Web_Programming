# React의 주요 Hook에 대한 개념 정리입니다.
(아래의 내용에 대한 설명입니다.)

- usememo
- usestate
- useEffect
- useCallback
- useRef

# 🟢 React 주요 Hook 정리

## ✅ 1. `useMemo`
- **개념**: 계산된 값을 메모이제이션(캐싱)해서 필요할 때만 다시 계산하도록 하는 Hook.
- **기능**: 연산량이 많은 함수 결과를 재사용해서 불필요한 재계산을 방지.
- **역할**: 성능 최적화 (특히 렌더링 성능).
- **예시**:
  ```jsx
  import { useMemo } from 'react';

  function Example({ num }) {
    const squared = useMemo(() => {
      console.log('계산 중...');
      return num * num;
    }, [num]);  // num이 변경될 때만 계산

    return <div>제곱: {squared}</div>;
  }
  ```

---

## ✅ 2. `useState`
- **개념**: 컴포넌트 내에서 상태값을 선언하고 변경할 수 있는 Hook.
- **기능**: 상태 저장 및 변경.
- **역할**: 사용자 입력, 버튼 클릭 등 이벤트에 따른 상태 변화 관리.
- **예시**:
  ```jsx
  import { useState } from 'react';

  function Counter() {
    const [count, setCount] = useState(0);

    return (
      <div>
        <p>총 {count}번 클릭했습니다.</p>
        <button onClick={() => setCount(count + 1)}>클릭</button>
      </div>
    );
  }
  ```

---

## ✅ 3. `useEffect`
- **개념**: 컴포넌트가 렌더링된 후 특정 작업(부수효과)을 수행하는 Hook.
- **기능**: API 호출, 구독 설정, 타이머 설정 등.
- **역할**: 생명주기 관리 (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount` 대체).
- **예시**:
  ```jsx
  import { useEffect, useState } from 'react';

  function Timer() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
      return () => clearInterval(interval);  // 언마운트 시 타이머 정리
    }, []);

    return <div>{seconds}초 경과</div>;
  }
  ```

---

## ✅ 4. `useCallback`
- **개념**: 함수를 메모이제이션해서 의존성이 변할 때만 새로 생성되도록 하는 Hook.
- **기능**: 함수 재생성을 방지하여 하위 컴포넌트에 불필요한 렌더링을 막음.
- **역할**: 성능 최적화 (특히 props로 함수 전달 시).
- **예시**:
  ```jsx
  import { useState, useCallback } from 'react';

  function Example() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
      setCount((prev) => prev + 1);
    }, []);

    return <button onClick={handleClick}>클릭: {count}</button>;
  }
  ```

---

## ✅ 5. `useRef`
- **개념**: DOM 요소나 값의 참조를 유지하는 Hook.
- **기능**: 값이 바뀌어도 렌더링을 발생시키지 않음. DOM 직접 접근 가능.
- **역할**: DOM 조작, 이전 값 저장.
- **예시**:
  ```jsx
  import { useRef } from 'react';

  function FocusInput() {
    const inputRef = useRef(null);

    const handleFocus = () => {
      inputRef.current.focus();  // DOM 직접 조작
    };

    return (
      <div>
        <input ref={inputRef} type="text" />
        <button onClick={handleFocus}>포커스 이동</button>
      </div>
    );
  }
  ```

---

## 🟡 요약표

| Hook            | 기능                       | 주요 역할                    | 예시 활용                    |
|-----------------|----------------------------|-----------------------------|-----------------------------|
| `useMemo`       | 값 메모이제이션            | 계산 최적화                  | 복잡한 계산 결과 저장       |
| `useState`      | 상태 관리                  | 값 저장 및 변화 관리         | 카운터, 입력값              |
| `useEffect`     | 부수 효과 처리             | 생명주기 작업 (API 호출 등)   | 타이머, API 호출           |
| `useCallback`   | 함수 메모이제이션          | 함수 재생성 방지             | 하위 컴포넌트 성능 최적화   |
| `useRef`        | 참조 저장 (렌더링 X)       | DOM 접근, 이전 값 저장       | 포커스 이동, 이전 값 기억   |

---

> 👏 이 문서는 React의 주요 Hook을 이해하기 쉽게 요약한 자료입니다.
