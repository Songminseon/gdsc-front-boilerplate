import React, { useState } from "react";
import styled from "styled-components";

import MainButton from "../../../components/button/MainButton";
import MainInput from "../../../components/input/MainInput";

const MainWrapper = styled.div`
  .input-wrapper {
    margin: 8px 12px 0px 12px;
  }

  .button-wrapper {
    margin: 16px 12px 0px 12px;
  }
`;

const Index = () => {
  const [isFocus, setIsFocus] = useState(false);

  const handleFocus = () => {
    if (isFocus) {
      setIsFocus(false);
    } else {
      setIsFocus(true);
    }
  };
  return (
    <MainWrapper>
      {!isFocus && <div>로고 이미지랑 텍스트 잘 해주세용.</div>}
      <div className="input-wrapper">
        <MainInput handleFocus={handleFocus} />
      </div>
      <div className="input-wrapper">
        <MainInput handleFocus={handleFocus} />
      </div>
      <div className="button-wrapper">
        <MainButton text="로그인" onClick={() => alert("!!")} />
      </div>
      {!isFocus && <div>회원가입 link사용해서 해주세용</div>}
    </MainWrapper>
  );
};

export default Index;
