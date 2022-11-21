import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import {
  MainPage,
  SigninPage,
  SetNamePage,
  SetMainPage,
  WritePage,
  DetailsPostPage,
  UserProfilePage,
} from "pages";
import GlobalStyle from "shared/GlobalStyles";
import { QueryClient, QueryClientProvider } from "react-query";

export default function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/signup/main" element={<SetMainPage />} />
            <Route path="/signup/name" element={<SetNamePage />} />
            <Route path="/write" element={<WritePage />} />
            <Route path="/post/:postId" element={<DetailsPostPage />} />
            <Route path="/:nickname" element={<UserProfilePage />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </QueryClientProvider>
  );
}
