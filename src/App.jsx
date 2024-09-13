import React, { useState } from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Price from "./components/Price/Price";
import PackPage from "./pages/PackPage/PackPage";
import NavBar from "./components/NavBar/NavBar";
import PremiumPage from "./pages/PremiumPage/PremiumPage";
import categories from "./assets/data/channel_category.json";
import channels from "./assets/data/channels.json";
import ChannelPage from "./pages/ChannelPage/ChannelPage.jsx";

function App() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedChannels, setSelectedChannels] = useState([]);
  const [selectedPremiums, setSelectedPremiums] = useState([]);

  const fullPrice = selectedCategories.reduce((total, categoryId) => {
    const category = categories.find((cat) => cat.category_id === categoryId);
    if (category) {
      const categoryPrice = category.channels.reduce((sum, channelId) => {
        const channel = channels.find((ch) => ch.id === channelId);
        return sum + (channel ? parseInt(channel.price) : 0);
      }, 0);
      return total + categoryPrice;
    }
    return total;
  }, 0);

  return (
    <>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <PackPage
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
              />
            }
          />
          {/* <Route path="/channel" element={<ChannelPage/>}/> */}
          <Route path="/premiums" element={<PremiumPage />} />
          <Route path="/channel" element={<Navigate to="/channel/1" />} />
          <Route path="/channel/:id" element={<ChannelPage />} />
        </Routes>
        <Price
          fullPrice={80}
          currentPrice={fullPrice}
          amountThemePacks={selectedCategories?.length}
          amounChannels={selectedChannels?.length}
          amountPremiums={selectedPremiums?.length}
        />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
