import React from "react";
import Area from "./250408/Area"; 

function App() {
  return (
    <div style={{backgroundColor: "#edeeea"}}>
      <h1 style={{ textAlign: "center", color:" #2e4552" }}>분야별 AI모델 추천</h1>
      <Area 
        headingColor="#112f45"
        bgColor="#f4ebe2" 
        borderColor="#ccc" 
      /> {/*해당 위치에 Area의 내용이 들어갑니다. */}
    </div>
  );
}

export default App;

