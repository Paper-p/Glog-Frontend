import { loggedAtom, logoutModalAtom } from "atoms";
import { Button, ModalLayout } from "components/Common";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import TokenService from "util/TokenService";
import * as S from "./style";

function LogoutModal() {
  const [, setLogoutModal] = useRecoilState(logoutModalAtom);
  const [, setLogged] = useRecoilState(loggedAtom);
  const navigate = useNavigate();

  const onLogout = () => {
    setLogoutModal(false);
    TokenService.removeUser();
    setLogged(false);
    navigate("/");
  };

  return (
    <ModalLayout setModal={setLogoutModal}>
      <S.LogoutModal onClick={(e) => e.stopPropagation()}>
        <S.TitleText>로그아웃</S.TitleText>
        <S.Text>정말 로그아웃 하시겠어요?</S.Text>
        <S.ButtonBox>
          <Button onClick={onLogout}>확인</Button>
          <Button onClick={() => setLogoutModal(false)}>취소</Button>
        </S.ButtonBox>
      </S.LogoutModal>
    </ModalLayout>
  );
}
export default LogoutModal;
