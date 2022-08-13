import React from "react";
import Header from "../Header/DefaultHeader";
import { ToastContainer } from "material-react-toastify";

const Home: React.FC = () => {
  return (
    <>
      <Header isLogined={false} />
      <ToastContainer />
    </>
  );
};

export default Home;
