import React, { useEffect, useState } from "react";
import * as S from "./style";
import axios from "axios";
import { getMyInfo } from "../../../Utils/getEndPoints";

const UserHeader: React.FC = () => {
  const [userName, setUserName] = useState("Unknown");

  useEffect(() => {
    const getMiniData = async () => {
      try {
        const token = String(localStorage.getItem("login-token"));
        const res: any = await axios.get(getMyInfo.getminiprofile(), {
          headers: {
            Authorization: "Bearer " + token,
          },
        });

        switch (res.status) {
          case 200:
            setUserName(`${res.data.nickname}`);
            break;
          case 401:
            // token refresh
            break;
          case 404:
            localStorage.removeItem("login-token");
            localStorage.removeItem("refresh-token");
            break;
        }
      } catch (e: any) {
        console.log(e);
      }
    };
    getMiniData();
  }, []);

  return (
    <>
      <S.Login>
        <ul>
          <li>
            <S.ProfileCircle />
          </li>
          <li>{userName}님</li>
        </ul>
      </S.Login>
    </>
  );
};

export default UserHeader;
