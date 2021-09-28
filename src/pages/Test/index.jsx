import React, { useState } from "react";
import Modal from "react-modal";
import { customStyles } from "../../components/modalOption";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>모달열기</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => setIsOpen(false)}
        ariaHideApp={false}
        contentLabel="테스트 모달"
        style={customStyles}
      >
        <div>test modal</div>
      </Modal>
    </div>
  );
};

export default Index;
