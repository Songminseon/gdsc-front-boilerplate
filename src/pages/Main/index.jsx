import React from "react";
import styled from "styled-components";

import BottomNavigation from "../../layout/BottomNavigation";

//pages/Main/index.jsx

const Index = () => {
  return (
    <div className="bottom-navigation">
      <BottomNavigation activeNum={1} />
    </div>
  );
};

export default Index;
