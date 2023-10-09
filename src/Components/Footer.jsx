/* eslint-disable no-unused-vars */

import React from "react";

export const Footer = () => {
  return (
    <div className="footer__parent w-[100%] bg-orange-200 rounded-[20px] p-10">
      <div className="footer__content flex justify-around pb-11">
        <h3>Footer 1</h3>

        <h3>Footer 2</h3>
        <h3>Footer 3</h3>
        <h3>Footer 4</h3>
      </div>
      <p className="opacity-[0.5] text-slate-800">© 2021 Copyright: Speedwings Human Resource</p>
    </div>
  );
};

export default Footer;
