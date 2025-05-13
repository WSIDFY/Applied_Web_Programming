# 📘 React 핵심 요약 정리 - Lists, Keys, Forms, Lifting State Up, Composition

---

## 🔹 Lists & Keys

### ✅ 목적
- 배열 데이터를 여러 컴포넌트로 렌더링
- 각 항목을 고유하게 식별하기 위해 `key` 속성 사용
- React는 변경, 추가, 제거를 추적하기 위해 key가 필요함

### ✅ map() 함수
```jsx
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2); // [2, 4, 6]
```

### ✅ 리스트 렌더링 예시
```jsx
const names = ['Alice', 'Bob', 'Charlie'];
<ul>
  {names.map((name, index) => <li key={index}>{name}</li>)}
</ul>
```

> ⚠ `index`는 key로 사용 비추천 (리스트 순서가 바뀌는 경우 문제가 발생)

### ✅ 추천 방식
```jsx
const users = [{ id: 1, name: 'Alice' }, ...];
<ul>
  {users.map(user => <li key={user.id}>{user.name}</li>)}
</ul>
```

---

## 🔹 Forms in React

### ✅ Controlled Component
React에서 상태로 값을 제어하는 입력 방식

### ✅ 기본 예시
```jsx
const [value, setValue] = useState('');
<input type="text" value={value} onChange={e => setValue(e.target.value)} />
```

### ✅ onSubmit 처리
```jsx
<form onSubmit={e => {
  e.preventDefault();
  alert('입력된 값: ' + value);
}}>
```

### ✅ textarea / select / checkbox 예시
```jsx
<textarea value={value} onChange={handleChange} />

<select value={fruit} onChange={handleChange}>
  <option value="apple">사과</option>
</select>

<input type="checkbox" checked={isChecked} onChange={handleChange} />
```

### ✅ 여러 개의 입력 필드 관리
```jsx
const [formData, setFormData] = useState({ name: '', email: '' });
const handleChange = e => {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
}
```

### ✅ useRef를 사용한 비제어 컴포넌트
```jsx
const inputRef = useRef();
<input ref={inputRef} />
```

---

## 🔹 Lifting State Up (상태 끌어올리기)

### ✅ 개념
- 여러 컴포넌트가 동일한 상태를 공유해야 할 때 사용
- 상태를 자식 컴포넌트가 아닌 **부모 컴포넌트**에서 관리

### ✅ 예시
```jsx
function Parent() {
  const [text, setText] = useState('');
  return (
    <>
      <ChildA text={text} setText={setText} />
      <ChildB text={text} />
    </>
  );
}
```

### ✅ 실습 예: 온도 변환기
- 섭씨(Celsius) ↔ 화씨(Fahrenheit) 변환
- 하나의 상태를 부모에서 관리하여 두 자식 컴포넌트에 전달

---

## 🔹 Composition vs Inheritance

### ✅ 합성 (Composition)
- 여러 컴포넌트를 조합하여 새로운 UI 구성
- `children` props를 통해 컴포넌트 내부에 다른 컴포넌트 포함 가능

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>;
}
<Card><h2>안녕하세요</h2></Card>
```

### ✅ 특수화 (Specialization)
```jsx
function Dialog({ title, message }) {
  return <div><h3>{title}</h3><p>{message}</p></div>;
}
function WarningDialog() {
  return <Dialog title="경고!" message="위험합니다!" />;
}
```

### ✅ HOC (Higher Order Component)
```jsx
function withLogger(WrappedComponent) {
  return function Enhanced(props) {
    console.log("렌더링:", WrappedComponent.name);
    return <WrappedComponent {...props} />;
  };
}
```

---

## 🔹 실습 정리

| 파일명 | 설명 |
|--------|------|
| `AttendanceBook.jsx` | map + key 사용 |
| `SignUp.jsx`, `SimpleForm.jsx` | Controlled Form 기초 |
| `MultiInputForm.jsx` | 여러 필드 관리 |
| `UncontrolledForm.jsx` | useRef 활용 |
| `Calculator.jsx`, `TemperatureInput.jsx` | 상태 끌어올리기 |
| `Card.jsx`, `ProfileCard.jsx` | Composition 예제 |

---
