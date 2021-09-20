
import { useContext } from 'react';
import { Context } from '../index';
import { burgerMenuScript } from './burgerMenuScript.js';
import './navBar.css';

const NavBar = ({ page }) => {
    const { cv } = useContext(Context);
    return (
        <nav className={`navBar ${page}BarStyle`}>

            <button className="navBar__burgerIcon" onClick={() => burgerMenuScript()}>
                <span className="burgerIcon__firstLine"></span>
                <span className="burgerIcon__secondLine"></span>
                <span className="burgerIcon__thirdLine"></span>
            </button>
            <section className={`navBar__buttonsBlock`}>
                {
                    cv.aboutMe.map(about => {
                        return (
                            <button className="navBar__buttonsBlock__button" key={about.id}>
                                <a href={`#${about.title}`}>{about.title}</a>
                                <span></span>
                            </button>
                        )
                    })
                }
                {
                    cv.expAndEd.map(ed => {
                        return (
                            <button className="navBar__buttonsBlock__button" key={ed.id}>
                                <a href={`#${ed.title}`}>{ed.title}</a>
                                <span></span>
                            </button>
                        )
                    })
                }
                <button className="navBar__buttonsBlock__button">
                    <a href="#Code examples">Code examples</a>
                    <span></span>
                </button>
            </section>



        </nav>
    )
}
export default NavBar;