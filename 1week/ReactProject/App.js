// 로고 및 CSS파일 불러오기기
import logo from './logo.svg';
import './App.css';

// App 컴포넌트 정의
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         이곳에 문장을 출력할 수 있습니다!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
// 컴포넌트 내보내기기
export default App;
