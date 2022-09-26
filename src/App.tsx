import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage, SigninPage, SignupPage } from "./pages";
import GlobalStyle from "./shared/GlobalStyles";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
