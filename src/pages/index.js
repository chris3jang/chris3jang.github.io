import React from 'react'
import Link from 'gatsby-link'

import profpic from './../../public/static/profpic.jpg'

import allist from './../../public/static/ALListProject.png'
import uttt from './../../public/static/uttt.png'

import reacticon from './../../public/static/ReactIcon.png'
import nodejsicon from './../../public/static/NodeJsIcon.png'
import expressicon from './../../public/static/ExpressIcon.png'
import mongodbicon from './../../public/static/MongoDbIcon.png'
import css3icon from './../../public/static/CSS3Icon.png'
import webpackicon from './../../public/static/WebpackIcon.png'
import passportjsicon from './../../public/static/PassportJsIcon.png'
import jwticon from './../../public/static/JWTIcon.png'
import socketioicon from './../../public/static/socketioicon.png'
import transimage from './../../public/static/transimage.png'



import githubicon from './../../public/static/GitHubIcon.png'
import linkedinicon from './../../public/static/LinkedInIcon.png'
import gmailicon from './../../public/static/GmailIcon.png'

import favi from './../../public/static/favi.png'


const IndexPage = () => (

  <div>
    <img src={favi} style={
      { height: 'auto', 
        width: '60px', 
        display: 'block', 
        position: 'fixed', 
        marginTop: '10',
        marginLeft: '10', 
        marginRight: 'auto'}
      }>
    </img>

    <div>
      <section style={{ marginTop: 10, marginLeft: 150, marginBottom: 28 }}>
        <div style={{height: 80}}></div>
        <div style={{ textAlign: 'left', fontFamily: 'verdana' }}>
          <h1 style={{ fontSize: 50}}>Thanks for stopping by.</h1>
          <h1 style={{ marginLeft: 30}}>My name is Chris Jang.</h1>
          <h1 style={{ marginLeft: 30}}>I'm a web developer based in NYC.</h1>
        </div>
        <div style={{ height: 30}}></div>
      	<div style={{textAlign: 'left', marginLeft: 30}}>
      		<nav>
      			<a href={'#'} 
              onClick={(e) => {
                e.preventDefault(); 
                document.getElementById('projects').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
              }} 
              style={{paddingTop: 5, paddingBottom: 5, paddingLeft: 20, paddingRight: 20, fontFamily: 'verdana', backgroundColor: 'black', color: 'white', textDecoration: 'none', borderRadius: 2}}>Projects
            </a>
            <div style={{display: 'inline-block', width: 40}}></div>
      			<a href={'#'} 
              onClick={(e) => {
                e.preventDefault(); 
                document.getElementById('contact').scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"})
              }} 
              style={{paddingTop: 5, paddingBottom: 5, paddingLeft: 20, paddingRight: 20, fontFamily: 'verdana', backgroundColor: 'black', color: 'white', textDecoration: 'none', borderRadius: 2}}>Contact
            </a>
      		</nav>
      	</div>
      </section>
    </div>
    <div style={{ height: 120}}></div>
  	

    <section id={'projects'} style={{backgroundColor: '#f5f5f5', zIndex: -2}}>
      <div style={{ height: 30}}></div>
      <h1 style={{marginLeft: 150, fontFamily: 'verdana' }}>Projects</h1>
      <div style={{ height: 15}}></div>
      <div id={'verticalProjectsContainer'} style={{ display: 'block', textAlign: 'center', marginLeft: 80 }}>
        <div style={{ display: 'inline-block', boxShadow: '0 2px 3px hsla(0,0%,71.4%,.5)', borderRadius: 5, backgroundColor: 'white', verticalAlign: 'top', margin: '5px' }}>
          <div style={{ display: 'block', width: 450/*42vw*/, margin: 'auto' }}>
            <a href={"https://allist.herokuapp.com/"}>
              <img style={
                { width: '100%', 
                  height: 'auto',
                  borderRadius: '5px 5px 0px 0px' }}
                src={allist}>
              </img>
            </a>
          </div>
          <div style={{ display: 'block', height: 120/*'20vh'*/, 
            backgroundColor: '#f5f5f5', 
            borderRadius: '0px 0px 5px 5px' }}>
            <h4 style={{ width: '30vw' , margin: 'auto' }}></h4>
            <div style={{ backgroundColor: '#f5f5f5' }}>
              <div style={{height: 40}}></div>
              <div style={{ display: 'block' }}>
                <img src={reacticon} style={{ height: 40, width: 'auto', display: 'inline-block'}}></img>
                <img src={nodejsicon} style={{ height: 40, width: 'auto', display: 'inline-block'}}></img>
                <img src={expressicon} style={{ height: 40, width: 'auto', display: 'inline-block'}}></img>
                <img src={mongodbicon} style={{ height: 40, width: 'auto', display: 'inline-block'}}></img>
                <img src={css3icon} style={{ height: 40, width: 'auto', display: 'inline-block'}}></img>
                <img src={webpackicon} style={{ height: 40, width: 'auto', display: 'inline-block'}}></img>
                <img src={passportjsicon} style={{ height: 40, width: 'auto', display: 'inline-block'}}></img>
                <img src={jwticon} style={{ height: 40, width: 'auto', display: 'inline-block'}}></img>
              </div>
            </div>
          </div>
        </div>
        <div style={
          { display: 'inline-block', 
            verticalAlign: 'top',
            width: 450, 
            height: 377.13,
            borderRadius: 5,
            boxShadow: '0 2px 3px hsla(0,0%,71.4%,.5)',
            backgroundColor: 'white',
            margin: '5px'}}>
          <div style={{display: 'table-cell', padding: '90px 15px', verticalAlign: 'center', fontFamily: 'verdana'}}>
            <h1>ALList</h1>
            <p>ALList is a personalized CRUD list-making app for documenting practical and arbitrary data.  Features a recursive subcategorizing functionality that popular list apps lack.  Built on the MERN stack with Passport.js and JWT for user auth.</p>
          </div>
        </div>
      </div>
      <div style={{height: 80}}></div>
      <div style={{ display: 'block', textAlign: 'center' }}>
        <div id={'verticalProjectsContainer'} style={{ display: 'block', textAlign: 'center', marginLeft: 80 }}>
          <div style={{ display: 'inline-block', boxShadow: '0 2px 3px hsla(0,0%,71.4%,.5)', borderRadius: 5, backgroundColor: 'white', verticalAlign: 'top', margin: '5px' }}>
            <div style={{ display: 'block', width: 450/*42vw*/, margin: 'auto' }}>
              <img style={
                { width: '100%', 
                  height: 'auto',
                  borderRadius: '5px 5px 0px 0px' }}
                src={uttt}>
              </img>
            </div>
            <div style={{ display: 'block', height: 120/*'20vh'*/, 
              backgroundColor: '#f5f5f5', 
              borderRadius: '0px 0px 5px 5px' }}>
              <h4 style={{ width: '30vw' , margin: 'auto' }}></h4>
              <div style={{ backgroundColor: '#f5f5f5' }}>
                <div style={{height: 40}}></div>
                <div style={{ display: 'block' }}>
                  <img src={reacticon} style={{ height: 40, width: 'auto', display: 'inline-block'}}></img>
                  <img src={nodejsicon} style={{ height: 40, width: 'auto', display: 'inline-block'}}></img>
                  <img src={expressicon} style={{ height: 40, width: 'auto', display: 'inline-block'}}></img>
                  <img src={css3icon} style={{ height: 40, width: 'auto', display: 'inline-block'}}></img>
                  <img src={socketioicon} style={{ height: 40, width: 'auto', display: 'inline-block'}}></img>
                </div>
              </div>
            </div>
          </div>
          <div style={
            { display: 'inline-block', 
              verticalAlign: 'top',
              width: 450, 
              height: 377.13,
              borderRadius: 5,
              boxShadow: '0 2px 3px hsla(0,0%,71.4%,.5)',
              backgroundColor: 'white',
              margin: '5px'}}>
            <div style={{display: 'table-cell', padding: '90px 15px', verticalAlign: 'center', fontFamily: 'verdana'}}>
              <h1>UTTT</h1>
              <p>UTTT is an implementation for the classic Ultimate Tic Tac Toe board game, built with React.js for mulitplayer games both locally in a single browser or in online real time from separate browsers using Socket.io.</p>
            </div>
          </div>
        </div>
        <div style={{height:90}}></div>
      </div>
    </section>

    <section>
      <div style={{ position: 'absolute', left: 0, width: '100%', padding: '5vh 0', backgroundColor: '#727272', textAlign: 'center' }}>
        <h1 id={'contact'} style={{ fontFamily: 'verdana', color: 'white' }}>Contact</h1>
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
*/