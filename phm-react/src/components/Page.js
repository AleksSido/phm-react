import * as React from 'react';
import Header from "../containers/Header";
import Footer from "./Footer";

const Page = (props) => {
  return (
    <>
      <Header lang={props.lang} currentLocation={props.currentLocation}/>
      <main className="main">
        <div className="main-wrapper">
          {props.children}
        </div>
      </main>
      <Footer lang={props.lang}/>
    </>
  );
};
export default Page;