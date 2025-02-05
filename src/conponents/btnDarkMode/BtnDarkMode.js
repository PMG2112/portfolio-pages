import { useEffect } from "react";
import "./style.css";
import { useLocalStorage } from "../../utils/useLocalStorage";

import sun from "./../../img/icons/light.png";
import moon from "./../../img/icons/dark.png";
import detectDarkMode from "../../utils/detectDarkMode";


const BtnDarkMode = () => {

  const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectDarkMode());


  useEffect(() => {
    if (darkMode === 'dark') {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark');

    }
  }, [darkMode]);

  //lisen the change of sistems setting
  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark')
      .addEventListener('change', (event) => {
        const newColorScheme = event.matches ? 'dark' : 'light';
        setDarkMode(newColorScheme)
      })
  }, [setDarkMode])

  const toggleDarkMode = () => {
    setDarkMode((currentValue) => {
      return currentValue === 'light' ? 'dark' : 'light';
    });
  }

  const btnNormal = "dark-mode-btn";
  const btnActive = "dark-mode-btn dark-mode-btn--active";

  return (
    <button className={darkMode === 'dark' ? btnActive : btnNormal} onClick={toggleDarkMode}>
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
}

export default BtnDarkMode;