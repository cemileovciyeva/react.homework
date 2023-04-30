import "./Newslatteer.css";

export const Newslatteer = () => {
  return (
    <section className="second">
      <div className="newslatteerContainer">
        <div className="newslatteer">
          <div>
            <p>Subscribe to our Newsletter</p>
          </div>
          <div className="buttonn">
            <input
              type="email"
              name="email"
              placeholder=" Your Email Address"
            />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};
