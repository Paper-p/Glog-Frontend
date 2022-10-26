import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import {
  MainPage,
  SigninPage,
  SetNamePage,
  SetMainPage,
  WritePage,
} from "pages";
import GlobalStyle from "shared/GlobalStyles";
import CheckLogin from "components/checkLogin";

export default function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CheckLogin />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/signup/main" element={<SetMainPage />} />
            <Route path="/signup/name" element={<SetNamePage />} />
            <Route path="/write" element={<WritePage />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}
