import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import Home from "./components/Home/index";
import SignIn from "./components/Login/SignIn/index";
import SignUp from "./components/Login/SignUp/index";

const GlobalStyle = createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200&display=swap');
    font-family: 'Inter', sans-serif;  }
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          TEST
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
