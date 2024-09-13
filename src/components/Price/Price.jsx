import { useEffect, useState } from "react";
import "./Price.scss";
import { useTranslation } from "react-i18next";

const Price = ({
  fullPrice,
  currentPrice,
  amountThemePacks,
  amounChannels,
  amountPremiums,
}) => {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
  const { t } = useTranslation();
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
            <h2 className="checkout__heading">{t("price_total")}:</h2>
            <div className="checkout__prices">
              <p className="checkout__price checkout__price--current">
                {currentPrice}$/{t("price_short_month")}
              </p>
              <p className="checkout__price checkout__price--full">
                {fullPrice}$/{t("price_short_month")}
              </p>
            </div>
          </div>
          <div className="checkout__list">
            {amountThemePacks > 0 && (
              <p>
                {t("price_added")} {amountThemePacks}{" "}
                {amountThemePacks > 1
                  ? `${t("price_themePacks")}`
                  : `${t("price_themePack")}`}
              </p>
            )}
            {amounChannels > 0 && (
              <p>
                {t("price_added")} {amounChannels}{" "}
                {amounChannels > 1
                  ? `${t("price_channels")}`
                  : `${t("price_channel")}`}
              </p>
            )}
            {amountPremiums > 0 && (
              <p>
                {t("price_added")} {amountPremiums}{" "}
                {amountPremiums > 1
                  ? `${t("price_premiums")}`
                  : `${t("price_premium")}`}
              </p>
            )}
          </div>
        </div>
        <button className="checkout__button">{t("price_cart_button")}</button>
      </div>
    </div>
  );
};

export default Price;
