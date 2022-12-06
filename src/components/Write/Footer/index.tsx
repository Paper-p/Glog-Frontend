import * as S from "./style";
import { useRecoilState } from "recoil";
import { tagAtom } from "Atoms";
import { useNavigate } from "react-router-dom";
import { WriteMode } from "types/WritePostType";

interface Props
  extends React.HTMLAttributes<HTMLDivElement | HTMLParagraphElement> {
  errorMessage: string;
  mode: WriteMode;
}

function WriteFooter({ mode, errorMessage, ...rest }: Props) {
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
          <p>{mode}</p>
        </div>
      </S.ButtonBox>
    </S.FooterLayout>
  );
}

export default WriteFooter;
