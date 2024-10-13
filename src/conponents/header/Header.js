import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <h1 className="header__title">
          <strong>Hi, I am <em>PMG</em></strong><br />
          a Frontend Developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating</p>
        </div>
        <a href="#!" className="btn">Download CV</a>
      </div>
    </header>
  );
}

export default Header;