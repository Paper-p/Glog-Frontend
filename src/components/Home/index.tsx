import React from "react";
import BoardPage from "../Board";
import Header from "../Header/DefaultHeader";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <BoardPage />
    </>
  );
};

export default Home;
