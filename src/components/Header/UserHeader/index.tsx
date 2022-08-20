import React, { useEffect, useState } from "react";
import * as S from "./style";
import auth from "../../../request/auth";
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
