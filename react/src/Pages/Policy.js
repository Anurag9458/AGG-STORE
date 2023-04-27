import React from "react";
import Layout from "../Components/Layouts/Layout";

const Policy = () => {
  return (
    <Layout title={"Privacy Policy"}>
      <div className="row privacy">
        <div className="col-md-6">
          <img
            src="https://th.bing.com/th/id/OIP.8_nWD4V0LWzkexrhMPbpSQHaD5?pid=ImgDet&rs=1"
            alt="privacy"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-enter">Privacy Policy</h1>
          <p className="text-justify mt-2">
            any query and info about poduct feel free to call anytime 24X7
            available
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
