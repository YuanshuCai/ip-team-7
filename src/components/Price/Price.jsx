import { useEffect, useState } from "react";
import "./Price.scss";

const Price = ({
  fullPrice,
  currentPrice,
  amountThemePacks,
  amountChannels,
  amountPremiums,
}) => {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 142;
      setIsScrolledToBottom(isBottom);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`checkout ${isScrolledToBottom ? "checkout--top" : ""}`}>
      <div className="checkout__inner">
        <div className="checkout__content">
          <div className="checkout__title">
            <h2 className="checkout__heading">Total Price:</h2>
            <div className="checkout__prices">
              <p className="checkout__price checkout__price--current">
                {currentPrice}$/MON
              </p>
              <p className="checkout__price checkout__price--full">
                {fullPrice}$/MON
              </p>
            </div>
          </div>
          <div className="checkout__list">
            {amountThemePacks > 0 && (
              <p>
                Added {amountThemePacks} theme{" "}
                {amountThemePacks > 1 ? "packs" : "pack"}
              </p>
            )}
            {amountChannels > 0 && (
              <p>
                Added {amountChannels}{" "}
                {amountChannels > 1 ? "channels" : "channel"}
              </p>
            )}
            {amountPremiums > 0 && (
              <p>
                Added {amountPremiums}{" "}
                {amountPremiums > 1 ? "premiums" : "premium"}
              </p>
            )}
          </div>
        </div>
        <button className="checkout__button">Cart</button>
      </div>
    </div>
  );
};

export default Price;
