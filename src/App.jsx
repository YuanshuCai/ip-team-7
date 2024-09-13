import React, {useEffect, useState} from "react";
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
import premiums from "./assets/data/premiums.json";

function App() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedChannels, setSelectedChannels] = useState([]);
  const [selectedPremiums, setSelectedPremiums] = useState([]);

  const categoryPrice = selectedCategories.reduce((total, categoryId) => {
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

  const premiumPrice = selectedPremiums.reduce((total, premiumId) => {
    const premium = premiums.find((prem) => prem.id === premiumId);
    return total + (premium ? parseInt(premium.price) : 0);
  }, 0);

  const currentPrice = categoryPrice + premiumPrice;
  
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
          <Route path="/channel" element={<Navigate to="/channel/1" />} />
          <Route path="/channel/:id" element={<ChannelPage searchResults={selectedChannels} setSearchResults={setSelectedChannels} />} />
          <Route
            path="/premiums"
            element={
              <PremiumPage
                selectedPremiums={selectedPremiums}
                setSelectedPremiums={setSelectedPremiums}
              />
            }
          />
        </Routes>
        <Price
          fullPrice={Math.round(currentPrice * 1.2)}
          currentPrice={currentPrice}
          amountThemePacks={selectedCategories?.length}
          amountChannels={selectedChannels?.length}
          amountPremiums={selectedPremiums?.length}
        />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
