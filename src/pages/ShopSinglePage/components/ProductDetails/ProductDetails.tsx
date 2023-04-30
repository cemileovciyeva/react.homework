import "./ProductDetails.css";
export const ProductDetails = () => {
  return (
    <section className="second">
      <div className="container">
        <div className="productDetails">
          <div className="image">
            <h6>Millets</h6>
          </div>
          <div className="contentSingle">
            <h2>Health Pistachios</h2>
            <div className="star">
              <img src="./images/Star 7.svg" alt="" />
              <img src="./images/Star 7.svg" alt="" />
              <img src="./images/Star 7.svg" alt="" />
              <img src="./images/Star 7.svg" alt="" />
              <img src="./images/Star 7.svg" alt="" />
            </div>
            <div className="price">
              <span className="old">$20.00</span>
              <span className="new">$13.00</span>
            </div>
            <span>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </span>
            <div className="quantity">
              <p>Quantity :</p>
              <button className="one">1</button>
              <button className="add">
                Add To Cart
                <img src="./images/Vector (8).svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
