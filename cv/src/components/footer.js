import './footer.css';
import { useContext } from 'react';
import { Context } from '..';
import gitHubLogo from '../icons/logo_github_icon_143196.svg';

const Footer = ({ page }) => {
    const { footer } = useContext(Context);
    return (
        <footer className={`footer ${page}`}>
            <article className="footer__gitHubLink">
                <a href={footer.gitHubLink.link}><img className="footer__gitHubLink__logo" src={gitHubLogo} alt=""></img></a>
            </article>
            <article className="footer__author">
                <div>MADE BY</div>
                <div>{footer.addInfo.author}</div>
                <div>{footer.addInfo.yearOfCreation}</div>
            </article>
            <article className="footer__courseInfo">
                <a href={footer.courseInfo.courseLink}><img className='footer__courseInfo__logo' src={footer.courseInfo.logo} alt="" /></a>
            </article>
        </footer>

    )
};
export default Footer;