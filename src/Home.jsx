import React,{useEffect, useState} from "react";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Preloader from "./Components/Preloader/Preloader"
import web from "./image/1.jpg";
import bal from "./image/12.png";
import Web from "./image/web.jpeg"
import App from "./image/app.jpeg";
import Ml from "./image/ml.jpeg";
import Ux from "./image/uxui.jpeg";
import Team from "./image/3.jpg";

const Home =() => {
    const[counter,setCounter]=useState(3)
    useEffect(()=>{
        const timer = 
        counter > 0 && setInterval(() => setCounter(counter-1),1000);
        return() => clearInterval(timer);
    })

    return (
        <>
        {(counter!==0)?(<Preloader/>):
       ( <>
        <Navbar />
        <section id="header" className="d-flex algin-items-center ">
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <div className="contain">
                    <h1> <span className="text first-text">Accelerating Cloud Transformation</span> </h1>
                    <h2 className="my-3"><span className="text sec-text">Think.</span></h2>
                    </div>
                </div>
                <div className="col-lg-6 order-lg-2 header-img"><img src={web} className="img-fluid animated" alt="home img" />
                </div>
                </div>
                </div>
            </div>
        </div>
        </section>
        
        
        {/* ================================================== Who We are ================================*/}
        <section>
        <div className="container2 reveal">
        <div className="container-fluid nav_bg" id="dol">
            <div className="bol"><img src={bal} alt=""/></div> 
            <div className="row ">
                <div className="col-10 mx-auto">
       <div className="About-head">
       <h3 className="d-card-title">Who We Are</h3>
       <div className="team-img">
       <p>Cloud Computing Cell has been a part of Ajay Kumar Garg Engineering College since February 2016.<br/> The members are exposed to the latest Cloud Technologies that enable them to be market ready thereby increasing their opportunities in placements and research.<br/> It provides a platform to the students to compute, manage and deploy the cloud and related services.<br/> The Cell is coordinated by Dr. J. K. Seth, Ms. Anupama Sharma and Dr. Parneet Kaur, faculty members, IT department.</p>
        
        <img  className ="teamimg" src={Team} alt="Team photo" /></div>
            </div>
            </div>
            </div>
        </div>
        </div>
        </section>
        {/*================================================================ What we do =======================================*/}
        <section className="whatwedo">
            <div className="container reveal">
        <div className="d-wrapper">
        <h3 className="d-card-title">What We Do</h3>
        <div className="d-cols">
            <div className="d-col">
                <div className="d-container">
                    <div className="d-front">
                        <div className="d-inner">
                            <span><img className="d-img" src={Web} /></span>
                            <p>Web Development</p>
                        </div>
                    </div>
                    <div className="d-back">
                        <div className="d-inner">
                            <p>Bridge the gap by working on both front end as well as backend and provide distinctive solutions to satisfy this need</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-col">
                <div className="d-container">
                    <div className="d-front">
                        <div className="d-inner">
                            <span><img className="d-img" src={App} /></span>
                            <p>App Development</p>
                        </div>
                    </div>
                    <div className="d-back">
                        <div className="d-inner">
                            <p>Work on different application development softwares like flutter, react native and NetBeans and provide the required solutions</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-col">
                <div className="d-container">
                    <div className="d-front">
                        <div className="d-inner">
                            <span><img className="d-img" src={Ml} /></span>
                            <p>Machine Learning</p>
                        </div>
                    </div>
                    <div className="d-back">
                        <div className="d-inner">
                            <p>Machine Learning is the field of study that gives computers the capability to learn without being explicitly programmed.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="d-col">
                <div className="d-container">
                    <div className="d-front">
                        <div className="d-inner">
                            <span><img className="d-img" src={Ux} /></span>
                            <p>UI/UX Designing</p>
                        </div>
                    </div>
                    <div className="d-back">
                        <div className="d-inner">
                            <p>UI/UX designing and graphic designing so as 
                                to provide an edge in web and application development</p>
                        </div>
                    </div>
                </div>
            </div>
            
            </div>
        </div>
        </div>
        </section>
        <section>
    <Footer />
        </section>

        </>
        )
}
        </>
          )
}


window.addEventListener('scroll',reveal);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i=0;i<reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;
        if(revealtop< windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}
const text = document.querySelector(".sec-text");

const textLoad = () => {
if(text){
    setTimeout(() => {
        text.textContent = "Think.";
    }, 0);
    setTimeout(() => {
        text.textContent = "Develop.";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Deploy.";
    }, 8000); 
}
}
const ram = (Math.random()+1)*1000;
textLoad();
setInterval(textLoad, ram);
export default Home;