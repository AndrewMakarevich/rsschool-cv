
import './App.css';
import photo from './icons/avatar.jpg';
import { useContext, useState } from 'react';
import { Context } from './index';
import NavBar from './components/navBar';
import ContactsBlock from './components/contactsBlock';
import SoftAndHardSkills from './components/softAndHardSkills';
import { loremIpsumLong } from './consts/consts';
import { scaleBlock } from './components/scaleBlock';
import Footer from './components/footer';
import CodeExamples from './components/codeExamples';

function App() {
  const { cv } = useContext(Context);
  const [skill, setSkill] = useState('hardSkills');
  return (
    <div className="App">
      <NavBar page={skill} />
      <section className="header-section">
        <article className="header-section__name headersSections">
          Andrew Makarevich
        </article>
        <div className="headersSections">
          <img className="header-section__photo" src={photo} alt=""></img>
        </div>
        <article className="header-section__contacts headersSections">
          <button onClick={() => scaleBlock('block__contacts')}>Contacts</button>
        </article>
      </section>
      <ContactsBlock page={skill} />
      <section className={`skills-section ${skill}`}>
        <h2 className="skills-section__header">skills
          <span className={`header__firstLine ${skill}`}></span>
        </h2>
        <div className="skills-section__buttons">
          <button
            className="buttons__hardSkills"
            onClick={() => {
              setSkill('hardSkills')
            }}
          >Hard
          </button>
          <button
            className="buttons__softSkills"
            onClick={() => {
              setSkill('softSkills')
            }}>
            Soft
          </button>
        </div>
        <SoftAndHardSkills page={skill} />
      </section>
      <section className="info-section">
        <article className="info-section__about">
          <h2 className="info-section__header">
            ABOUT
          </h2>
          {
            cv.aboutMe.map((about, i) => {
              return (
                <article className="info-section__block" key={i}>
                  <a name={about.title}></a>
                  <header className="info-section__block__header">{about.title}</header>
                  <div className="info-section__block__info">{about.text}</div>
                </article>
              )
            })
          }
        </article>
        <article className="info-section__experience">
          <h2 className="info-section__header">
            EXPERIENCE
          </h2>
          <div className="info-section__block">
            <header className="info-section__block__header">Higher education</header>
            <div className="info-section__block__info">{loremIpsumLong}</div>
          </div>
        </article>
      </section>
      <CodeExamples />
      <Footer page={skill} />
    </div >
  );
}

export default App;
