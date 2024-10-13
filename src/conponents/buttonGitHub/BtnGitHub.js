import './style.css';
import iconGitHub from './../../img/icons/gitHub_black.png';


const BtnGitHub = ({ link }) => {
  return (
    <a href={link} target='_blank' rel="noreferrer" className="btn-outline">
      <img src={iconGitHub} alt="" />
      GitHub Repo
    </a>
  );
}

export default BtnGitHub;