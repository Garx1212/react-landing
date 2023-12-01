import React from "react";
import Navbar from "./Navbar.jsx";
import Card from "./Card.jsx";
import Footer from "./footer.jsx";

import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const home = () => {
  return (
    <>
      <Navbar />
      <section className="container">
        <div className="p-5 mb-4 bg-light">
          <div className="container-fluid py-5">
            <h1 className="display-5 fw-build">A Warm Welcome!</h1>
            <p className="col-md-8 fs-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing eli t. Nihil
              quia, offi cia, dignissimos iste, repudiandae ipsa non fuga soluta
              ut rem quos quidem ab consectetur vero!
            </p>
            <button className="btn btn-primary btn-lg" type="button">
              Call to action!
            </button>
          </div>
        </div>
        <div className="row">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default home;
