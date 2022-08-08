import React from "react";
import * as S from "./style";

const UserHeader: React.FC = () => {
  return (
    <>
      <S.Login>
        <ul>
          <li>
            <S.ProfileCircle />
          </li>
          <li>안진형님</li>
        </ul>
      </S.Login>
    </>
  );
};

export default UserHeader;
