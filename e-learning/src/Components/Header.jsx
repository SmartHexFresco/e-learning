import learnx from "../assets/learnx.png";
function Header (){
  return(
    <>
    <div className="nav-bar">
    <div className="nav-left">
    <div className="logo-wrapper">
    <img src={learnx} alt="learnx-logo"  className="learnx-logo"/>
    <span className="nav-logo">LEARNX</span>
    </div>
  </div>

  <div className="nav-center">
    <span className="nav-button">About Us</span>
    <span className="nav-button">Categories</span>
    <span className="nav-button">Testimonial</span>
    <span className="nav-button">FAQS</span>
  </div>

  <div className="nav-right">
    <span className="nav-reg">Login</span>
    <span className="nav-reg2">Register</span>
  </div>
</div>

    </>
  );
}

export default Header