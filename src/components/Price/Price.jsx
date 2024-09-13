import "./Price.scss";

const Price = ({
  fullPrice,
  currentPrice,
  amountThemePacks,
  amounChannels,
  amountPremiums,
}) => {
  return (
    <div className="checkout">
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
          {amountThemePacks && (
            <p>
              Added {amountThemePacks} theme{" "}
              {amountThemePacks > 1 ? "packs" : "pack"}
            </p>
          )}
          {amounChannels && (
            <p>
              Added {amounChannels} {amounChannels > 1 ? "channels" : "channel"}
            </p>
          )}
          {amountPremiums && (
            <p>
              Added {amountPremiums}{" "}
              {amountPremiums > 1 ? "premiums" : "premium"}
            </p>
          )}
        </div>
      </div>
      <button className="checkout__button">Cart</button>
    </div>
  );
};

export default Price;
