import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section id="contact-us">
      <hr />
      <h2>Contacting Us</h2>
      <div className="research-address">
        <h3 className="research-address-h3">Reseach Unit Address</h3>
        <h4 className="research-address-h4">Wices Research Unit</h4>
        <p>
          Floor 13, Building 4, Faculty of Engineering (CU), Phaya Thai Rd,
          Pathum Wan, Bangkok 10330
        </p>
        <p>Call : (+66) 1234567890</p>
        <p>Email : wicesbox@gmail.com</p>
      </div>
      <div className="research-location">
        <iframe
          className="research-location-google-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d713.5086974514428!2d100.53401790474832!3d13.736316559062633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29ed5bfecdf2b%3A0xfc54dfd256ddf479!2sCharoen%20Engineering%20Building%204!5e0!3m2!1sen!2sth!4v1663904530846!5m2!1sen!2sth"
          //   width="600"
          //   height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactUs;
