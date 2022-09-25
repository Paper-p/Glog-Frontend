import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages";
import GlobalStyle from "./shared/GlobalStyles";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
