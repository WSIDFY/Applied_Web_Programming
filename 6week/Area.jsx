import React, { useState } from "react";

// 3개의 Props를 사용
const Area = ({ headingColor, bgColor, borderColor }) => {
  // 6개의 State (각 모델별 "추가 설명" 토글)
  const [showMoreGPT, setShowMoreGPT] = useState(false);
  const [showMoreWrtn, setShowMoreWrtn] = useState(false);
  const [showMoreClaude, setShowMoreClaude] = useState(false);
  const [showMoreGemini, setShowMoreGemini] = useState(false);
  const [showMoreClova, setShowMoreClova] = useState(false);
  const [showMorePerplexity, setShowMorePerplexity] = useState(false);

  // 2×3(혹은 3×2) 레이아웃을 위한 기본 스타일


  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)", // 2열
    gap: "20px", // 영역 사이 간격
    maxWidth: "900px",
    margin: "0 auto",
    padding: "20px",
  };

  // 전달받은 Props를 활용해 스타일 지정
  const calloutStyle = {
    border: `2px solid ${borderColor}`,
    borderRadius: "8px",
    padding: "20px",
    backgroundColor: bgColor, // Probs로 받은 백그라운드 색상
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  };

  const headerStyle = {
    margin: "0 0 10px",
    color: headingColor, // Props로 받은 제목 색상
  };

  const paragraphStyle = {
    margin: "8px 0",
    lineHeight: "1.4",
  };

  const linkStyle = {
    color: "#ec8b33",
    textDecoration: "none",
    fontWeight: "bold",
  };

  return (
      <div style={containerStyle}>
        {/* 1) GPT 영역 */}
        <div style={calloutStyle}>
          <h2 style={headerStyle}>GPT</h2>
          <p style={paragraphStyle}>
            <strong>(소개)</strong>
            <br />
            OpenAI에서 개발한 대화형 AI 모델로써 자연어 처리 전반, 대화, 텍스트 생성,
            질의응답, 번역 등의 기능을 제공합니다.
          </p>
          <p style={paragraphStyle}>
            <strong>(분야별 사용 추천)</strong>
            <br />
            • <strong>마케터/기획자</strong> : 콘텐츠 아이디어, 광고 문구 초안 작성 등
            <br />
            • <strong>학생/연구자</strong> : 배경지식 파악, 개념 정리, 번역 등
            <br />
            • <strong>개발자</strong> : 코드 예시, 오류 해결 아이디어 확인 등
          </p>
          {showMoreGPT && (
            <p style={paragraphStyle}>
              <strong>(설명)</strong>
              <br />
              GPT는 방대한 양의 텍스트 데이터를 학습해 사람처럼 자연스럽고 풍부한 문장을
              생성할 수 있는 대표적인 대규모 언어 모델입니다.
              <br />
              <br />
              개발 버전에 따라 기능과 성능이 꾸준히 향상되며, 여러 산업 분야에서
              활용도가 높습니다.
            </p>
          )}
          <button onClick={() => setShowMoreGPT(!showMoreGPT)}>
            {showMoreGPT ? "간단히 보기" : "추가 설명"}
          </button>
          <br />
          <br />
          <a
            style={linkStyle}
            href="https://openai.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GPT 구경하러 가기!
          </a>
        </div>

        {/* 2) wrtn 영역 */}
        <div style={calloutStyle}>
          <h2 style={headerStyle}>wrtn</h2>
          <p style={paragraphStyle}>
            <strong>(소개)</strong>
            <br />
            국내 AI 스타트업인 Wrtn Technologies에서 개발한 모델로, 글쓰기나 문서 작성 등
            텍스트 기반 작업을 보조합니다.
          </p>
          <p style={paragraphStyle}>
            <strong>(분야별 사용 추천)</strong>
            <br />
            • <strong>학생/교육 분야 종사자</strong> : 과제, 리포트, 에세이 작성 보조
            <br />
            • <strong>마케터/카피라이터</strong> : 광고 문구, 블로그 포스팅 초안
            <br />
            • <strong>출판/미디어</strong> : 기사, 칼럼, 대량 텍스트 편집
          </p>
          {showMoreWrtn && (
            <p style={paragraphStyle}>
              <strong>(설명)</strong>
              <br />
              wrtn은 한국어와 영어 텍스트 처리에 강점을 지니며, 사용자 친화적인
              인터페이스로 누구나 손쉽게 글쓰기 작업을 보조받을 수 있습니다.
              <br />
              <br />
              교정·편집 기능과 간단한 작문 보조 기능이 뛰어나, 생산성을 높이는 데 도움이
              됩니다.
            </p>
          )}
          <button onClick={() => setShowMoreWrtn(!showMoreWrtn)}>
            {showMoreWrtn ? "간단히 보기" : "추가 설명"}
          </button>
          <br />
          <br />
          <a
            style={linkStyle}
            href="https://wrtn.ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            wrtn 구경하러 가기!
          </a>
        </div>

        {/* 3) 클로드(Claude) 영역 */}
        <div style={calloutStyle}>
          <h2 style={headerStyle}>클로드 (Claude)</h2>
          <p style={paragraphStyle}>
            <strong>(소개)</strong>
            <br />
            Anthropic에서 개발한 대화형 AI 모델로, 안전성과 윤리성에 초점을 맞춘
            대규모 언어 모델입니다.
          </p>
          <p style={paragraphStyle}>
            <strong>(분야별 사용 추천)</strong>
            <br />
            • <strong>기업 고객 지원</strong> : 민감한 주제를 다루거나 세심한 응대가 필요한
            서비스
            <br />
            • <strong>연구자/개발자</strong> : 안전하고 신뢰도 높은 텍스트 생성
            <br />
            • <strong>비즈니스 기획자</strong> : 윤리 기준을 충족해야 하는 서비스 기획
          </p>
          {showMoreClaude && (
            <p style={paragraphStyle}>
              <strong>(설명)</strong>
              <br />
              클로드는 높은 이해도와 긴 문맥 처리 능력을 갖추고 있으며, 사용자 친화적인
              대화 경험을 제공하기 위해 안전성과 윤리적 이슈에 특별히 집중한 점이
              특징입니다.
            </p>
          )}
          <button onClick={() => setShowMoreClaude(!showMoreClaude)}>
            {showMoreClaude ? "간단히 보기" : "추가 설명"}
          </button>
          <br />
          <br />
          <a
            style={linkStyle}
            href="https://claude.ai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Claude 구경하러 가기!
          </a>
        </div>

        {/* 4) Gemini 영역 */}
        <div style={calloutStyle}>
          <h2 style={headerStyle}>Gemini</h2>
          <p style={paragraphStyle}>
            <strong>(소개)</strong>
            <br />
            구글(DeepMind 등)에서 개발 중인 차세대 대규모 언어 모델로, 멀티모달 처리 가능성을
            시사합니다.
          </p>
          <p style={paragraphStyle}>
            <strong>(분야별 사용 추천)</strong>
            <br />
            • <strong>구글 제품 사용자</strong> : 구글 문서, 스프레드시트, G메일 등
            <br />
            • <strong>스타트업/개발자</strong> : 구글 클라우드 및 API와 연동해 새 서비스를
            만들 때
            <br />
            • <strong>콘텐츠 크리에이터</strong> : 멀티모달 작업(예: 동영상 자막+자동 편집) 등
          </p>
          {showMoreGemini && (
            <p style={paragraphStyle}>
              <strong>(설명)</strong>
              <br />
              Gemini는 GPT 계열에 대응하는 강력한 언어 모델을 목표로 하며, 구글 검색, 번역,
              YouTube 등 다양한 구글 생태계와 연계되어 강력한 시너지를 낼 것으로 전망됩니다.
            </p>
          )}
          <button onClick={() => setShowMoreGemini(!showMoreGemini)}>
            {showMoreGemini ? "간단히 보기" : "추가 설명"}
          </button>
          <br />
          <br />
          <a
            style={linkStyle}
            href="https://gemini.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gemini 구경하러 가기!
          </a>
        </div>

        {/* 5) 클로바X (CLOVA X) 영역 */}
        <div style={calloutStyle}>
          <h2 style={headerStyle}>클로바X</h2>
          <p style={paragraphStyle}>
            <strong>(소개)</strong>
            <br />
            네이버(Naver)에서 개발한 AI 플랫폼으로, 한국어 자연어 처리에 특화되어 있습니다.
          </p>
          <p style={paragraphStyle}>
            <strong>(분야별 사용 추천)</strong>
            <br />
            • <strong>국내 사용자</strong> : 정확도 높은 한국어 문맥 파악과 챗봇 서비스
            <br />
            • <strong>소규모 비즈니스/쇼핑몰 운영자</strong> : 국문 기반 고객 응대, 상품 추천,
            리뷰 분석
            <br />
            • <strong>개발자</strong> : 네이버 API와의 연동을 통한 웹·모바일 앱에 AI 기능 추가
          </p>
          {showMoreClova && (
            <p style={paragraphStyle}>
              <strong>(설명)</strong>
              <br />
              클로바X는 네이버 검색, 쇼핑, 블로그 등과도 연동 가능해 국내 사용 사례가 풍부하며,
              강력한 한국어 처리 능력을 갖추고 있습니다.
            </p>
          )}
          <button onClick={() => setShowMoreClova(!showMoreClova)}>
            {showMoreClova ? "간단히 보기" : "추가 설명"}
          </button>
          <br />
          <br />
          <a
            style={linkStyle}
            href="https://clova-x.naver.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Clova X 구경하러 가기!
          </a>
        </div>

        {/* 6) Perplexity 모델 영역 */}
        <div style={calloutStyle}>
          <h2 style={headerStyle}>Perplexity</h2>
          <p style={paragraphStyle}>
            <strong>(소개)</strong>
            <br />
            Perplexity AI에서 제공하는 검색 기반 Q&A 모델로, 답변과 함께 출처를 명시해주는
            것이 특징입니다.
          </p>
          <p style={paragraphStyle}>
            <strong>(분야별 사용 추천)</strong>
            <br />
            • <strong>일반 사용자</strong> : 단순 검색 이상의 ‘맥락 있는 답변’이 필요할 때
            <br />
            • <strong>연구자/학생</strong> : 리서치 과정에서 빠르고 정확한 정보와 출처 확인
            <br />
            • <strong>저널리스트/콘텐츠 크리에이터</strong> : 자료 수집 및 팩트 체크
          </p>
          {showMorePerplexity && (
            <p style={paragraphStyle}>
              <strong>(설명)</strong>
              <br />
              Perplexity는 검색엔진형 AI 서비스로, 여러 소스를 바탕으로 정보를 종합·정리하고
              출처까지 제공해 신뢰도를 높입니다.
              <br />
              <br />
              답변 과정이 투명하게 공개되어 있어, 빠르고 정확한 자료 수집에 유리합니다.
            </p>
          )}
          <button onClick={() => setShowMorePerplexity(!showMorePerplexity)}>
            {showMorePerplexity ? "간단히 보기" : "추가 설명"}
          </button>
          <br />
          <br />
          <a
            style={linkStyle}
            href="https://www.perplexity.ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            Perplexity 구경하러 가기!
          </a>
        </div>
        </div>
  );
};

export default Area;
