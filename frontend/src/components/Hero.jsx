import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {

  return (
    <div class="hero">
        <div class="container">
            <div class="inner-wrap">
                <img class="inner-logo" src={assets.logo} alt="" />
                <h2 class="inner-title">
                    Hệ thống quản lý dây chuyền sản xuất xe máy
                </h2>
                <p class="inner-desc">
                    Giám sát, tối ưu hóa quy trình sản xuất và nâng cao hiệu suất vận hành
                </p>
            </div>
        </div>
    </div>
  );
};

export default Hero;