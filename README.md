<br>

## **Project. 메뉴 추천 룰렛**

> **[코드스테이츠 FE 45기] 스터디\_참숯가마**\
> **개발기간 : 2023.6.23 ~ 2023.07.15**\
> **리팩토링 : 2023.11.22 ~ 2024.01.21**

<br>

## 프로젝트팀 소개

| <center>이 원호</center>                                           | <center>윤 예빈</center>                                           |
| ------------------------------------------------------------------ | ------------------------------------------------------------------ |
| <img width="150px" height="150px" src = "client\public\images\Wonho.png"> | <img width="150px" height="150px" src = "client\public\images\Yebin.jpg"> |
| <center>[@WONHO22](https://github.com/W0N-H0)</center>             | <center>[@YebinYun](https://github.com/YebinYun)</center>          |

<br>

## 프로젝트 소개

**원하시는 지역을 바탕으로 메뉴 추천을 해주는 랜덤 룰렛.**

<br>

"뭐 먹지?" 선택이 어렵다면 추천 드립니다.

<br>

게임처럼 재밌게 메뉴를 골라드립니다!

오늘은 뭘 먹어야 할지 고민이라면?<br>
늘 먹는 음식이 정해져있다면?<br>
색다른 음식이 먹고 싶다면?<br>

**저희 룰렛을 추천 드립니다.**

<br>

## 화면 구성

| <center>메인 페이지</center>                                               | <center>추천 모달</center>                                             | <center>지역 보기 ver 1.</center>                                          |
| -------------------------------------------------------------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| <img width="300px" height="150px" src = "client\public\images\Main.png">          | <img width="300px" height="150px" src = "client\public\images\MainModal.png"> | <img width="300px" height="150px" src = "client\public\images\MapModalFirst.png"> |
| <center>추천 페이지</center>                                               | <center>상세보기 모달</center>                                         | <center>지역 보기 ver 2.</center>                                          |
| <img width="300px" height="150px" src = "client\public\images\Recomandation.png"> | <img width="300px" height="150px" src = "client\public\images\BlogModal.png"> | <img width="300px" height="150px" src = "client\public\images\MapModalSec.png">   |

<br>

## 주요 기능

### 🍚 추천 받고 싶은 지역구 입력 기능

- 자동입력 기능으로 원하는 지역구를 입력하여 추천 가능 구현.
- 지역구에 대한 정보가 궁금한 경우 좌측 상단 "지역구 보러가기" 클릭하면 안내기능 구현

### 🍚 원하는 지역구에서 식당 추천 받기

- 현재 서울시 25개 지역구에서 한식,일식,중식,양식,분식 중 랜덤으로 식당 정보 제공
- 추후 서울 외 지역도 추가 및 구현 예정

### 🍚 추천 받은 지역에 대한 식당 관련 정보 보기

- 추첨 결과를 보러 가면, 관련 식당 5곳 중에 랜덤으로 2곳에 사이트, 주소, 관련 사진 제공
- 사진은 최대 5개를 보여줄 수 있으며, 없을 경우 대체 gif 제공

### 🍚 추천 받은 하단 "상세보기" 버튼 클릭시 블로그 후기 제공

- 추천 받은 식당에 관련한 블로그 후기 보러가기 가능

<br>

## 룰렛 사용방법

> - 원하는 **(서울)지역구**를 입력해주세요.
>   - 지역구를 모르신다면 **좌측 상단 지역구 보기**를 클릭.
> - 지역구를 입력하셨다면, **룰렛 START!**
> - 룰렛에 결과에 따라 랜덤으로 추천해 드립니다.
> - 원하는 결과에 맞는 지역에서 추천된 매장정보를 보여드립니다.
>   - 결과창에서는 식당 위치와 사이트, 관련 사진등을 볼 수 있습니다.
> - 상세보기를 클릭하면 블로그 후기를 볼 수 있습니다.

<br>

## **주요 기술**

### 📥Client

<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/><img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white"/><img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"/><img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styledcomponents&logoColor=white"/><img src="https://img.shields.io/badge/reactrouter-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white"/><img src="https://img.shields.io/badge/json-5A29E4?style=for-the-badge&logo=json&logoColor=white"/>


### 📤Server
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"/><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white"/><img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white"/><img src="https://img.shields.io/badge/.env-ECD53F?style=for-the-badge&logo=.env&logoColor=white"/><img src="https://img.shields.io/badge/naver_api-03C75A?style=for-the-badge&logo=naver&logoColor=white"/>

<br>

## 아키텍쳐

### 디렉토리 구조
```
📥Client
.
├── public
│   └── images
└── src
    ├── assets
    │   └── fonts
    ├── components
    │   ├── layout
    │   │   ├── commons
    │   │   │   ├── BottomLink.tsx
    │   │   │   ├── MapLink.tsx
    │   │   │   └── TopLink.tsx
    │   │   ├── HomepageComponent.tsx
    │   │   ├── LayoutComponent.tsx
    │   │   ├── MapModalComponent.tsx
    │   │   └── ModalComponent.tsx
    │   ├── main
    │   │   ├── game
    │   │   │   ├── EnterClickComponent.tsx
    │   │   │   ├── EnterDistrictComponent.tsx
    │   │   │   ├── EnterLocalComponent.tsx
    │   │   │   ├── RandomButtonComponent.tsx
    │   │   │   └── RandomGameComponent.tsx
    │   │   ├── MainComponent.tsx
    │   │   └── ResultModalComponent.tsx
    │   └── result
    │       ├── BlogModalComponent.tsx
    │       ├── ResultComponent.tsx
    │       ├── ResultInformation.tsx
    │       └── ResultRenderSlider.tsx
    ├── containers
    │   ├── layout
    │   │   ├── HomepageContainer.tsx
    │   │   └── LayoutContainer.tsx
    │   ├── main
    │   │   ├── game
    │   │   │   ├── EnterClickContainer.tsx
    │   │   │   └── EnterDistrictContainer.tsx
    │   │   ├── MainContainer.tsx
    │   │   └── ResultModalContainer.tsx
    │   └── result
    │       └── ResultContainer.tsx
    ├── hook
    │   └── RotateSlot.js
    └── utils
        ├── district
        │   └── deselectedOptions.json
        ├── foods
        │   └── foods.tsx
        └── images
            └── images.tsx

📤Server
.
├── .env
├── app.js
├── api
│   ├── blog.js
│   ├── image.js
│   └── search.js
└── routes
    └── route.js
```
<br>
