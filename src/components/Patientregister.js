import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Patientregistration.css";
import {FacebookShareButton,WhatsappShareButton,TwitterShareButton,RedditShareButton,TelegramShareButton,LinkedinShareButton,EmailShareButton} from "react-share";
import {FacebookIcon,WhatsappIcon,TwitterIcon,RedditIcon,TelegramIcon,LinkedinIcon,EmailIcon} from "react-share";
// import Navbar from './Navbar';
function Patientregister () {
    return (
       <>
       {/* <Navbar /> */}
      <div className="Auth-form-container-P">
        <form className="Auth-form-P">
          <div className="Auth-form-content-P">
            <h3 className="Auth-form-title-P">USER REGISTRATION</h3>
            <div className="form-group mt-3">
              <label className="label-P">User Name:</label><br />
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter name"
                required />
            </div>
            <div className="form-group mt-3">
              <label className="label-P">Phone Number</label><br />
              <input
                type="text"
                maxLength="10"
                className="form-control mt-1"
                placeholder="Enter phone number"
                required /><br />
              <label className="label-P">Email</label><br />
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter your email"
                required /><br />
              <label className="label-P">Age:</label><br />
              <input
                type="number"
                max="120"
                min="0"
                className="form-control mt-1"
                placeholder="Enter your age"
                required /><br />
              <label className="label-P">Blood Group:</label><br />
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Blood Group"
                required /><br />
              <label className="label-P">Gender:</label><br />
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Gender"
                required /><br />
              <label className="label-P">Pre-existing diseases:</label><br />
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Pre-existing disease"
                required /><br />
              <label className="label-P">Smoke:</label><br />
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Smoke Details"
                required /><br />
              <label className="label-P">Drinking:</label><br />
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Drinking Details"
                required /><br />
              <label className="label-P">Medical insurance:</label><br />
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Medical insurance Details"
                required /><br />
              <label className="label-P">Blood Donor:</label>
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" /><br />
            </div>

            <div className="d-grid gap-2 mt-3">
              <Link to={"/res"}>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </Link>
              <h4>Click the below icons to share the link</h4>
            </div>
            <div>
          <container>
            <segment>
              <FacebookShareButton
              url="www.hiremedy.com/preg"
              quote=""
              hashtag="#hiremedy"
              >
                <FacebookIcon logoFillColor='white' size='30px' round={true}></FacebookIcon>
              </FacebookShareButton>

              <WhatsappShareButton
              url="www.hiremedy.com/preg"
              quote=""
              hashtag="#hiremedy"
              >
                <WhatsappIcon logoFillColor='white' size='30px' round={true}></WhatsappIcon>
              </WhatsappShareButton>

              <TwitterShareButton
              url="www.hiremedy.com/preg"
              quote=""
              hashtag="#hiremedy"
              >
                <TwitterIcon logoFillColor='white' size='30px' round={true}></TwitterIcon>
              </TwitterShareButton>

              <RedditShareButton
              url="www.hiremedy.com/preg"
              quote=""
              hashtag="#hiremedy"
              >
                <RedditIcon logoFillColor='white' size='30px' round={true}></RedditIcon>
              </RedditShareButton>

              <TelegramShareButton
              url="www.hiremedy.com/preg"
              quote=""
              hashtag="#hiremedy"
              >
                <TelegramIcon logoFillColor='white' size='30px' round={true}></TelegramIcon>
              </TelegramShareButton>

              <LinkedinShareButton
              url="www.hiremedy.com/preg"
              quote=""
              hashtag="#hiremedy"
              >
                <LinkedinIcon logoFillColor='white' size='30px' round={true}></LinkedinIcon>
              </LinkedinShareButton>

              <EmailShareButton
              url="www.hiremedy.com/preg"
              quote=""
              hashtag="#hiremedy"
              >
                <EmailIcon  logoFillColor='white' size='30px' round={true}></EmailIcon>
              </EmailShareButton>
            </segment>
          </container>
          </div>
          </div>
      
        </form>
      </div></>
    );
  }
export default Patientregister;
