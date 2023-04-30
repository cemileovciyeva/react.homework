import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src="./images/Logo.svg"  alt="" />
          <p>Organick</p>
        </div>
        <nav className="navigation">
          <Link to="/" className="link">Home</Link>
          <Link to="/" className="link">About</Link>
          <div className="pages">
            <Link to="/" className="link">Pages</Link>
            <img src="./images/Vector (7).svg" alt="" />
          </div>
          <Link to="/shop" className="link">Shop</Link>
          <Link to="/" className="link">Projects</Link>
          <Link to="/" className="link">News</Link>
        </nav>
        <div className="searchCart">
          <div className="search">
            <input type="text"/>
            <div className="icon">
              <img src="./images/Vector (4).svg" alt="" />
            </div>
          </div>
          <div className="cart">
            <div className="cartIcon">
              <img src="./images/Icon.svg" alt="" />
            </div>
            Cart (0)
          </div>
        </div>
      </div>
    </header>
  );
};

// export default Header;
