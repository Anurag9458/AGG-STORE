import React from "react";
import Layout from "../Components/Layouts/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";

const Contact = () => {
  return (
    <Layout title={"Contact Us"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="https://th.bing.com/th/id/R.35ca51f8739dd76ce1b9fd33c4bbd05d?rik=VgVYRrGe0pIDIA&riu=http%3a%2f%2ftalktotrevor.co.za%2fwp-content%2fuploads%2f2015%2f11%2fContact-Us-PNG.png&ehk=19d8BZyg13oJSF7Pgx2ynIQ4Hvy96JQvm3LXoOAQc%2bE%3d&risl=&pid=ImgRaw&r=0"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-enter">Contact Us</h1>
          <p className="text-justify mt-2">
            any query and info about poduct feel free to call anytime 24X7
            available
          </p>
          <p className="mt-3">
            <BiMailSend />
            :aanurag9458@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall />
            :+91 7088572313
          </p>
          <p className="mt-3">
            <BiSupport />
            :1800-0000-0000 (toll free)
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
