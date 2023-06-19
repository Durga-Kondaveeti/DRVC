import React from 'react'
import '../css/contact.css'
export default function contact() {
  return (
<div className='contactDiv'>       
<center>
 
          <h1 className='backgroundImage'>LET US CONNECT TO EXPLORE </h1>
          <h1><bold>Start a Conversation</bold></h1>
<div className='formDesign'>
  <div className='form-information'>
    <h1>Ask how we can help you:</h1>
    <h5>See our platform in action</h5>
    <p>Request a personalized demo for you company platform.</p>
    <h5>Master performance</h5>
    <p>From VSOLUTIONS you get the world-class web Developers help you to own a business website</p>
  </div>
  <hr/>
        <div className='formBox'>
                  <form>
            <label>
              Name:<br/>
              <input type="text" name="name"  className='input1'/>
            </label><br/>
            <label>
              Your Mail:<br/>
              <input type="text" name="name" className='input1' />
            </label><br/>
            <label>
              Contact:<br/>
              <input type="text" name="name" className='input1' />
            </label><br/>
            <label>
              Purpose:<br/>
              <input type="text" name="name" className='input1' />
            </label><br/>
            <label>
              post Your Request:<br/>
              <input type="text" name="name"  className='input2'/>
            </label><br/><br/>
            <button className="--c:#E95A49">submit</button>
                  </form>
        </div>
    </div>
      </center>
    </div>
  )
}
