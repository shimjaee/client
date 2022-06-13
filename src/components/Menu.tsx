import { render } from "@testing-library/react";
import React from "react";

class Menu extends React.Component {
  render() {
    return (
      <>
        <div className="m-0 h-screen w-52 bg-menuMainColor">
          <div className="h-18 w-52 cursor-pointer text-2xl font-bold text-white">
            <span className="ml-6 mt-5 mb-5 inline-block target:shadow-lg">
              유씨웨어
            </span>
          </div>
        </div>
      </>
    );
  }
}
export default Menu;
