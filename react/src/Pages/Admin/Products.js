import React, { useState, useEffect } from "react";
import AdminMenu from "../../Components/Layouts/AdminMenu";
import Layout from "../../Components/Layouts/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);

  //get all products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/get-product`
      );
      if (data?.success) {
        setProducts(data?.products);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting categories");
    }
  };
  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout>
      <div className="container-fluid m-3 p-3">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 ">
            <h1 className="text-center">All Product Lists</h1>

            <div className="d-flex flex-wrap">
              <div className="d-flex">
                {products?.map((p) => (
                  <>
                    <Link
                      to={`/dashboard/admin/product/${p.slug}`}
                      className="product-link"
                    >
                      <div className="d-flex">
                        <div
                          className="card m-2"
                          style={{ width: "18rem" }}
                          key={p._id}
                        >
                          <img
                            src={`http://localhost:8080/api/v1/product/product-photo/${p._id}`}
                            className="card-img-top"
                            alt={p.name}
                          />
                          <div className="card-body">
                            <h5 className="card-title">{p.name}</h5>
                            <p className="card-text">{p.description}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
