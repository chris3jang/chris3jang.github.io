import React from 'react'
import Link from 'gatsby-link'

import profpic from './../../public/static/profpic.jpg'

import allist from './../../public/static/ALListProject.png'
import uttt from './../../public/static/uttt.png'

import reacticon from './../../public/static/ReactIcon.png'
import nodejsicon from './../../public/static/NodeJsIcon.png'
import expressicon from './../../public/static/ExpressIcon.png'
import mongodbicon from './../../public/static/MongoDbIcon.png'
//import css3icon from './../../public/static/CSS3Icon.png'
import css3icon from './CSS3Icon.png'

import webpackicon from './../../public/static/WebpackIcon.png'
import passportjsicon from './../../public/static/PassportJsIcon.png'
import jwticon from './../../public/static/JWTIcon.png'
import socketioicon from './../../public/static/Socketioicon.png'

import transimage from './../../public/static/transimage.png'
import transimagebw from './../../public/static/transimageblackwhite.png'



import githubicon from './../../public/static/GitHubIcon.png'
import linkedinicon from './../../public/static/LinkedInIcon.png'
import gmailicon from './../../public/static/GmailIcon.png'

import favi from './../../public/static/favi.png'

import indexStyles from "../styles/index.module.css"
import './portfolio.css';

import Project from './project.js'
import '../styles/index.module.css'

import resume from './../../public/static/resume.pdf'


const IndexPage = () => (

  <div>
    <section style={{ 
        backgroundImage: `url(${transimagebw})`,
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: '100%',
        height: 700, 
        boxShadow: 'inset 0 0 0 1000px rgba(42,135,208, .7)',
        position: 'relative',
        display: 'block'
    }}>
      <section>
        <div style={{ textAlign: 'center', fontFamily: 'arimo', color: 'white', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}>
          <h1 style={{ fontSize: 50}}>Thanks for stopping by.</h1>
          <h1 style={{}}>My name is Chris Jang.</h1>
          <h1 style={{}}>I'm a web developer based in NYC.</h1>
          <div style={{ height: 30}}></div>
          <nav className={indexStyles.navigation}>
            <a href={'#'} 
              onClick={(e) => {
                e.preventDefault(); 
                document.getElementById('projects').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
              }} 
              className={indexStyles.navButton}>PROJECTS
            </a>
            <a href={resume} className={indexStyles.navButton}>RESUME</a>
            <a href={'#'} 
              onClick={(e) => {
                e.preventDefault(); 
                document.getElementById('contact').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
              }} 
              className={indexStyles.navButton}>CONTACT
            </a>
          </nav>
        </div>
      </section>
    </section>

    <section id={'projects'} style={{backgroundColor: 'white', zIndex: -2}}>
      <h1 className={indexStyles.heading}>PROJECTS</h1>
      <div className={indexStyles.projects}>
        <div className={indexStyles.proj}>
          <div className={indexStyles.projCard}>
            <div className={indexStyles.imgContainer}>
              <div className={indexStyles.overlay}></div>
              <div className={indexStyles.buttonsContainer}>
                <a className={indexStyles.overlayButton} href={"https://allist.herokuapp.com/"}>Live</a>
                <a className={indexStyles.overlayButton} href={"https://github.com/chris3jang/allist"}>Github</a>
              </div>
              <img className={indexStyles.projImg} src={allist}></img>
            </div>
            <div>
              <ul className={indexStyles.flexContainer}>
                <li><img src={reacticon}></img></li>
                <li><img src={nodejsicon}></img></li>
                <li><img src={expressicon}></img></li>
                <li><img src={mongodbicon}></img></li>
                <li><img src={css3icon}></img></li>
                <li><img src={webpackicon}></img></li>
                <li><img src={passportjsicon}></img></li>
                <li><img src={jwticon}></img></li>
              </ul>
              <p style={{fontFamily: 'arimo', padding: 10}}>ALList is a personalized CRUD list-making app for documenting practical and arbitrary data.  Features a recursive subcategorizing functionality that popular list apps lack.  Built on the MERN stack with Passport.js and JWT for user auth.</p>
            </div>
          </div>
        </div>
        <div className={indexStyles.proj}>
          <div className={indexStyles.projCard}>
            <div className={indexStyles.imgContainer}>
              <div className={indexStyles.overlay}></div>
              <div className={indexStyles.buttonsContainer}>
                <a className={indexStyles.overlayButton} href={"https://ulttitato.herokuapp.com/"}>Live</a>
                <a className={indexStyles.overlayButton} href={"https://github.com/chris3jang/UTTT"}>Github</a>
              </div>
              <img className={indexStyles.projImg} src={uttt}></img>
            </div>
            <div>
              <ul className={indexStyles.flexContainer}>
                <li><img src={reacticon}></img></li>
                <li><img src={nodejsicon}></img></li>
                <li><img src={expressicon}></img></li>
                <li><img src={css3icon}></img></li>
                <li><img src={socketioicon}></img></li>
              </ul>
              <p style={{fontFamily: 'arimo', padding: 10}}>UTTT is an implementation for the classic Ultimate Tic Tac Toe board game, built with React.js for mulitplayer games both locally in a single browser or in online real time from separate browsers using Socket.io.</p>
            </div>
          </div>  
        </div>
      </div>

    </section>


    <section>
      <div className={indexStyles.footer}>
        <h1 id={'contact'} style={{ fontFamily: 'arimo', color: 'white' }}>Contact</h1>
        <a href={"https://www.github.com/chris3jang"}><img style={{ height: 50, width: 'auto', margin: '0 20px' }}src={githubicon}></img></a>
        <a href={"mailto:chris3jang@gmail.com"}><img style={{ height: 50, width: 'auto', margin: '0 20px' }}src={gmailicon}></img></a>
        <a href={"https://www.linkedin.com/in/chris3jang"}><img style={{ height: 50, width: 'auto', margin: '0 20px' }}src={linkedinicon}></img></a>
      </div>
    </section>

  </div>
)

export default IndexPage


/*
<h1>Hi people</h1>
<p>Welcome to your new Gatsby site.</p>
<p>Now go build something great.</p>
<Link to="/page-2/">Go to page 2</Link>

<section>
      <div style={{position: 'relative'}}>
        <div style={{position: 'absolute', width: '100%', height: '100%', backgroundColor: 'rgba(42,135,208)', zIndex: 1, opacity: .5}}></div>
        <img src={transimage} style={{width: '100%', verticalAlign: 'top', filter: 'grayscale(1)', position: 'fixed'}}></img>
      </div>
    </section>


*/