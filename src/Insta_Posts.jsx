import React from 'react'

import insta_post01 from './assets/images/blog1.jpg';
import insta_post02 from './assets/images/blog2.jpg';
import insta_post03 from './assets/images/blog3.jpg';
import insta_post04 from './assets/images/blog4.jpg';
function Insta_Posts() {
  return (
<div class="row g-0">
        <div class="col-lg-3 col-sm-6">
            <div class="insta-post">
                <img src={insta_post01} alt=""/>
                <a href="#" class="insta-btn">
                    <i class="ri-instagram-fill"></i>
                </a>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6">
            <div class="insta-post">
                <img src={insta_post02} alt=""/>
                <a href="#" class="insta-btn">
                    <i class="ri-instagram-fill"></i>
                </a>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6">
            <div class="insta-post">
                <img src={insta_post03} alt=""/>
                <a href="#" class="insta-btn">
                    <i class="ri-instagram-fill"></i>
                </a>
            </div>
        </div>
        <div class="col-lg-3 col-sm-6">
            <div class="insta-post">
                <img src={insta_post04} alt=""/>
                <a href="#" class="insta-btn">
                    <i class="ri-instagram-fill"></i>
                </a>
            </div>
        </div>
    </div>  )
}

export default Insta_Posts