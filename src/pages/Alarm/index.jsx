import React from "react";
import styled from "styled-components";

import BottomNavigation from "../../layout/BottomNavigation";

const Index = () => {
  return (
    <div>
      <div className="bottom-navigation">
        <BottomNavigation activeNum={3} />
      </div>
    </div>
  );
};

export default Index;
