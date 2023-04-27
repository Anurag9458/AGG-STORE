import React from "react";
import Layout from "../Components/Layouts/Layout";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  //get similar products
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  //initial product details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  //get product
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="row container mt-2">
        <div className="col-md-6">
          <img
            src={`http://localhost:8080/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
            height={"500px"}
            width={"300px"}
          />
        </div>
        <div className="col-md-6 ">
          <h1 className="text-center">Product Details</h1>
          <h5>Name : {product.name}</h5>
          <h5>Description : {product.description}</h5>
          <h5>Price : {product.price}</h5>
          <h5>Category : {product.category?.name}</h5>
          {/* {JSON.stringify(product, null, 4)} */}

          <button className="btn btn-secondary ms-1">ADD TO CART</button>
        </div>
      </div>
      <hr />
      <div className="row container">
        <h4>Similar Products</h4>
        {/* {JSON.stringify(relatedProducts, null, 4)} */}
        {relatedProducts.length < 1 && (
          <h5 className="text-center">No Similar Products found</h5>
        )}
        <div className="d-flex flex-wrap">
          <div className="d-flex">
            {relatedProducts?.map((p) => (
              <>
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
                      <p className="card-text">
                        {p.description.substring(0, 30)}
                      </p>
                      <p className="card-text">$ {p.price}</p>
                      <button className="btn btn-secondary ms-1 ">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
