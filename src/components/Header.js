import { Link } from "react-router-dom";
import { useState } from 'react';
// import TextField from "@mui/material/TextField";
// import { a } from "react-router-dom";
function Header() {

  const [message, setMessage] = useState('');

  const [updated, setUpdated] = useState(message);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    // 👇 "message" stores input field value
    setUpdated(message.toLowerCase());
  };

  return (
    <header>
      <div className="wrap">
        <div className="search">
         
          <input
           type="text"
           className="searchTerm"
           placeholder="What are you looking for?"
           id="message"
           onChange={handleChange}
           value={message}
            />
          <Link to={`/search=${message}`}>
          <button type="submit" className="searchButton" onClick={handleClick}>
            <i className="fa fa-search"></i>
          </button>
          </Link>
        </div>
      </div>
  
      {/* <h2>Better Doctors , Clinics & Labs. We'll help you find it</h2> */}
      {/* <div classNameName="row">
       <a href="/docreg">
        <button classNameName="btn btn-primary" style={{ cursor: "pointer" }}>
          Doctor Regitration
        </button>
        <br/>
        <br/>
        </a>
        <a href='/preg'>
        <button classNameName="btn btn-primary" style={{ cursor: "pointer" }}>
          User Registration
        </button>
        </a>
      </div> */}
      <div className="headerbg"></div>


    </header>
  );
}
export default Header;
