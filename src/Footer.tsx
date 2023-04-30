import "./Footer.css";
export const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="contactUs">
          <h2>Contact Us</h2>
          <h4>Email</h4>
          <p>needhelp@Organia.com</p>
          <h4> Phone</h4>
          <p>666 888 888</p>
          <h4>Address</h4>
          <p>88 road, borklyn street, USA</p>
        </div>
        <hr />
        <div className="logoOrganic">
          <div className="organic">
            <img src="./images/Logo.svg" alt="" />
            <p>Organick</p>
          </div>
          <div className="paragraph">
            <p>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing{" "}
            </p>
          </div>
          <div className="follow">
            <div className="insta">
              {" "}
              <img src="./images/Insta.svg" alt="" />
            </div>
            <div className="fb">
              {" "}
              <img src="./images/Fb.svg" alt="" />
            </div>
            <div className="twiter">
              <img src="./images/Twiter.svg" alt="" />
            </div>
            <div className="pintrest">
              <img src="./images/Pintrest.svg" alt="" />
            </div>
          </div>
        </div>
        <hr />
        <div className="utilityPages">
          <h3>Utility Pages</h3>
          <h6>
            Style Guide <br />
            404 Not Found <br />
            Password Protected <br />
            Licences <br />
            Changelog
          </h6>
        </div>
      </div>
      <div className="copyright">
        <hr />
        <div className="span">
          <span className="span1">Copyright ©</span>{" "}
          <span className="span2"> Organick </span>{" "}
          <span className="span1">| Designed by</span>{" "}
          <span className="span2"> VictorFlow </span>{" "}
          <span className="span1">Templates - Powered by</span>{" "}
          <span className="span2"> Webflow</span>
        </div>
      </div>
    </footer>
  );
};
