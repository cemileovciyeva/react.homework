import "./Blog.css";
export const Blog = () => {
  return (
    <div className="container6">
      <div className="blog">
        <div className="blogContent">
          <p>News</p>
          <h3>
            Discover weekly content about <br /> organic food, & more
          </h3>
        </div>
        <div className="blogBtn">
          <button className="moreNews">
            More News
            <img src="./images/Vector (5).svg" alt="" />
          </button>
        </div>
      </div>

      <div className="blogImg">
        <div className="imgGreen">
          <img className="greenImg" src="./images/Photo (16).png" alt="" />
          <p className="date1">
            25 <br /> Nov
          </p>
          <div className="greenText">
            <div className="greenVector">
              <img src="./images/Vector (6).svg" alt="" />
              <p>By Rachi Card</p>
            </div>
            <h3>The Benefits of Vitamin D & How to Get It</h3>
            <h6>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </h6>
            <button className="blogBtn">
              Read More
              <img src="./images/Vector (5).svg" alt="" />
            </button>
          </div>
        </div>
        <div className="imgRed">
          <img className="greenImg" src="./images/Photo (17).png" alt="" />
          <p className="date1">
            25 <br /> Nov
          </p>
          <div className="greenText">
            <div className="greenVector">
              <img src="./images/Vector (6).svg" alt="" />
              <p>By Rachi Card</p>
            </div>
            <h3>Our Favourite Summertime Tommeto</h3>
            <h6>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum
            </h6>
            <button className="blogBtn">
              Read More
              <img src="./images/Vector (5).svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
