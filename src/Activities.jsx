import React from "react";
import web from "../src/image/5.png";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
// import {Routes,Route} from "react-router-dom";
import Carusel from "./Carusel";
// import Slider from "./Slider";
// import CardData from "./cardData";
import New from "./New";
import New3 from "./New3";
import New6 from "./New6";
// import Card from "./Card";
import { Route, BrowserRouter } from "react-router-dom";
import Slider from "./Slider";
// import Slider from "./Components/Slider/Slider";
const Activities = () => {
  return (
    <>
      <Navbar />

      <section id="header" className="d-flex algin-items-center ">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <div className="contain">
                    <h1>
                      {" "}
                      <span className="text first-text">
                        Events And Mentors
                      </span>{" "}
                    </h1>
                    <h2 className="my-3">
                      <span className="text sec-text">Depeloy.</span>
                    </h2>
                  </div>
                </div>
                <div className="col-lg-6 order-lg-2 header-img">
                  <img
                    src={web}
                    className="img-fluid animated"
                    alt="home img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Carusel />
      <section>
        <BrowserRouter>
          <Route>
            <Route path="/slider" exact element={<Carusel />} />
            <Route path="/new" exact element={<New />} />
            <Route path="/new3" exact element={<New3 />} />
            <Route path="/new6" exact element={<New6 />} />
          </Route>
        </BrowserRouter>
      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};
const text = document.querySelector(".sec-text");

const textLoad = () => {
  if (text) {
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
};
const ram = 1000;
textLoad();
setInterval(textLoad, ram);
export default Activities;
