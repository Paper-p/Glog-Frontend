import React, { useEffect, useState } from "react";
import * as S from "./style";
import axios from "axios";
import { getAuth, getUser } from "../../../Utils/getEndPoints";

const UserHeader: React.FC = () => {
  const [userName, setUserName] = useState("");

  const reissuingTokens = async () => {
    try {
      const refreshToken = String(localStorage.getItem("refresh-token"));
      const res: any = await axios({
        method: "patch",
        headers: {
          RefreshToken: refreshToken,
        },
        url: getAuth.reissuingTokens(),
      });

      if (res.status === 200) {
        localStorage.setItem("refresh-token", res.data.refreshToken);
        localStorage.setItem("login-token", res.data.accessToken);
      }
    } catch (e: any) {
      console.log(e);
      localStorage.removeItem("login-token");
      localStorage.removeItem("refresh-token");
    }
  };

  useEffect(() => {
    const getMiniProfile = async () => {
      try {
        const token = String(localStorage.getItem("login-token"));
        const res: any = await axios.get(getUser.getminiprofile(), {
          headers: {
            Authorization: "Bearer " + token,
          },
        });

        if (res.status === 200) {
          setUserName(`${res.data.nickname}`);
        }
      } catch (e: any) {
        console.log(e);

        if (localStorage.getItem("refresh-token")) {
          reissuingTokens();
        } else {
          localStorage.removeItem("login-token");
          localStorage.removeItem("refresh-token");
        }
      }
    };
    getMiniProfile();
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

export default React.memo(UserHeader);
