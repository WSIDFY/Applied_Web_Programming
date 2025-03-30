# 컴포넌트 실습

- 5개 이상의 컴포넌트로 구성된 웹페이지를 생성합니다.
- 2개 이상의 props를 전달하는 컴포넌트를 하나 이상 포함합니다.

## 페이지 안내

- 2주차 레포지토리의 자기소개 웹 페이지를 재구축 하였습니다.
- 5개 이상의 컴포넌트로 구성하고 3개의 props를 전달받아 처리하는 컴포넌트를 포함합니다.

## 구성요소

- HTML5
- CSS
- React


## 소스코드 info.

### index.html

```html
<!-- 스타일 정의 -->
    <style>
      /* 공통 초기화 */
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, sans-serif;
      }
```
#### Explanation.


1. 스타일을 정의합니다.
   - 공통 배경
   - 프로필 구역
   - 링크 구역
   - 제목 구역
   - works & Skill 구역
   - 반응형
  
```js
 <script type="text/javascript">
      // LinkItem 컴포넌트: 최소 2개 이상의 props (url, label, extra)를 전달받습니다.
      function LinkItem({ url, label, extra, target="_blank" }) {
        return (
          <a href={url} target={target}>
            {label} <b>{extra}</b>
          </a>
        );
      }
```
#### Explanation.


1. 3개의 props를 전달받는 컴포넌트를 생성합니다.


```js
 // Profile 컴포넌트: 프로필 이미지, 이름, 역할, 위치 표시
      function Profile() {
        return (
          <div className="profile">
            <img src="profil.jpg" alt="Profile Image" />
            <div className="info">
              <h2>Kim Min Jae</h2>
              <p>Student</p>
              <p>📍Busan</p>
            </div>
          </div>
        );
      }
.
.
.

```
#### Explanation.


1. 총 10개의 컴포넌트를 생성하고 구성합니다.
     - Profile
     - Links
     - Education
     - About
     - Skills
     - WorkExperience
     - ActivityHistory
     - Container
     - App
  

```js
 // React 앱 렌더링
      ReactDOM.render(<App />, document.getElementById('root'));
```
#### Explanation.

1. 렌더링 구역을 설정합니다.
