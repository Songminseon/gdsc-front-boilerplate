import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { COLORS } from "../../components/Colors";

const SettingWrapper = styled.div`
  input[type="checkbox"] {
    display: inline-block;
    width: 12px;
    height: 12px;
    border-radius: 100%;
    border: 1px solid ${COLORS.grey_400};
  }

  input[type="checkbox"]:checked {
    width: 12px;
    height: 12px;
    border: none;
    border-radius: 100%;
    background-color: ${COLORS.red};
  }

  .input-container {
    border-radius: 5px;
    border: 1px solid ${COLORS.grey_400};
  }
`;

const Index = () => {
  const [setting, setSetting] = useState({
    isMine: false,
    isHot: false,
    isRealTime: false,
  });

  const onChangeCheck = (e) => {
    if (e.target.checked) {
      const newObj = { ...setting, [e.target.name]: true };
      window.localStorage.setItem("setting", JSON.stringify(newObj));
      setSetting(newObj);
    } else {
      const newObj = { ...setting, [e.target.name]: false };
      window.localStorage.setItem("setting", JSON.stringify(newObj));
      setSetting(newObj);
    }
  };

  useEffect(() => {
    const storageJson = JSON.parse(window.localStorage.getItem("setting"));
    setSetting({
      isMine: storageJson.isMine,
      isRealTime: storageJson.isRealTime,
      isHot: storageJson.isHot,
    });
  }, []);

  return (
    <SettingWrapper>
      <div className>navigation</div>
      <div className="input-container">
        <div className="select-wrapper">
          <input
            type="checkbox"
            name="isMine"
            id="isMine"
            checked={setting.isMine}
            onChange={onChangeCheck}
          />
          <label htmlFor="isMine">즐겨찾는 게시판</label>
        </div>
        <div className="select-wrapper">
          <input
            type="checkbox"
            name="isHot"
            id="isHot"
            checked={setting.isHot}
            onChange={onChangeCheck}
          />
          <label htmlFor="isHot">HOT 게시판</label>
        </div>
        <div className="select-wrapper">
          <input
            type="checkbox"
            name="isRealTime"
            id="isRealTime"
            checked={setting.isRealTime}
            onChange={onChangeCheck}
          />
          <label htmlFor="isRealTime">실시간 인기글</label>
        </div>
      </div>
    </SettingWrapper>
  );
};

export default Index;
