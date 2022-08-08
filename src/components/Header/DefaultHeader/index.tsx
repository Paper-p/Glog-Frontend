import React from "react";
import AfterLoginHeader from "../UserHeader/";
import { Link } from "react-router-dom";
import * as S from "./style";
import * as I from "../../../Assets/svg";

interface props {
  isLogined: boolean;
}

const Header: React.FC<props> = ({ isLogined }) => {
  return (
    <>
      <S.Container>
        <S.Inner>
          <Link to="/">
            <S.Logo>
              <I.MainLogo />
            </S.Logo>
          </Link>
          {isLogined === false ? (
            <S.Login>
              <ul>
                <Link to="/signin">
                  <li>login</li>
                </Link>
                <Link to="/signup">
                  <li>sign up</li>
                </Link>
              </ul>
            </S.Login>
          ) : (
            <AfterLoginHeader />
          )}
        </S.Inner>
        <S.BottomLine />
      </S.Container>
    </>
  );
};

export default Header;
