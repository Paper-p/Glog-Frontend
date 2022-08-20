import React, { useState } from "react";
import * as S from "./style";
import auth from "../../../request/auth";

const UserHeader: React.FC = () => {
  const [userName, setUserName] = useState("Unknown");
  const getMiniData = async () => {
    try {
      const token = String(localStorage.getItem("login-token"));
      const res: any = await auth.getMiniProfile(token);
      console.log(res.status);

      if (res.status === 200) {
        console.log(res.data);
        setUserName(`${res.data.nickname}`);
      }
    } catch (e: any) {
      console.log(e);
    }
  };

  getMiniData();
  return (
    <>
      <S.Login>
        <ul>
          <li>
            <S.ProfileCircle />
          </li>
          <li>{userName}</li>
        </ul>
      </S.Login>
    </>
  );
};

export default UserHeader;
