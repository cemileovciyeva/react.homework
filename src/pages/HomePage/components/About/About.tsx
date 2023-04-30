import "./About.css";
export const About = () => {
  return (
    <section className="second">
      <div className="about">
        <div className="container3">
          <div className="aboutContent">
            <p className="aboutUs">About Us</p>
            <h3>We Believe in Working Accredited Farmers</h3>
            <p className="simply">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <div className="veganFood">
              <div className="imgVegan">
                <img src="./images/Vegan Food.svg" alt="" />
              </div>
              <div className="veganContent">
                <h4>Organic Foods Only</h4>
                <p>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </div>
            <div className="mailbox">
              <div className="imgMailbox">
                <img src="./images/Mailbox Quality.svg" alt="" />
              </div>
              <div className="mailboxContent">
                <h4>Quality Standards</h4>
                <p>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </div>
            <button className="shop">
              Shop Now
              <img src="./images/Vector (5).svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
