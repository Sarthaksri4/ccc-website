import React from "react";
import web from "../Footer/9.png";
import "./Footer.css";
const Footer =() => {
    return (
        <>
        <footer className="Footer1 reveal">
      <div className="panel">
        <div className="info">
          <img src={web} alt="" className="info-img" />
          <section className="text">
          <p>
          Cloud Computing Cell, <br />
                AJAY KUMAR GARG ENGINEERING COLLEGE<br />
            Delhi-Meerut Expressway<br />
            DISTT.U.P.,<br />
            INDIA-201009
          </p>
          </section>
        </div>
        <div className="ss">
            <h4>Follow us</h4>
            <div>
              <a href="#" ><i className="fab 1 fa-facebook-f  fa-4x" id="fac"></i></a>
              <a href="#" ><i className="fab 2 fa-twitter  fa-4x" id="fac2"></i></a>
              <a href="#"><i className="fab 3 fa-instagram fa-4x" id="fac3"></i></a>
              <a href="#"><i className="fab 4 fa-linkedin-in fa-4x"  id="fac4"></i></a>
            </div>
          </div>
          <div className="footer-map"><iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d437.5590053994981!2d77.50311552543072!3d28.67552288784848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDQwJzMyLjQiTiA3N8KwMzAnMTEuNyJF!5e0!3m2!1sen!2sin!4v1667474400173!5m2!1sen!2sin"
                width="300"
                height="300"
                title="maps"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe></div>
        </div>
         <div className="cp">
            <div className="cc">&copy; 
              <span className="A">AKGEC Cloud Computing Cell, Ghazibad</span></div>
          </div>
    </footer>
        </>
    )
}
export default Footer;