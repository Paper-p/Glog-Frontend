import React, { useEffect } from "react";
import { SetterOrUpdater } from "recoil";
import * as S from "./style";

interface Props extends React.HTMLAttributes<HTMLElement> {
  setModal: SetterOrUpdater<boolean>;
}

function ModalLayout({ children, setModal }: Props) {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed; 
      top: -${window.scrollY}px; 
      overflow-y: scroll;
      width: 100%;`;
    return () => {
      const scrollY = document.body.style.top;
      document.body.style.cssText = "";
      window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
    };
  }, []);

  const onClick = () => {
    setModal(false);
  };

  return (
    <S.ModalLayout>
      <S.Background onClick={() => onClick}>{children}</S.Background>
    </S.ModalLayout>
  );
}

export default ModalLayout;
