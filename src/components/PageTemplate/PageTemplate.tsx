import React, { PropsWithChildren } from "react";
import Header from "./partials/Header/Header";
import Footer from "./partials/Footer/Footer";

const PageTemplate: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default PageTemplate;
