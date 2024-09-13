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
            {amounChannels > 0 && (
              <p>
                Added {amounChannels}{" "}
                {amounChannels > 1 ? "channels" : "channel"}
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
