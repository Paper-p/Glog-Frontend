import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage, SigninPage, SetNamePage, SetMainPage } from "./pages";
import GlobalStyle from "./shared/GlobalStyles";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SetMainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
