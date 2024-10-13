import Header from "../conponents/header/Header";

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <div className="container">
          <h1 className="title-1">Skills</h1>
          <ul className="content-list">
            <li className="content-list__item">
              <h2 className="title-2">Frontend</h2>
              <p>
                JavaScript, TypeSkript, ReactJS, Angular,Redux, HTML, CSS,
                NPM, BootStrap, MaterialUI, TailwindCS, StyledComponents
              </p>
            </li>
            <li className="content-list__item">
              <h2 className="title-2">Backend</h2>
              <p>
                NodeJS, MySQL, MondoDB, PHP, Laravel
              </p>
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}

export default Home;