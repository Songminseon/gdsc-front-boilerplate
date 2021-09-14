import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { COLORS } from "../../components/Colors";
import mypageLogo from "../../assets/nav/mypage.svg";
import searchLogo from "../../assets/nav/search.svg";

import BottomNavigation from "../../layout/BottomNavigation";

const MainWrapper = styled.div`
  width: 100%;
  height: calc(100% - 70px);
  padding-top: 70px;

  .main-top-navigation {
    position: fixed; //position: fixed, absolute, relative 에 대해 알아보세요!
    width: 100%;
    max-width: 500px;
    top: 0px;
    height: 70px;
  }

  .top-guide-wrapper {
    padding: 16px; //네비게이션 상하좌우에 여백을 주기 위한 용도입니다.
    background-color: white;

    .everytime-text {
      color: ${COLORS.red};
      font-size: 10px;
    }

    .guide-contents-container {
      margin-top: 6px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      h2 {
        font-size: 16px;
        font-weight: 700;
      }

      .icon-wrapper {
        height: 20px;

        img {
          width: 20px;
          height: 20px;
        }
      }

      .mypage-icon {
        margin-left: 16px;
      }
    }
  }
`;

const Index = () => {
  return (
    <MainWrapper>
      {/* 상단 네비게이션 start*/}
      <div className="main-top-navigation">
        <div className="top-guide-wrapper">
          <p className="everytime-text">에브리타임</p>
          <div className="guide-contents-container">
            <h2>GDSC 웹</h2>
            <div className="icon-wrapper">
              <Link to="/search">
                <img src={searchLogo} alt="검색 아이콘" />
              </Link>
              <Link to="/mypage" className="mypage-icon">
                <img src={mypageLogo} alt="마이페에지 아이콘" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>여기에 나머지 부분을 구현해주세요</div>

      {/* 하단 네비게이션 start */}
      <div className="bottom-navigation">
        <BottomNavigation activeNum={1} />
      </div>
      {/* 하단 네비게이션 end */}
    </MainWrapper>
  );
};

export default Index;
