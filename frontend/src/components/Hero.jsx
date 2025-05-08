import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {

  return (
    <div className="hero">
        <div className="container">
            <div className="inner-wrap">
                <img className="inner-logo" src={assets.logo} alt="" />
                <h2 className="inner-title">
                    Hệ thống quản lý dây chuyền sản xuất xe máy
                </h2>
                <p className="inner-desc">
                    Giám sát, tối ưu hóa quy trình sản xuất và nâng cao hiệu suất vận hành
                </p>
            </div>
        </div>
    </div>
  );
};

export default Hero;