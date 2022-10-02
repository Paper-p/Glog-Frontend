import Header from "../../../Default/Header";
import * as S from "./style";
import * as I from "../../../../Assets/svg";

const SetName: React.FC = () => {
  return (
    <>
      <Header />
      <S.SignupWrapper>
        <S.SignupBox>
          <S.InputWrapper>
            <S.SortInput>
              <S.StyledSvg>
                <I.SetName />
              </S.StyledSvg>
              <S.InputName placeholder="사용하실 닉네임을 입력해주세요" />
            </S.SortInput>
          </S.InputWrapper>
          <S.SignupButton>완료</S.SignupButton>
        </S.SignupBox>
      </S.SignupWrapper>
    </>
  );
};

export default SetName;
