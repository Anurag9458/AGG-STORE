import React from "react";
import Layout from "../Components/Layouts/Layout";

const About = () => {
  return (
    <Layout title={"About Us"}>
      <div className="row aboutus">
        <div className="col-md-6">
          <img
            src="https://th.bing.com/th/id/R.74d098d5125ed5b395868e8e0c428aa1?rik=TGM9CafM1oOGNQ&pid=ImgRaw&r=0"
            alt="aboutus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-enter">About Us</h1>
          <p className="text-justify mt-2">
            any query and info about poduct feel free to call anytime 24X7
            available
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
