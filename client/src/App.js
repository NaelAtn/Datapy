import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Component/NavBar/NavBar";
import Footer from "./Component/Footer/Footer";
import Error from "./Pages/Error/Error";
import Home from "./Pages/Home/Home";
import "animate.css";
import ScrollTop from "./Component/ScrollTop/ScrollTop";
import ContactezNous from "./Pages/ContactezNous/ContactezNous";
import { useSelector } from "react-redux";
import SucessNotification from "./Component/SuccessNotifications/SucessNotification";
import ScrollTopRouter from "./Component/ScrollTopRouter/ScrollTopRouter";
import ErrorNotification from "./Component/ErrorNotification/ErrorNotification"
import NosCours from "./Pages/NosCours/NosCours"

function App() {
  const messagesuccess = useSelector((state) => state.messageReducer.success);
  const errormessage = useSelector((state)=> state.messageReducer.errors); 
  const inscrisuccess = useSelector((state)=>state.inscriReducer.success);
  const errorinscri = useSelector ((state)=>state.inscriReducer.errors);
  return (
    <div className="App">
      {messagesuccess && messagesuccess.map((el) => <SucessNotification success={el} />)}
      {errormessage && errormessage.map((el) => <ErrorNotification error={el} /> )}
      {inscrisuccess && inscrisuccess.map((el) => <SucessNotification success={el} />)}
      {errorinscri && errorinscri.map((el) => <ErrorNotification error={el} /> )}
      <ScrollTopRouter />
      <div className="scrollbtn">
        <ScrollTop />
      </div>
      <div className="nav-fixed">
        <NavBar />
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/*" element={<Error/>} />
        <Route path="/contactez-nous" element={<ContactezNous />}/>
        <Route path="/nos-cours" element={<NosCours/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
