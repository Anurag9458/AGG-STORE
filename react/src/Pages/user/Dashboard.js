import React from "react";
import Layout from "../../Components/Layouts/Layout";
// import UserMenu from "../../Components/Layouts/UserMenu";
import { useAuth } from "../../context/auth";
import UserMenu from "../../Components/Layouts/UserMenu";

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={`${auth?.user?.name} Dashboard`}>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="row w-75 p-3">
              <h2>User Name: {auth?.user?.name}</h2>
              <h2>User Email: {auth?.user?.email}</h2>
              <h2>User Contact: {auth?.user?.phone}</h2>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
