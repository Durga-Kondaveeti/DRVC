
import './App.css';
import logo from './images/logo-bg.png';
import { Link, Route,Routes } from 'react-router-dom';
import Home from './pages/home.js';
import Service from './pages/Service.js';
import About from './pages/about.js';
import Contact from './pages/contact.js';
function App() {
  return (
    <div className="App">
      {/* Taskbar */}
      <div className="taskbar">
        <img className="logo" src={logo} alt="logo"></img>
        <ul className="buttons">
          <li><Link to="/" className="my-link">Home</Link></li>
          <li><Link to="/Service" className="my-link">Service</Link></li>
          <li><Link to="/about" className="my-link">About</Link></li>
          <li><Link to="/Contact" className="my-link">Contact Us</Link></li>
        </ul>
        </div>
<div>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Service" element={<Service/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/Contact" element={<Contact/>}/>
  </Routes>
  </div>
  {/* footer */}
{/* <div className="footer">

  <div className='contactDetails'>
<p>Contact:-</p>
<span>&#9742;</span>&nbsp;
  <a href="9701303529">9701303529</a><br/>
  <span>&#9993;</span>&nbsp;
  <a href="vsolutihttps://mail.google.com/mail/u/0/#sent?compose=GTvVlcSKjswkbDZxXXndmFDkSrJdbQThdzKdnrlZdrFGbMbcLkZBwnsTHwCRwHkFgnbmVkLCKLXvgons@gmail.com">vsolutions@gmail.com</a>
  </div>
    
    </div> */}
    </div>
  );
}

export default App;
