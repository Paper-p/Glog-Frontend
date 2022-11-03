import * as S from "./style";
import Button from "components/Common/Button";
import { useRecoilState } from "recoil";
import { tagAtom } from "atoms/AtomContainer";
import { useNavigate } from "react-router-dom";
import { MouseEventHandler } from "react";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  errorMessage: string;
}

function WriteFooter({ errorMessage, ...rest }: Props) {
  const [tag, setTag] = useRecoilState(tagAtom);
  const navigate = useNavigate();
  console.log(rest);

  const onExit = () => {
    setTag([]);
    navigate("/");
  };

  return (
    <S.Footer>
      <p className="error">{errorMessage}</p>
      <S.ButtonBox>
        <p onClick={onExit}>취소</p>
        <button {...rest}>
          <p>작성하기</p>
        </button>
      </S.ButtonBox>
    </S.Footer>
  );
}

export default WriteFooter;
