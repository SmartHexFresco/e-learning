import learnx from "../assets/learnx.png";
function Footer(){
    return(
        <>
        <footer className="footer-container">
           <div className="learnx-sec">
           <div className="logo-wrapper">
             <img src={learnx} alt="logo" className="learnx-logo"/>
             <h3>LearnX</h3>
           </div>
            <p>At LearnX we are committed to success in everything we do. 
            Therefore the success of our interns is paramount as it is also how we are perceived.</p>
            <ul>
                <li>+234-814 012 0539</li>
                <li>LearnX@LearnX.NG</li>
            </ul>
           </div>

           <div className="footer-main-content">
            <h3>Quick Links</h3>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Courses</li>
                <li>Contact Us</li>
                <li>Career</li>
            </ul>
           </div>

           <div className="footer-support-content">
            <h3>Support</h3>
            <ul>
                <li>FAQS</li>
                <li>Help Center</li>
                <li>Privacy policy</li>
                <li>Terms and Condition</li>
            </ul>
           </div>

           <div className="footer-socials-column">
            <h3>Socials</h3>
            <ul>
                 <li><a href="#" className="fa fa-facebook"></a></li>
                 <li><a href="#" className="fa fa-instagram"></a></li>
                 <li><a href="#" className="fa fa-twitter"></a></li>
                 <li><a href="#" className="fa fa-linkedin"></a></li>
            </ul>
           </div>
           <hr />

           <div className="footer-bottom">
            <h3>Learnx</h3>
            <p>&copy;{new Date().getFullYear()}LearnX. All rights reserved</p>
           </div>
        
        </footer>
        </>
    );
}

export default Footer