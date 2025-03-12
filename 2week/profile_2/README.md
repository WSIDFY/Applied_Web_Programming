# 간단한 자기소개 웹페이지 만들기

- 이미지 파일이 포함된 간단한 자기소개 페이지를 생성합니다.
- JS만을 이용한 구현이 목표이며 HTML skeleton 파일 내에서 JS로 구현되어있습니다
  <br><br>
## 페이지 기능

- 호버링시 효과 변경
- 반응형 페이지<br><br>

## 구성요소

- HTML5
- JavaScript
<br>

## 소스코드 info.

### index.html

```JS
    // <style> 태그를 생성하여 CSS요소 추가
  const style = document.createElement('style');

style.textContent = `
    /* 공통 초기화 */
    * {
      margin: 0;
      padding: 0;
      ...
```
#### Explanation.
- 스타일 태그를 생성하여 CSS효과를 추가합니다.
<br>

```JS
   // DOM 요소를 모두 자바스크립트로 생성
  document.addEventListener('DOMContentLoaded', () => {
    ...
```

#### Explanation.
- DOM요소를 모두 JS로 생성합니다.
<br>
       
## 출력결과

<b>(웹 출력)</b>
<br><img src="img01.png" width="700" height="600" title="px(픽셀) 크기 설정" alt="1번 이미지"></img><br/>

<br>

<b>(모바일 출력)</b>
<br><img src="img02.png" width="500" height="700" title="px(픽셀) 크기 설정" alt="2번 이미지"></img><br/>
