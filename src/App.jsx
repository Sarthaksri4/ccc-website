import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Activities from "./Activities";
import Team from "./Team";
import Contac from "./Contac";
// import CardData from "./ardData";

import {Switch,Route,Redirect} from "react-router-dom";
import Carusel from "./Carusel";
import New from "./New";
import New3 from "./New3";
import New6 from "./New6";
// import New4 from '.'



const App =() => {

    return (
        <>
        {/* <New/> */}
        <Switch>
        <Route path="/new" exact element={<New/>}/>
            <Route exact path = "/" component ={Home} />
            <Route exact path = "/activities" component ={Activities} />
            <Route exact path = "/team" component ={Team} />
            <Route exact path = "/new6" component ={New6} />
            <Route exact path = "/new3" component ={New3} />
            <Route exact path = "/new" component ={New} />
            {/* <Route exact path = "/new4" component ={New4} /> */}
            {/* <Route exact path = "/new2" component ={New2/} /> */}

           <Route exact path = "/Call" component ={Contac} />
            {/* <Route path="/new" exact element={<New/>}/> 
        <Route path="/new3" exact element={<New3/>}/>
        <Route path="/new6" exact element={<New6/>}/> */}
            {/* <Redirect to="/" /> */}
        </Switch>
        {/* <div className="row">{CardData}</div> */}
        </>
    )
}
export default App;