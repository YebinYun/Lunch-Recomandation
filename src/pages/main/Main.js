import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import Slots from "../../components/Slots";
import MapModalFir from "../../components/modal/MapModalFirst";
import MainModal from "../../components/modal/MainModal";
import { deselectedOptions } from "../../utils/dummy/deselectedOptions";

const PUBLIC = process.env.PUBLIC_URL;
const koreanFood1 = `${PUBLIC}/images/koreanFood1.png`;
const koreanFood2 = `${PUBLIC}/images/koreanFood2.png`;
const koreanFood3 = `${PUBLIC}/images/koreanFood3.png`;
// 배경화면
const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url(${PUBLIC}/images/mainBackground.png);
  background-size: cover;
  > .container {
    border-radius: 5px;
    border: 3px solid black;
    border-bottom: 0px;
    width: 1275px;
    height: 825px;
    text-align: center;
    margin: 70px auto;
    box-shadow: 5px 10px 10px 5px gray;

    // 상단바 1
    > .topBarWrap {
      border-bottom: 3px solid black;
      height: 7%;
      background: #ea8573;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0px 20px;
      > .acctionBtnWrap {
        display: flex;
        > .acctionBtn {
          background-color: transparent;
          border: none;
          margin: 10px;
          padding: 0;
          > .acctionImg {
            width: 40px;
            height: 40px;
          }
        }
      }
      > .linkWrap {
        display: flex;
        align-items: center;
        margin-left: -200px;
        > .linkBarWrap {
          width: 600px;
          height: 40px;
          border-radius: 20px;
          border: 3px solid black;
          background: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 20px;
          > .linkBar {
            font-weight: bold;
            font-size: 25px;
          }
          > .acctionImgStar {
            width: 33px;
            height: 33px;
          }
        }
        > .acctionBtn {
          background-color: transparent;
          border: none;
          margin: 10px;
          padding: 0;
          > .acctionImg {
            width: 40px;
            height: 40px;
          }
        }
      }
    }

    // 상단바 2
    > .secondBarWrap {
      border-bottom: 3px solid black;
      height: 5%;
      background: #ea8573;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0px 20px;
      > .mapBtn {
        width: 160px;
        height: 32px;
        border-radius: 10px;
        border: 2px solid #000;
        background: white;
        margin: 0 10px;
        > .mapText {
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-size: 15px;
          margin: 0;
          font-weight: bold;
          cursor: pointer;
        }
      }
    }

    // 메인창
    > .mainWrap {
      height: 80%;
      background-color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      > .mainTitle {
        width: 1000px;
        height: 150px;
        border-radius: 15px;
        border: 3px solid black;
        background: linear-gradient(
            177deg,
            rgba(255, 39, 0, 0.38) 0%,
            rgba(234, 133, 115, 0) 100%
          ),
          #fff2e9;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        margin: 30px;
        > .mainTitleText {
          font-size: 50px;
          margin: 0;
          color: white;
          text-shadow: -1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black,
            1px 1px 0 black;
        }
        > .suvTitleText {
          font-size: 20px;
          margin: 0;
          color: #777;
          text-shadow: none;
        }
      }
    }

    // 하단바
    > .footerBarWrap {
      border-top: 3px solid black;
      border-bottom: 3px solid black;
      height: 7%;
      background: #ea8573;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      padding: 0px 20px;
      border-radius: 0px 0px 5px 5px;
      font-size: 1.3rem;
      > div {
        margin: 0 10px 0 0;
        > img {
          width: 40px;
          height: 40px;
        }
      }
    }
  }
`;

const Main = () => {
  const [food1, setFood1] = useState(koreanFood1);
  const [food2, setFood2] = useState(koreanFood2);
  const [food3, setFood3] = useState(koreanFood3);

  // 슬롯이 다 돌아갔는지를 알려주는 useState
  const [result, setResult] = useState(0);

  // 클릭시 결과 모달 구현
  const [visibleModal, setVisibleModal] = useState(false);

  // 클릭시 result값을 false로 바꿔줌
  const handleClick = () => {
    setResult(false);

    // 클릭시 변경 값이 보여야 하므로 true.
    setVisibleModal(!visibleModal);

    console.log("Result:", result);
  };

  const handleSlotFinish = () => {
    // 슬롯이 다 돌아갔을때, result 상태를 true로 바꾸는 함수
    setResult(true);
  };

  // 지역구 모달창
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  // 자동완성 구현
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState(deselectedOptions);

  return (
    <>
      <BackgroundImage>
        <div className="container">
          {/* 상단바-1 */}
          <div className="topBarWrap">
            <div className="acctionBtnWrap">
              {/* 방향키 */}
              <div className="acctionBtn">
                <Icon
                  icon="fluent-emoji-high-contrast:right-arrow"
                  width="40"
                  height="40"
                  rotate={2}
                />
              </div>
              <div className="acctionBtn">
                <Icon
                  icon="fluent-emoji-high-contrast:right-arrow"
                  width="40"
                  height="40"
                />
              </div>
            </div>

            {/* 링크 느낌 구현 */}
            <div className="linkWrap">
              <div className="linkBarWrap">
                <div className="linkBar">https:// 프로젝트.참숯가마</div>
                <Icon icon="solar:star-broken" width="30" height="30" />
              </div>

              <div className="acctionBtn">
                <Icon icon="ic:round-refresh" width="40" height="40" />
              </div>
            </div>

            {/* 동작 버튼 */}
            <div className="acctionBtnWrap">
              <div className="acctionBtn">
                <Icon icon="fa6-solid:window-minimize" width="35" height="35" />
              </div>
              <div className="acctionBtn">
                <Icon icon="ep:close-bold" className="acctionImg" />
              </div>
            </div>
          </div>

          {/* 상단바-2 */}
          <div className="secondBarWrap">
            <button className="mapBtn">
              <p className="mapText" onClick={openModal}>
                {" "}
                지역구 보러가기{" "}
              </p>
            </button>
          </div>

          {/* 모달창 띄우는 곳*/}
          {showModal ? (
            <MapModalFir openModal={openModal} closeModal={closeModal} />
          ) : (
            ""
          )}

          {/* 메인창 */}
          <div className="mainWrap">
            <div className="mainTitle">
              <div className="mainTitleText"> 오늘 뭐 먹지? </div>
              <div className="suvTitleText"> 메뉴 추천 룰렛 </div>
            </div>

            {/* 게임 */}
            <Slots
              setFood1={setFood1}
              setFood2={setFood2}
              setFood3={setFood3}
              onClick={handleClick}
              onSlotFinish={handleSlotFinish}
              inputValue={inputValue}
              setInputValue={setInputValue}
              options={options}
              setOptions={setOptions}
              deselectedOptions={deselectedOptions}
            />
          </div>

          {/* 하단바 */}
          <div className="footerBarWrap">
            <div>
              <Icon icon="fluent-emoji-flat:face-savoring-food" />
            </div>
            <div>I LOVE FOOD</div>
          </div>
        </div>

        {/* visibleModal 값이 true && result(룰렛이 다돌아간 상태를 저장) 이 true 일 때만 MainModal 컴포넌트를 표시 */}
        {visibleModal && result && (
          <MainModal
            inputValue={inputValue}
            food1={food1}
            result={result}
            handleClick={handleClick}
          />
        )}
      </BackgroundImage>
    </>
  );
};

export default Main;
