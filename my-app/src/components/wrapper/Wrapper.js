import React from "react";
import Header from "../wrapper/Header";

const Wrapper = ({ children }) => (
  <>
    <Header />
    <section className="main">
      <div className="main-wrapper">{children}</div>
    </section>
  </>
);

export default Wrapper;
