import React, { useEffect, useState } from "react";
import * as S from "./style";
import axios from "axios";
import { getAuth, getMyInfo } from "../../../Utils/getEndPoints";

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
        localStorage.removeItem("refresh-token");
        localStorage.removeItem("login-token");
        localStorage.setItem("refresh-token", res.data.refreshToken);
        localStorage.setItem("login-token", res.data.accessToken);
        console.log("success");
      } else {
      }
    } catch (e: any) {
      console.log(e);
    }
  };

  useEffect(() => {
    const getMiniProfile = async () => {
      try {
        const token = String(localStorage.getItem("login-token"));

        const res: any = await axios.get(getMyInfo.getminiprofile(), {
          headers: {
            Authorization: "Bearer " + token,
          },
        });

        if (res.status === 200) {
          setUserName(`${res.data.nickname}`);
        } else {
          localStorage.removeItem("login-token");
          localStorage.removeItem("refresh-token");
          window.location.reload();
        }
      } catch (e: any) {
        console.log(e);
        /** status 401 일때*/
        if (localStorage.getItem("refresh-token")) {
          reissuingTokens();
        } else {
          localStorage.removeItem("login-token");
          localStorage.removeItem("refresh-token");
        }
      }
    };
    getMiniProfile();
    reissuingTokens();
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
