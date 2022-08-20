import React, { useEffect, useState } from "react";
import * as S from "./style";
import axios from "axios";
import { getAuth, getMyInfo } from "../../../Utils/getEndPoints";

const UserHeader: React.FC = () => {
  const [userName, setUserName] = useState("Unknown");

  const getRefresh = async (data: any) => {
    try {
      const res: any = await axios.put(getAuth.getrefresh(), {
        headers: {
          "Refresh-Token": data,
        },
      });
      if (res.status === 200) {
        console.log("success");
        localStorage.setItem("refresh-token", res.data.refreshToken);
        localStorage.setItem("login-token", res.data.accessToken);
        window.location.reload();
      }
    } catch (e: any) {
      console.log(e);
    }
  };
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
            if (localStorage.getItem("refresh-token")) {
              getRefresh(localStorage.getItem("refresh-token"));
            } else {
              localStorage.removeItem("login-token");
              window.location.reload();
            }
            break;
          case 404:
            localStorage.removeItem("login-token");
            localStorage.removeItem("refresh-token");
            window.location.reload();
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
