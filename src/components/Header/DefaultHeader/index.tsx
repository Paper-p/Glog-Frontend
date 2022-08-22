import React from "react";
import AfterLoginHeader from "../UserHeader/";
import { Link } from "react-router-dom";
import * as S from "./style";
import * as I from "../../../Assets/svg";

const Header: React.FC = () => {
  return (
    <>
      <S.Container>
        <S.Inner>
          <Link to="/">
            <S.Logo>
              <I.MainLogo />
            </S.Logo>
          </Link>
          {localStorage.getItem("login-token") ? (
            <AfterLoginHeader />
          ) : (
            <S.Login>
              <S.HamburgerBtn>
                <I.HamburgerButton />
              </S.HamburgerBtn>
              <ul>
                <Link to="/signin">
                  <li>login</li>
                </Link>
                <Link to="/signup">
                  <li className="signup">sign up</li>
                </Link>
              </ul>
            </S.Login>
          )}
        </S.Inner>
        <S.BottomLine />
      </S.Container>
    </>
  );
};

export default React.memo(Header);
