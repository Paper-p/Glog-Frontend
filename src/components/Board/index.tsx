import React, { useState } from "react";
import { useEffect } from "react";
import auth from "../../request/auth";
import * as S from "./style";

const BoardPage: React.FC = () => {
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    const getBox = async () => {
      try {
        const res: any = await auth.getList(0, 5);
        setList(res.data.list);
      } catch (e: any) {
        console.log(e);
      }
    };
    getBox();
  }, []);

  console.log(list);

  const getDate = (data: Date): string => {
    const month = data.getMonth() + 1;
    return `${data.getFullYear()}-${
      month < 10 ? `0${month}` : month
    }-${data.getDate()}`;
  };

  return (
    <>
      <S.Container>
        {list?.map((idx) => (
          <S.Box key={idx.id}>
            <S.Title>{idx.title}</S.Title>
            <S.Date>{getDate(new Date(idx.createdAt))}</S.Date>
          </S.Box>
        ))}
      </S.Container>
    </>
  );
};

export default React.memo(BoardPage);
