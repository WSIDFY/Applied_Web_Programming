# React 엘리먼트와 컴포넌트 학습 가이드

## 목차
1. [DOM과 Virtual DOM](#dom과-virtual-dom)
2. [React 엘리먼트](#react-엘리먼트)
3. [컴포넌트와 Props](#컴포넌트와-props)
4. [실습 예제](#실습-예제)
5. [핵심 규칙](#핵심-규칙)

---

## DOM과 Virtual DOM

### DOM (Document Object Model)
- **노드(Node)**: DOM을 구성하는 최소 단위
- **Real DOM**: 실제 화면에 출력되는 DOM

### Virtual DOM
- React에서 사용하는 핵심 개념
- **감지 및 렌더링** 최적화를 위한 가상의 DOM
- **엘리먼트 객체 형태**로 메모리에 저장
- Real DOM과의 차이점을 비교하여 효율적으로 업데이트

```
Virtual DOM → 변경 감지 → Real DOM 업데이트 → 화면 렌더링
```

---

## React 엘리먼트

### 엘리먼트 구조
React 엘리먼트는 **type**과 **props** 두 가지 핵심 속성으로 구성됩니다.

```javascript
// React 엘리먼트 예시
{
  type: "div",           // 태그 타입
  props: {              // 속성들
    children: "Hello World"  // 자식 요소들
  }
}
```

### Key-Value 형태
- JavaScript 객체는 **Key + Value** 형태
- 태그 정보는 `type`에서 추출
- 자식 태그와 콘텐츠는 `children`에 기술

### 파일 구조
```
프로젝트/
├── index.html     # 기본 HTML 템플릿 (거의 수정하지 않음)
├── index.js       # 앱을 HTML에 연결하는 진입점
└── app.js         # 각종 컴포넌트들
```

### createElement 참조
- 공식 문서: https://ko.react.dev/reference/react/createElement
- React는 **프론트엔드 전용** (Next.js와 함께 사용시 복잡할 수 있음)

---

## 컴포넌트와 Props

### Props (Properties = 속성)
- 컴포넌트에 전달되는 데이터
- 함수의 파라미터와 유사한 개념
- 있을 수도 있고 없을 수도 있음

### 컴포넌트의 두 가지 종류

#### 1. 함수 컴포넌트
```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}!</h1>;
}
```

#### 2. 클래스 컴포넌트
```javascript
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}!</h1>;
  }
}
```

### Pure 함수 개념
- **입력과 출력의 형식이 정해져 있는 함수**
- React 컴포넌트는 Pure 함수처럼 동작해야 함
- 동일한 props에 대해 항상 동일한 결과를 반환

### 엘리먼트의 두 가지 의미
1. **HTML 태그 엘리먼트**: `<div>`, `<span>` 등
2. **컴포넌트 엘리먼트**: 컴포넌트에 의해 생성된 엘리먼트

단, 이 둘은 **속성(props)의 차이**가 있습니다.

---

## 실습 예제

### 1. 간단한 시계 만들기
```javascript
// JavaScript로 구현
setInterval(() => {
  // 몇 초마다 특정 작업 실행
  document.getElementById('clock').textContent = new Date().toLocaleTimeString();
}, 1000);

// React로 구현 (2가지 방식)
function Clock() {
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  
  return <div>{time.toLocaleTimeString()}</div>;
}
```

### 2. 바이너리 시계 만들기
현재 시각을 이진수로 표현하는 시계 구현

### 개발 환경 설정
- **Open Live Server**: 소스코드에서 우클릭 → '오픈 라이브서버'로 로컬 실행 가능

---

## 핵심 규칙

### 🔥 React 절대 규칙

#### 1. 대소문자 구분
- **HTML 태그**: 반드시 소문자 (`<div>`, `<span>`, `<button>`)
- **React 컴포넌트**: 반드시 대문자로 시작 (`<Welcome>`, `<Clock>`, `<App>`)
- HTML은 대소문자를 구분하지 않지만, React는 엄격하게 구분

#### 2. 컴포넌트 명명 규칙
```javascript
// ✅ 올바른 예시
function MyComponent() { }
const UserProfile = () => { };

// ❌ 잘못된 예시  
function mycomponent() { }
const userprofile = () => { };
```

### 유용한 JavaScript 메서드

#### map 함수
- 배열의 각 요소를 가져와서 처리하는 것을 반복
- React에서 리스트 렌더링에 자주 사용

```javascript
const items = ['apple', 'banana', 'orange'];
const listItems = items.map(item => <li key={item}>{item}</li>);
```

---

## 전체 흐름도

```
index.html (기본 템플릿)
    ↓
index.js (앱 연결점 - HTML의 특정 ID를 잡음)
    ↓
App.js (메인 컴포넌트)
    ↓
각종 컴포넌트들 (HTML 태그 포함 가능)
    ↓
Virtual DOM → Real DOM → 화면 렌더링
```

---

## 정리

React를 학습할 때 반드시 기억해야 할 핵심 사항들:

1. **Virtual DOM 개념** 이해하기
2. **엘리먼트 = type + props** 구조 파악하기  
3. **컴포넌트 대문자, 태그 소문자** 규칙 지키기
4. **Props를 통한 데이터 전달** 방식 이해하기
5. **Pure 함수처럼 동작**하는 컴포넌트 작성하기

이러한 기초를 탄탄히 다지면 더 복잡한 React 애플리케이션을 구축할 수 있는 토대가 마련됩니다.
