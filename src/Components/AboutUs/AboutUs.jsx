import React from "react";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <>
      <div class="responsive-container-block bigContainer">
        <div class="responsive-container-block Container">
          <div class="responsive-container-block leftSide">
            <p class="text-blk heading">About Us</p>
            <p class="text-blk subHeading">
              Welcome to Dolphin Hotels, where timeless elegance meets
              unparalleled hospitality. With a rich legacy and prime locations
              across India, we offer luxurious accommodations, exquisite dining,
              and world-class amenities. Whether you're traveling for business
              or leisure, we ensure a stay filled with comfort, convenience, and
              unforgettable memories. Experience the perfect blend of modern
              luxury and heartfelt service with us.
            </p>
          </div>
          <div class="responsive-container-block rightSide">
            {/* <img
              class="number1img"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/ET32.jpg"
            /> */}
            <img
              class="number2img"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d14.png"
            />
            {/* <img
              class="number3img"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/b245.png"
            /> */}
            <img
              class="number5img"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/Customer supports.png"
            />
            <iframe
              allowfullscreen="allowfullscreen"
              class="number4vid"
              poster="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/b242.png"
              src="https://www.youtube.com/embed/svg%3E?"
            ></iframe>
            <img
              class="number7img"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d51.png"
            />
            {/* <img
              class="number6img"
              src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/d12.png"
            /> */}
          </div>
        </div>
      </div>
    </>
  );
}
