import * as S from "./style";
import Button from "components/Common/Button";
import { useRecoilState } from "recoil";
import { tagAtom } from "atoms/AtomContainer";
import { useNavigate } from "react-router-dom";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  errorMessage: string;
}

function WriteFooter({ errorMessage, ...rest }: Props) {
  const [tag, setTag] = useRecoilState(tagAtom);
  const navigate = useNavigate();

  const onExit = () => {
    setTag([]);
    navigate("/");
  };

  return (
    <S.Footer>
      <S.Part>
        <Button width="100px" className="exit" onClick={onExit}>
          나가기
        </Button>
      </S.Part>
      <S.Part className="errorText">{errorMessage}</S.Part>
      <S.Part>
        <Button width="100px" className="submit" {...rest}>
          작성하기
        </Button>
      </S.Part>
    </S.Footer>
  );
}

export default WriteFooter;
