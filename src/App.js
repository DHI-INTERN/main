import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Main from "./components/Main";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Res from './components/res';
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import Allopathy from "./components/Allopathy";
import Dentist from "./components/Dentist";
import Diabetic from "./components/Diabetic";
import Homeopathy from "./components/Homeopathy";
import Orthopedic from "./components/Orthopedic";
import PatientRegistration from './components/Patientregister';
import Doctorregistration from './components/Doctorregistration';
import Error from './components/Error';
import D_Amar from "./components/D_Amar";
import D_Kingsly from "./components/D_Kingsly";
import D_Kiran from "./components/D_Kiran";
import D_Shanthi from "./components/D_Shanthi";
import Paneer from "./components/D_Paneer";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate
} from "react-router-dom";



function App() {
  return (
    <>
    <Router>
      {/* <Home/> */}
      {/* <Doctorregistration/> */}
      {/* <Navbar />
      <Header />
      <Main />
      <Footer />  */}

      <Routes>
        {/* <Route path="/" element={<PatientRegistration />} /> */}
        {/* <Route exact path="/company-website-reactjs" element={<Navigate to= "/" />} /> */}
        <Route exact path="/" element={<Home/>} />
        <Route path="/preg" element={<PatientRegistration />} />
        <Route path="/docreg" element={<Doctorregistration />} />
        <Route path="/res" element={<Res />} />
        <Route path="/nav" element={<Navbar />} />
        <Route path="/main" element={<Main />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/header" element={<Header />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/Privacy" element={<Privacy />} />

        <Route path="*" element={<Error />} />
        <Route path="/search=orthopaedic" element={<Orthopedic />} />

        <Route path="/search=Amar" element={<D_Amar />} />
        <Route path="/search=Kingsly" element={<D_Kingsly />} />
        <Route path="/search=Kiran" element={<D_Kiran />} />
        <Route path="/search=Shanthi" element={<D_Shanthi />} />
        <Route path="/search=PaneerSelvam" element={<Paneer />} />
        <Route path="/search=homeopathy" element={<Homeopathy />} />
        <Route path="/search=dentist" element={<Dentist />} />
        <Route path="/search=diabetes" element={<Diabetic />} />
        <Route path="/search=allopathy" element={<Allopathy />} />

        
      </Routes>
    </Router>
  </>

  );
}

export default App;
