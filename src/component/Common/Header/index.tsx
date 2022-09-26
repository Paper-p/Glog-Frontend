import * as S from "./style";
import * as I from "../../../Assets/svg/index";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <S.HeaderBox>
      <S.Header>
        <S.HeaderElementsList>
          <S.HeaderElements>
            <I.GlogLogo />
          </S.HeaderElements>
          <Link to={"/"}>
            <S.HeaderElements>홈</S.HeaderElements>
          </Link>
          <Link to={"/feed"}>
            <S.HeaderElements>게시물 작성</S.HeaderElements>
          </Link>
        </S.HeaderElementsList>
      </S.Header>
      <S.Header className="right-part">
        <S.HeaderElementsList>
          <Link to={"/signin"}>
            <S.HeaderElements>로그인</S.HeaderElements>
          </Link>
          <Link to={"/signup"}>
            <S.HeaderElements>회원가입</S.HeaderElements>
          </Link>
        </S.HeaderElementsList>
      </S.Header>
    </S.HeaderBox>
  );
};

export default Header;
