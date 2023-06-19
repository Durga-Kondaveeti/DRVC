import React from 'react';
import '../css/home.css';
import path from '../images/path.png';
import html from '../images/html.png';
import css from '../images/css.png';
import boot from '../images/bootstrap.png';
import jquery from '../images/jquery.png';
import node from '../images/node-js.png';
import angular from '../images/angular.png';
import mysql from '../images/sql.png';
import security from '../images/security.jpg';
import customer from '../images/customer.jpg';
import smartphone from '../images/smartphone.jpg';
import employees from '../images/employees.jpg';
function home() {
  return (
<div className='Home'>
      <div className='features'>
        <h1 style={{color:"grey",opacity:'40%',marginBottom:'0px',fontSize:"3rem"}}>FEATURES</h1>
        <h4 style={{color:"RGB(19, 35, 74)",marginTop:'-25px',fontSize:"2rem"}}>WE OFFER</h4>
      </div>
  <div className='offer_details'>
        <div className='customBox1'>
          <h3>Web Development</h3>
          <p>Hire us to build a good custom made website that fulfills your unique requirement. Custom made application can provide you numerous benefit such as customer centric designs, more competitive advantage, search engine optimization and flexibility in hosting.</p>
        </div>
        <div className='customBox2'>
          <h3>Custome Mobile Development</h3>
        <p>Our web development service providers create a single application to support many devices, considering content, design and performance across devices to ensure usability. We make sure that you get maximum user engagement through our website development company.</p>
        </div>
      
      <div className='customBox3'>
        <h3>Native Application Development</h3>
        <p>
        We create application for use within the organization or for sale to an organization. These applications may be specifically designed to accomplish a particular task relevant to an organization such as employee management, inventory management etc.
        </p>
      </div>
  </div>
  <div className='features'>
        <h1 style={{color:"grey",opacity:'40%',marginBottom:'0px',fontSize:"3rem"}}>PROCESS</h1>
        <h4 style={{color:"RGB(19, 35, 74)",marginTop:'-25px',fontSize:"2rem",paddingTop:"px"}}>HOW OUR PROJECT COME ALIVE!!</h4>
      </div>
  <img src={path} style={{paddingLeft:'30%',width:'45rem' ,height:'35rem'}} alt="plan of action"></img>
     <br/><br/><br/>
  <div className='features'>
        <h1 style={{color:"grey",opacity:'40%',marginBottom:'0px',fontSize:"3rem",paddingTop:'-100'}}>TECHNOLOGY</h1>
        <h4 style={{color:"RGB(19, 35, 74)",marginTop:'-25px',fontSize:"2rem"}}>TECH STACK AND TOOLS</h4>
      </div>
      <div className='techcss'>
      <img src={html} alt='tech' className='tech'/>
      <img src={css}  alt='tech' className='tech'/>
      <img src={boot}  alt='tech' className='tech'/>
      <img src={node}  alt='tech' className='tech'/>
      <img src={jquery}  alt='tech' className='tech'/>
      <img src={angular}  alt='tech' className='tech'/>
      <img src={mysql}  alt='tech' className='tech'/>
      </div>
      <div className='features'>
        <h1 style={{color:"grey",opacity:'40%',marginBottom:'0px',fontSize:"3rem",paddingTop:'-100'}}>WE OFFER</h1>
        <h4 style={{color:"RGB(19, 35, 74)",marginTop:'-25px',fontSize:"2rem"}}>ADDITIONAL FEATURES</h4>
      </div>
      <div className='details'>
        <div className='box'>
          <img src={security} alt="nothing" style={{width:'6rem',height:'7rem',float:'right'}}/>
          <h3>Security of firmware and software:</h3>
          <p>We want our customer to feel safe and secure against any cyber-attack and able to protect their sensitive data. 
          Incorporating security into the firmware level of IoT devices enables us to provide a much stronger guarantee of safety 
          and security to our customers.</p>
          </div>
          <div className='box'>
          <img src={customer} alt="nothing" style={{width:'6rem',height:'7rem',float:'right'}}/>
          <h3>Security of firmware and software:</h3>
          <p>We want our customer to feel safe and secure against any cyber-attack and able to protect their sensitive data. 
          Incorporating security into the firmware level of IoT devices enables us to provide a much stronger guarantee of safety 
          and security to our customers.</p>
          </div>
          <div className='box'>
          <img src={employees} alt="nothing" style={{width:'6rem',height:'7rem',float:'right'}}/>
          <h3>Security of firmware and software:</h3>
          <p>We want our customer to feel safe and secure against any cyber-attack and able to protect their sensitive data. 
          Incorporating security into the firmware level of IoT devices enables us to provide a much stronger guarantee of safety 
          and security to our customers.</p>
          </div>
          <div className='box'>
          <img src={smartphone} alt="nothing" style={{width:'6rem',height:'7rem',float:'right'}}/>
          <h3>Security of firmware and software:</h3>
          <p>We want our customer to feel safe and secure against any cyber-attack and able to protect their sensitive data. 
          Incorporating security into the firmware level of IoT devices enables us to provide a much stronger guarantee of safety 
          and security to our customers.</p>
          </div>
      </div>
</div>
  )
}

export default home
