import React from 'react'
import Link from 'gatsby-link'

import profpic from './../../public/static/profpic.jpg'

import allist from './../../public/static/ALListProject.png'

import reacticon from './../../public/static/ReactIcon.png'
import nodejsicon from './../../public/static/NodeJsIcon.png'
import expressicon from './../../public/static/ExpressIcon.png'
import mongodbicon from './../../public/static/MongoDbIcon.png'
import css3icon from './../../public/static/CSS3Icon.png'
import webpackicon from './../../public/static/WebpackIcon.png'
import passportjsicon from './../../public/static/PassportJsIcon.png'
import jwticon from './../../public/static/JWTIcon.png'



import githubicon from './../../public/static/GitHubIcon.png'
import linkedinicon from './../../public/static/LinkedInIcon.png'
import gmailicon from './../../public/static/GmailIcon.png'


const IndexPage = () => (

  <div>
  	<img src={profpic} style={
    	{ height: 120, 
    		width: 'auto', 
    		display: 'block', 
    		marginLeft: 'auto', 
    		marginRight: 'auto'}
    	}>
	</img>
	<div style={{textAlign: 'center'}}>
		<nav>
			<a href={'#'} 
        onClick={(e) => {
          e.preventDefault(); 
          document.getElementById('projects').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
        }} 
        style={{paddingLeft: 80, paddingRight: 80, fontFamily: 'verdana'}}>Projects
      </a>
			<a href={'#'} 
        onClick={(e) => {
          e.preventDefault(); 
          document.getElementById('contact').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
        }} 
        style={{paddingLeft: 80, paddingRight: 80, fontFamily: 'verdana'}}>Contact
      </a>
		</nav>
	</div>

	<section style={{ marginTop: 60, marginBottom: 60 }}>
    <div style={{ textAlign: 'center', backgroundColor: 'red' }}>
      <h1 style={{ fontFamily: 'verdana'}}>My name is Chris Jang.  I'm a web developer based in Brooklyn, New York.</h1>
    </div>
  </section>

  <section>






    <div>
      <h1 id={'projects'} style={{ fontFamily: 'verdana' }}>Projects</h1>
        <div id={'sidewaysProjectContainer'} 
          style={{ 
            display: 'grid', 
            width: '100%', height: 500, 
            backgroundColor: '#EDEDED',
            gridTemplateColumns: '5% 43% 4% 43% 5%',
            gridTemplateRows: '12% 62% 13% 12%'
          }}>
          <div style={{ boxShadow: '0px 0px 18px', gridColumn: '2/3', gridRow: '2/4', borderRadius: '4px 4px 4px 4px'  }}>
            <div style={{ gridColumn: '2/3', gridRow: '2/3', 
              display: 'grid' }}>
                <img style={
                  { gridRow: '2/3',
                    width: '100%', 
                    height: 'auto',
                    borderRadius: '4px 4px 0px 0px' }}
                  src={allist}>
                </img>
            </div>
            <div style={{ gridColumn: '2/3', gridRow: '3/4', textAlign: 'center', fontFamily: 'verdana' }}>
              <h2>ALList</h2>
            </div>
          </div>
          <div style={{ gridColumn: '4/5', gridRow: '2/4' }}>
            <div style={{ backgroundColor: '#EDEDED' }}>
              <p style={{ fontFamily: 'verdana'}}>ALList is a personalized CRUD list-making app for documenting practical and arbitrary data.  Features a recursive subcategorizing functionality that popular list apps lack.  Built on the MERN stack with Passport.js and JWT for user auth.</p>
              <div style={{ display: 'block' }}>
                <img src={reacticon} style={{ height: 50, width: 'auto', display: 'inline-block'}}></img>
                <img src={nodejsicon} style={{ height: 50, width: 'auto', display: 'inline-block'}}></img>
                <img src={css3icon} style={{ height: 50, width: 'auto', display: 'inline-block'}}></img>
                <img src={expressicon} style={{ height: 50, width: 'auto', display: 'inline-block'}}></img>
              </div>
              <div style={{ display: 'block' }}>
                <img src={webpackicon} style={{ height: 50, width: 'auto', display: 'inline-block'}}></img>
                <img src={passportjsicon} style={{ height: 50, width: 'auto', display: 'inline-block'}}></img>
                <img src={jwticon} style={{ height: 50, width: 'auto', display: 'inline-block'}}></img>
                <img src={mongodbicon} style={{ height: 50, width: 'auto', display: 'inline-block'}}></img>
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: 40}}></div>








        <div id={'verticalProjectsContainer'} style={{ display: 'block', textAlign: 'center' }}>
          <div style={{ display: 'inline-block', boxShadow: '0px 0px 18px', borderRadius: 5, backgroundColor: '#EDEDED', verticalAlign: 'top', margin: '20px' }}>
            <div style={{ display: 'block', width: 450/*42vw*/, margin: 'auto' }}>
              <img style={
                { width: '100%', 
                  height: 'auto',
                  borderRadius: '5px 5px 0px 0px' }}
                src={allist}>
              </img>
            </div>
            <div style={{ display: 'block', height: 120/*'20vh'*/, 
              //backgroundColor: '#EDEDED', 
              borderRadius: '0px 0px 5px 5px' }}>
              <h4 style={{ width: '30vw' , borderTop: '1px solid grey', margin: 'auto' }}></h4>
              <div style={{ backgroundColor: '#EDEDED' }}>
                <div style={{ display: 'block' }}>
                  <img src={reacticon} style={{ height: 50, width: 'auto', display: 'inline-block'}}></img>
                  <img src={nodejsicon} style={{ height: 50, width: 'auto', display: 'inline-block'}}></img>
                  <img src={css3icon} style={{ height: 50, width: 'auto', display: 'inline-block'}}></img>
                  <img src={expressicon} style={{ height: 50, width: 'auto', display: 'inline-block'}}></img>
                </div>
                <div style={{ display: 'block' }}>
                  <img src={webpackicon} style={{ height: 50, width: 'auto', display: 'inline-block'}}></img>
                  <img src={passportjsicon} style={{ height: 50, width: 'auto', display: 'inline-block'}}></img>
                  <img src={jwticon} style={{ height: 50, width: 'auto', display: 'inline-block'}}></img>
                  <img src={mongodbicon} style={{ height: 50, width: 'auto', display: 'inline-block'}}></img>
                </div>
              </div>
            </div>
          </div>
          <div style={
            { display: 'inline-block', 
              verticalAlign: 'top',
              width: 450, 
              height: 408.64,
              borderRadius: 5,
              boxShadow: '0px 0px 18px',
              backgroundColor: '#EDEDED',
              margin: '20px'}}>
          </div>
        </div>
        <div style={{ display: 'block', textAlign: 'center' }}>
          <div style={
            { display: 'inline-block', 
              verticalAlign: 'top',
              width: 500, 
              height: 440.27,
              borderRadius: 5,
              boxShadow: '0px 0px 18px',
              backgroundColor: '#EDEDED',
              margin: '20px 0px' }}>
          </div>
          <div style={{ width: 48/*'5vw'*/, display: 'inline-block' }}></div>
          <div style={
            { display: 'inline-block', 
              verticalAlign: 'top',
              width: 500, 
              height: 440.27,
              borderRadius: 5,
              boxShadow: '0px 0px 18px',
              backgroundColor: '#EDEDED',
              margin: '20px 0px'}}>
          </div>
        </div>
    </div>
  </section>

  <section>
    <div>
      <h1 id={'contact'} style={{ fontFamily: 'verdana' }}>Contact</h1>
    </div>
  </section>

  <section>
    <div style={{ position: 'absolute', left: 0, width: '100%', padding: '5vh 0', backgroundColor: '#727272', textAlign: 'center' }}>
      <a href={"https://www.github.com/chris3jang"}><img style={{ height: 50, width: 'auto', margin: '0 20px' }}src={githubicon}></img></a>
      <a href={"https://www.linkedin.com/in/chris3jang"}><img style={{ height: 50, width: 'auto', margin: '0 20px' }}src={linkedinicon}></img></a>
      <a href={"mailto:chris3jang@gmail.com"}><img style={{ height: 50, width: 'auto', margin: '0 20px' }}src={gmailicon}></img></a>
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
*/