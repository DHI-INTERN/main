import React, { Component } from "react";
import { Link } from "react-router-dom";
import {FacebookShareButton,WhatsappShareButton,TwitterShareButton,RedditShareButton,TelegramShareButton,LinkedinShareButton,EmailShareButton} from "react-share";
import {FacebookIcon,WhatsappIcon,TwitterIcon,RedditIcon,TelegramIcon,LinkedinIcon,EmailIcon} from "react-share";
import "./Doctorregistration.css";
function DoctorRegistration () {
    return (
      <div className="Auth-form-container-D">
        <form className="Auth-form-D">
          <div className="Auth-form-content-D">
            <h3 className="Auth-form-title-D">DOCTOR REGISTRATION</h3>
            
            <div className="form-group mt-3">
              <label className="label-D">Doctor Name:</label><br/>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Doctor name"
                required
              /><br/>
            </div>
            
            <div className="form-group mt-3">
              <label className="label-D">Enter Category:</label><br/>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Category"
                required
              /><br/>
            </div>

            <div className="form-group mt-3">
              <label className="label-D">Enter Hospitals/clinic:</label><br/>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter hospitals/clinic"
                required
              /><br/>
            </div>

            <div className="form-group mt-3">
              <label className="label-D">Enter Degree:</label><br/>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Degree"
                required
              /><br/>
            </div>

            <div className="form-group mt-3">
              <label className="label-D">Enter Designation:</label><br/>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Degree"
                required
              /><br/>
            </div>
            <div className="form-group mt-3">
              <label className="label-D">Enter Experience:</label><br/>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter experience"
                required
              /><br/>
            </div>

            <div className="form-group mt-3">
              <label className="label-D">Phone Number:</label><br/>
              <input
                type="text"
                maxLength="10"
                className="form-control mt-1"
                placeholder="Enter phone number"
                required
              /><br/>
              <label className="label-D">Email:</label><br/>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter your email"
                required
              /><br/>
              <label className="label-D">Area:</label><br/>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter your area"
                required
              /><br/>
              <label className="label-D">City:</label><br/>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter your City"
                required
              /><br/>
              <label className="label-D">State:</label><br/>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter your state"
                required
              /><br/>
              <label className="label-D">Pincode:</label><br/>
              <input
                type="number"
                
                className="form-control mt-1"
                placeholder="Enter Pincode"
                required
              /><br/>
              <label className="label-D">Enter Address:</label><br/>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Address"
                required
              /><br/>
              <label className="label-D">Enter landmark:</label><br/>
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Enter Landmark"
                required
              /><br/>
              
            </div>
            
              <div className="d-grid gap-2 mt-3">
              <Link to="/res">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button></Link>
                <h4>Click the below icons to share the link</h4>
              </div>
              <div>
          <container>
            <segment>
              <FacebookShareButton
              url="www.hiremedy.com/docreg"
              quote=""
              hashtag="#hiremedy"
              >
                <FacebookIcon logoFillColor='white' size='30px' round={true}></FacebookIcon>
              </FacebookShareButton>

              <WhatsappShareButton
              url="www.hiremedy.com/docreg"
              quote=""
              hashtag="#hiremedy"
              >
                <WhatsappIcon logoFillColor='white' size='30px' round={true}></WhatsappIcon>
              </WhatsappShareButton>

              <TwitterShareButton
              url="www.hiremedy.com/docreg"
              quote=""
              hashtag="#hiremedy"
              >
                <TwitterIcon logoFillColor='white' size='30px' round={true}></TwitterIcon>
              </TwitterShareButton>

              <RedditShareButton
              url="www.hiremedy.com/docreg"
              quote=""
              hashtag="#hiremedy"
              >
                <RedditIcon logoFillColor='white' size='30px' round={true}></RedditIcon>
              </RedditShareButton>

              <TelegramShareButton
              url="www.hiremedy.com/docreg"
              quote=""
              hashtag="#hiremedy"
              >
                <TelegramIcon logoFillColor='white' size='30px' round={true}></TelegramIcon>
              </TelegramShareButton>

              <LinkedinShareButton
              url="www.hiremedy.com/docreg"
              quote=""
              hashtag="#hiremedy"
              >
                <LinkedinIcon logoFillColor='white' size='30px' round={true}></LinkedinIcon>
              </LinkedinShareButton>

              <EmailShareButton
              url="www.youtube.com"
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
      </div>

      
    );
  }
export default DoctorRegistration;