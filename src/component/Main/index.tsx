import * as S from "./style";
import NotLoggedHeader from "../Common/Header/isNotLogged";

const Main: React.FC = () => {
  return (
    <S.Background>
      <NotLoggedHeader />
    </S.Background>
  );
};

export default Main;
