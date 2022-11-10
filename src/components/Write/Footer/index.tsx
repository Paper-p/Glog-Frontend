import * as S from "./style";
import { useRecoilState } from "recoil";
import { tagAtom } from "atoms";
import { useNavigate } from "react-router-dom";

interface Props
  extends React.HTMLAttributes<HTMLDivElement | HTMLParagraphElement> {
  errorMessage: string;
}

function WriteFooter({ errorMessage, ...rest }: Props) {
  const [, setTag] = useRecoilState(tagAtom);
  const navigate = useNavigate();

  const onExit = () => {
    setTag([]);
    navigate("/");
  };

  return (
    <S.FooterLayout>
      <p className="error">{errorMessage}</p>
      <S.ButtonBox>
        <p onClick={onExit}>취소</p>
        <div {...rest}>
          <p>작성하기</p>
        </div>
      </S.ButtonBox>
    </S.FooterLayout>
  );
}

export default WriteFooter;
