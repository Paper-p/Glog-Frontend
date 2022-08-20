import React, { useState } from "react";
import * as S from "./style";
import auth from "../../../request/auth";

const UserHeader: React.FC = () => {
  const [userName, setUserName] = useState("Unknown");
  const getMiniData = async () => {
    try {
      console.log(String(localStorage.getItem("login-token")));
      const res: any = await auth.getMiniProfile(
        "",
        "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqb25namluIiwidHlwZSI6ImFjY2VzcyIsImlhdCI6MTY2MDk3MzY2NiwiZXhwIjoxNjYwOTc0NTY2fQ.be4cuO1U_QzeLnscBdGUtVBITuE061K9pYY_NjeowCs"
      );

      if (res.status === 200) {
        setUserName(res.data.nickname);
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
