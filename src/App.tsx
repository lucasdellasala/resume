import React from 'react';
import { URL_PROFILE_PIC } from './constants';
import { messages } from './messages';
import './App.css';
import githubLogo from './images/github.png';
import instagramLogo from './images/instagram.png';
import linkedinLogo from './images/linkedin.png';
import youtubeLogo from './images/youtube.png';

function App() {
  return (
    <div className="App">
      <div className='section'>
        <div className='profile-pic-container'>
          <img src={URL_PROFILE_PIC} className="profile-pic" alt="profile pic" />
        </div>
        <h1>Lucas Della Sala</h1>
        <h2>Full stack developer</h2>
        <p>{messages.aboutMeParagraph}</p>
      </div>
      <div className='section'>
        <h2>Work experience</h2>
        <div className='content'>
          <div className='section-item'>
            <h3>Backend Engineer</h3>
            <p>MODO | 10/2021 - Present</p>
            <p>{`Implementation of microservices (REST APIs) in Typescript with Express, Nest, MongoDB, and PostgreSQL.\nMonitoring and alerts with Datadog and Pino.\nTrunk based development with Github Actions.`}</p>
          </div>
          <div className='section-item'>
            <h3>Full Stack Engineer</h3>
            <p>Freelance with Embedx (Chile) | 10/2021 - 06/2022</p>
            <p>{`Integration Embedx Insurances Apis with VTEX IO (Ecommerce). Development with React (Hooks), GraphQL and Node with Typescript. QA and Support.`}</p>
          </div>
          <div className='section-item'>
            <h3>First Party Apps Tech Lead</h3>
            <p>VTEX | 7/2021 - 10/2021</p>
            <p>{`Implementation of frontend apps with React (Hooks) and GraphQL and creation of microservices in Node & Koa with Typescript. Teaching and code review for the Software Engineers team and for Partners. Functional analysis and leadership of meetings (daily, retro, backlog refinement, planning).`}</p>
          </div>
          <div className='section-item'>
            <h3>First Party Apps Engineer</h3>
            <p>VTEX | 11/2020 - 7/2021</p>
            <p>{`Implementation of frontend apps with React (Hooks) and GraphQL with Typescript. Creation of microservices in Node & Koa with Typescript. In charge of support for partners and customers.`}</p>
          </div>
          <div className='section-item'>
            <h3>Full Stack Web Developer</h3>
            <p>Freelance with Cultura Buzz (Spain) | 09/2020-10/2020</p>
            <p>{`Back End with NodeJS, Express and MongoDB. Front End in React with Hooks.`}</p>
          </div>
          <div className='section-item'>
            <h3>Physics and Chemistry Teacher</h3>
            <p>Buenos Aires Public Highschool | 2016 - 2021</p>
            <p>{`Up to four courses simultaneously (100 students). Practical laboratory classes. School support classes.`}</p>
          </div>
        </div>
      </div>
      <div className='section'>
        <h2>Education</h2>
        <div className='content education'>
          <div className='section-item first-child'>
            <h3>Bachelor of Computer Science</h3>
            <p>Universidad de Buenos Aires</p>
            <p>In progress, 2019 - Present📚</p>
          </div>
          <div className='section-item middle-child'>
            <h3>Bachelor of Economic Science</h3>
            <p>Universidad de Buenos Aires</p>
            <p>In progress, 2018 - Present📚</p>
          </div>
          <div className='section-item last-child'>
            <h3>Full Stack Development Course</h3>
            <p>Acámica</p>
            <p>08/2019 - 06/2020✅</p>
          </div>
        </div>
      </div>
      <div className='section'>
        <div className='content media'>
          <a href="https://github.com/lucasdellasala/" target="_blank" rel="noreferrer">
            <div className='social-media-container'>
              <img src={githubLogo} className="social-media-logo" alt="profile pic"/>
            </div>
          </a>
          <a href="https://www.instagram.com/dellasalalucas" target="_blank" rel="noreferrer">
            <div className='social-media-container'>
              <img src={instagramLogo} className="social-media-logo" alt="profile pic"/>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/lucasdellasala/?locale=en_US" target="_blank" rel="noreferrer">
            <div className='social-media-container'>
              <img src={linkedinLogo} className="social-media-logo" alt="profile pic"/>
            </div>
          </a>
          <a href="https://www.youtube.com/channel/UCoXdnmepeg11cX_MheeS10w" target="_blank" rel="noreferrer">
            <div className='social-media-container'>
              <img src={youtubeLogo} className="social-media-logo" alt="profile pic"/>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
