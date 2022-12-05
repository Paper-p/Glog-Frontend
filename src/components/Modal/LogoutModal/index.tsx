import { logoutModalAtom } from "atoms";
import { Button, ModalLayout } from "components/Common";
import { useRecoilState } from "recoil";
import * as S from "./style";

function LogoutModal() {
  const [, setLogoutModal] = useRecoilState(logoutModalAtom);

  return (
    <ModalLayout setModal={setLogoutModal}>
      <S.LogoutModal onClick={(e) => e.stopPropagation()}>
        <S.TitleText>로그아웃</S.TitleText>
        <S.Text>정말 로그아웃 하시겠어요?</S.Text>
        <S.ButtonBox>
          <Button>확인</Button>
          <Button onClick={() => setLogoutModal(false)}>취소</Button>
        </S.ButtonBox>
      </S.LogoutModal>
    </ModalLayout>
  );
}
export default LogoutModal;
