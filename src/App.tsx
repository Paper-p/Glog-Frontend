import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import {
  MainPage,
  SigninPage,
  SetNamePage,
  SetMainPage,
  PostPage,
} from "pages";
import GlobalStyle from "shared/GlobalStyles";

export default function App() {
  return (
    <>
      <RecoilRoot>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/signup/main" element={<SetMainPage />} />
            <Route path="/signup/name" element={<SetNamePage />} />
            <Route path="/post" element={<PostPage />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </>
  );
}
