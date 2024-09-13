import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PackPage from "./pages/PackPage/PackPage";
import NavBar from "./components/NavBar/NavBar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<PackPage />} />
          {/* <Route path="/channel" element={<ChannelPage/>}/>
          <Route path="/channel" element={<PremiumPage/>}/> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
