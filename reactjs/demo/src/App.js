import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Layout/Pages/Home";
import About from "./Layout/Pages/About";
import Contact from "./Layout/Pages/Contact";
import AboutHospital from "./Layout/Pages/AboutHospital";
import AboutTeam from "./Layout/Pages/AboutTeam";
import NotFound from "./Layout/Pages/NotFound";
// import BootComponent from "./Design/BootComponent";
// import Footer from "./Design/Footer";
// import ReactCard from "./Design/ReactCards";
// import A from "./Context/PropsDrilling/A";
// import MainContext from "./Context/MainContext";
// import UserTable from "./Effect/UserTable";
// import UserTableAx from "./Effect/UserTableAx";
// import CardProduct from "./Effect/CardProduct";
// import DataEffect from "./Effect/DataEffect";
// import Formdata from "./Formhandling/Formdata";
// import Formobj from "./Formhandling/Formobj";
// import FuncState from "./State/FuncState";
// import FuncObj from "./State/FuncObj";
// import MainProps from "./Props/MainProps";
// import ClassState from "./State/ClassState";
// import MainProps from "./Component/Props/MainProps";
// import ClassCompo from "./Component/Classcomponent";
// import FuncCompo from "./Component/FunctionComponent";
// import Hello from "./JSX/Hello";
// import Css from "./CSS/css";


function App() {
  return (
    <BrowserRouter>
      <div>
        {/* <h1>Hello this is the H1 tag and you have to write this tag by you not automaticall applying</h1> */}
        {/* {<ClassCompo/>}
      {<FuncCompo/>} */}
        {/* {<jsx/>} */}

        {/* <Css/> */}

        {/* {<MainProps/>} */}
        {/* {<ClassState/>} */}

        {/* {<FuncState/>} */}
        {/* {<FuncObj/>} */}

        {/* {<Formdata/>} */}
        {/* {<Formobj/>} */}
        {/* {<CardProduct/>} */}
        {/* < DataEffect/> */}
        {/* < UserTable/> */}
        {/* < UserTableAx/> */}
        {/* <A/> */}
        {/* < MainContext/> */}
        {/* < BootComponent/> */}
        {/* < Footer/> */}
        {/* < ReactCard/> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} >
             <Route path="abouthospital" element={<AboutHospital/>} />
             <Route path="aboutteam" element={<AboutTeam/>} />
          </Route>
          <Route path="/contact" element={<Contact />} />
          
          
          
          
          
          <Route path="*" element={<NotFound/>}/>
          </Routes>

      </div>
    </BrowserRouter>
  )
}

export default App;
