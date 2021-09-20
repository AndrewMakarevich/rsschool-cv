
import './App.css';
import photo from './icons/avatar.jpg';
import { useContext, useState } from 'react';
import { Context } from './index';
import NavBar from './components/navBar';
import ContactsBlock from './components/contactsBlock';
import SoftAndHardSkills from './components/softAndHardSkills';
import { scaleBlock } from './components/scaleBlock';
import Footer from './components/footer';
import CodeExamples from './components/codeExamples';


function App() {
  const { cv } = useContext(Context);
  const [skill, setSkill] = useState('hardSkills');
  return (
    <div className="App">
      <header className="header">
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
      </header>

      <main className='main'>
        <section className="info-section">
          <h2 className="info-section__header">
            {cv.infoHeader.header}
          </h2>
          <section className="info-section__content">
            <article className="info-section__about">
              {
                cv.aboutMe.map((about, i) => {
                  return (
                    <article id={about.title} className="info-section__block" key={about.id}>
                      <h3 className="info-section__block__header">{about.title}</h3>
                      <div className="info-section__block__info">{about.text}</div>
                    </article>
                  )
                })
              }
            </article>
            <article className="info-section__experience">
              {
                cv.expAndEd.map((exp, i) => {
                  return (
                    <div id={exp.title} className="info-section__block" key={exp.id}>
                      <h3 className="info-section__block__header">{exp.title}</h3>
                      <div className="info-section__block__info">{exp.text}</div>
                    </div>
                  )
                })
              }

            </article>
          </section>
        </section>
        <CodeExamples />
      </main>


      <Footer page={skill} />
    </div >
  );
}

export default App;
