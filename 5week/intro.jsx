import React from 'react';

function MyIntro() {
  // 간단한 인삿말을 띄우는 함수
  const greet = () => {
    alert('안녕하세요! 김민재입니다. 만나서 반갑습니다!');
  };

  // 전체 배경과 레이아웃을 위한 스타일
  const bodyStyle = {
    margin: 0,
    padding: 0,
    background: '#f5f5f5',
    minHeight: '100vh' // 화면 전체 높이
  };

  // 중앙 정렬을 위한 컨테이너 스타일
  const containerStyle = {
    maxWidth: '400px',
    margin: '50px auto',
    padding: '20px',
    background: '#fff',
    borderRadius: '8px',
    textAlign: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
  };

  // 정보 텍스트 스타일
  const infoStyle = {
    fontSize: '16px',
    margin: '5px 0'
  };

  // 버튼 스타일
  const buttonStyle = {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '14px',
    cursor: 'pointer',
    border: '1px solid #aaa',
    borderRadius: '5px',
    background: '#e7e7e7'
  };

  return (
    // 최상단 div에 인라인 스타일 지정(실제로는 body에 적용하기 어려우니 최소 레이아웃 컨테이너로 사용)
    <div style={bodyStyle}>
      <div style={containerStyle}>
        <h1>자기소개</h1>
        <p style={infoStyle}>이름: 김민재</p>
        <p style={infoStyle}>나이: 25</p>
        <button style={buttonStyle} onClick={greet}>인사하기</button>
      </div>
    </div>
  );
}

export default MyIntro;
