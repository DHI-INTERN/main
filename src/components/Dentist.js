import "./Homeopathy.css";
function Dentist() {
    return (
        <div className="main-container1">
          <div className="heading">
            <h1 className="heading__title">RESULTS FOR DENTISTS ARE </h1>
          </div>
          <div className="cards">
            <div className="doccard card-1">
              <h2 className="doccard__title">  <b>Doctor Name </b>: Dr. Kiran B. Kakad<br></br>
                                        <b>Category </b>: Dentist<br></br>
                                        <b>Hospital / Clinic</b> : Happy Dental Clinic<br></br>
                                        <b>Degree</b> : BDS<br></br>
                                        <b>Experience </b> : 6<br></br>
                                        <b>Phone </b> :96640 54442<br></br>
                                        <b>Email</b> : kakadkiran2007@gmail.com<br></br></h2>
            </div>
            <div className="doccard card-2">
              <h2 className="doccard__title">  <b>Doctor Name</b> : Dr. Ramandeep Sandhu<br></br>
                                        <b>Category </b>: Dentist<br></br>
                                        <b>Hospital / Clinic </b>:Orthosquare Dental Clinics <br></br>
                                        <b>Degree</b> : BDS<br></br>
                                        <b>Experience </b>: 7<br></br>
                                        <b>Phone</b> :  9029028860<br></br>
                                        <b>Email</b> : orthosquaredentalclinicinfo@gmail.com<br></br></h2>
            </div>
          </div>


        </div>
        );
    }
export default Dentist;