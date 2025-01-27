import React from 'react'
import contactbgImage from "../../img/contact/contact-breadcrumb.jpg";
import contactIcon from "../../img/icon/plane.png";
import addressIcon from "../../img/icon/addr.png";
import callIcon from "../../img/icon/call.png";
import mailIcon from "../../img/icon/mail.png";
import sectnewIcon from "../../img/icon/shape-2.png";
import cntbgIcon from "../../img/icon/contact-background-shape.png";
import form1 from "../../img/contact/form1.png";
import form2 from "../../img/contact/form2.png";
import form3 from "../../img/contact/form3.png";
import formbgIcon from "../../img/icon/bg-service.png";

const ContactUs = () => {
  return (
    <div>
      <section
        className="contactpg-breadcrumb breadcrumb-mb"
        style={{
          backgroundImage: `linear-gradient(0deg, rgb(0 0 0 / 55%), rgb(0 0 0 / 35%)), url(${contactbgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          // width: '100%',
          // height: '100%',
          backgroundAttachment: "fixed",
          padding: '100px',
        }}
      >
        <div>
          <h1>Contact Us</h1>
        </div>
      </section>
      <section className="cnt-form-sect">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <div className="cnt-form-title-div">
                <h2 className="text-left">Contact Our Friendly Team of Experts for Assistance and Support</h2>
                <p>Have questions or ready to plan your next adventure? Reach out to us—we’re here to help make your travel dreams a reality!</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="contactpg-icon1-div">
                <img src={contactIcon} alt="contact icon" className="moveVerticle" />
                <p>Our mission is to create memories that last a lifetime for every traveler who chooses us.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="cnt-pg-icon">
                <img src={sectnewIcon} alt="bg icon" className="cnt-pg-icon1" />
                <img src={addressIcon} alt="address icon" />
                <h5>Address</h5>
                <a><p>Pune, Maharashtra</p></a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="cnt-pg-icon">
                <img src={sectnewIcon} alt="bg icon" className="cnt-pg-icon1" />
                <img src={callIcon} alt="call icon" />
                <h5>Phone</h5>
                <a href="tel:911111111111"><p> +91 1111111111</p></a>
              </div>
            </div>
            <div className="col-md-4">
              <div className="cnt-pg-icon">
                <img src={sectnewIcon} alt="bg icon" className="cnt-pg-icon1" />
                <img src={mailIcon} alt="location icon" />
                <h5>E-mail</h5>
                <a href="mailto:letstravel@gmail.com"><p>letstravel@gmail.com</p></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="hr-sect">
        <hr />
      </section> */}

      <section className="contactpg-form-sect">
        <img src={cntbgIcon} alt="bg icon" className="cnt-form-bg-img" />
        <img src={formbgIcon} alt="bg icon" className="cnt-form-bg-img1 moveVerticle" />
        <div className="container">
          <div className="row align-items-center">
          <div className="col-md-6">
              <div className="contactpg-form-mdiv">
                <h2>Get in Touch</h2>
                <form action="contact.php" method="post">
                  <div className="row">
                    <div className="col-md-6">
                      <input type="text" name="name" placeholder="Name" />
                    </div>
                    <div className="col-md-6">
                      <input type="email" name="email" placeholder="Email" />
                    </div>
                    <div className="col-md-6">
                      <input type="text" name="phone" placeholder="Phone" />
                    </div>
                    <div className="col-md-6">
                      <input type="text" name="location" placeholder="Location" />
                    </div>
                    <div className="col-md-12">
                      <textarea type="text" name="message" placeholder="Message" />
                    </div>
                    <div className="col-md-12">
                      <button type="submit" value="Submit" name="Submit"> Submit </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-side-image row">
                <div className="col-md-6 col-6">
                  <img src={form1} alt="travel image" />
                </div>
                <div className="col-md-6 col-6">
                  <div className="form-side-img-indiv">
                    <img src={form2} alt="travel image" />
                    <img src={form3} alt="travel image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs
