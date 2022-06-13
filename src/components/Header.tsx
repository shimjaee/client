import { render } from "@testing-library/react";
import React from "react";

class Header extends React.Component {
  render() {
    return (
      <>
        <div className="block h-16 w-full">
          <div className=" mt-6 ml-3.5 inline-block w-8 cursor-pointer">
            <div className="ml-1.5 h-0.5 w-4 bg-menuMainColor"></div>
            <div className="my-1.5 ml-1.5 h-0.5 w-4 bg-menuMainColor"></div>
            <div className="my-1.5 ml-1.5 h-0.5 w-4 bg-menuMainColor"></div>
          </div>

          <div className=" ml-3.5 mt-4 inline-block w-1/2 align-top">
            <img
              src="/img/logo_admin2x.png"
              className="inline-block w-56 cursor-pointer"
            />
          </div>
        </div>

        <div className="block w-full border-b-2 border-solid"></div>
      </>
    );
  }
}
export default Header;
