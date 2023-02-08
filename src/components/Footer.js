import { Link, animateScroll as scroll } from 'react-scroll'

function Footer() {


  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="side1">
            <div className="row">
              <div className="col-md-3">
                <h1 className="logo">HIRemedy</h1>
                <p className="footer-text">
                  HIRemedy is a unique platform where you can get all your health related services under one site. We provide several services for both users and doctors.

                </p>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Important Link</p>
                <ul>
                  <li>
                    <Link
                      spy={true}
                      smooth={true}
                      duration={1000}
                      to="headerbg"
                    > Home </Link>
                  </li>
                  <li>
                    <Link to="services" spy={true} smooth={true} duration={1000} > Services </Link>
                  </li>
                  <li>
                    <Link to="about-scroll" spy={true} smooth={true} duration={1000}>About Us  </Link>
                  </li>
                  <li>
                    <Link to="contact" spy={true} smooth={true} duration={1000}> Contact  </Link>
                  </li>
                  <li>
                    <a href="/Terms" duration={1000}> Terms  </a>
                  </li>
                  <li>
                    <a href="/Privacy" duration={1000}> Privacy Policy </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="side2">
            <div className="row">
              <div className="col-md-3">
                <p className="footer-title">Contact</p>
                <ul>
                  <li>
                    <a href="mailto:info@hiremedy.com" >info@hiremedy.com</a>
                  </li>
                  <li>
                    <a href="https://www.google.com/maps/place/RNA+Assoicates/@12.9054955,77.5766184,17z/data=!3m1!4b1!4m5!3m4!1s0x3bae156edd04eecf:0xb343e8645fe473!8m2!3d12.9054903!4d77.5788071 " >#433, 1st Floor, J.P Nagar 6th Phase, Banglore-560078</a>
                  </li>
                  <li>
                    <Link to="#" >8660042033</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-3">
                <p className="footer-title">Social Media</p>
                <ul>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://facebook.com" > FaceBook</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com" > Twitter</a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com"> Linkedin</a>
                  </li>
                </ul>
                <div style={{fontWeight:"500",fontSize:"17px",color: "#32363A"}}>
                  Click the whatsapp logo to share
                </div>
                <div id="mobile-share">
                  <a href="whatsapp://send?text=https://hiremedy.com/" data-action="share/whatsapp/share">
                    <img src="https://phuleshahuambedkars.com/whatsapp_share.png" alt='Whatsapp' />
                  </a>
                  {/* here after text={palce ur link which u want to send in whats app} */}
                  <a href="whatsapp://send?text=your website url link " data-action="share/whatsapp/share"></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button onClick={() => scroll.scrollToTop(2500)} src="" className="gotop"><i className="fas fa-level-up-alt"></i></button>
    </footer>
  );
}
export default Footer;
