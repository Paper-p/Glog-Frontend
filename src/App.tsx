import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { MainPage, SigninPage, SetNamePage, SetMainPage } from "./pages";
import GlobalStyle from "./shared/GlobalStyles";

const App: React.FC = () => {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/first-signup" element={<SetMainPage />} />
            <Route path="/second-signup" element={<SetNamePage />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
};

export default App;
