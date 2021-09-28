import React, { useState } from "react";
import styled from "styled-components";

import MainInput from "../../../components/input/MainInput";
import MainButton from "../../../components/button/MainButton";

const MainWrapper = styled.div``;

const Index = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [major, setMajor] = useState("");

  const [errorNum, setErrorNum] = useState(0);

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangePassword = (e) => {
    const patternSpecial = /[~!@#$%^&*()_+|<>?:{}]/;
    const patternEng = /[a-zA-Z]/;
    const patternNum = /[0-9]/;

    if (
      !patternSpecial.test(e.target.value) ||
      !patternEng.test(e.target.value) ||
      !patternNum.test(e.target.value)
    ) {
      setErrorNum(1);
    } else {
      setErrorNum(0);
    }

    setPassword(e.target.value);
  };

  const onChangeRePassword = (e) => {
    setRePassword(e.target.value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };

  const onChangeMajor = (e) => {
    setMajor(e.target.value);
  };

  return (
    <MainWrapper>
      <MainInput
        value={id}
        type="text"
        onChange={onChangeId}
        placeholder="아이디를 입력해주세요."
      />
      <MainInput
        value={password}
        type="password"
        onChange={onChangePassword}
        placeholder="비밀번호 입력해주세요"
      />
      {errorNum === 1 && (
        <p style={{ color: "red" }}>비밀번호 조건이 일치하지 않습니다</p>
      )}
      <MainInput
        value={rePassword}
        type="password"
        onChange={onChangeRePassword}
        placeholder="비밀번호를 다시 입력해주세요."
      />
      <MainInput
        value={name}
        type="text"
        onChange={onChangeName}
        placeholder="이름을 입력해주세요."
      />
      <MainInput
        value={email}
        type="email"
        onChange={onChangeEmail}
        placeholder="이메일을 입력해주세요."
      />
      <MainInput
        value={nickname}
        type="text"
        onChange={onChangeNickname}
        placeholder="닉네임을 입력해주세요."
      />
      <MainInput
        value={major}
        type="text"
        onChange={onChangeMajor}
        placeholder="전공을 입력해주세요."
      />
      <MainButton text="회원가입" onClick={() => alert("회원가입")} />
    </MainWrapper>
  );
};

export default Index;
