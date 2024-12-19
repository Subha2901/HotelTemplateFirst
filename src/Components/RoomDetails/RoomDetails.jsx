import React from "react";
import { Link } from "react-router-dom";
import image1 from "../../assets/Images/HotelRoomView1.jpg";
import image2 from "../../assets/Images/HotelRoomView3.jpg";
import image3 from "../../assets/Images/HotelView3.jpg";
import Color from "color-thief-react";
import Loading from "../Loading";

import "./RoomDetails.css";

const RoomDetails = () => {
  function HexToRgb(hex) {
    if (hex.charAt(0) === "#") hex = hex.substr(1);

    // Parse the hex code into RGB values
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return r + g + b;
  }
  return (
    <>
      <div className="card-container">
        <Color src={image1} crossOrigin="anonymous" format="hex">
          {({ data, textColor, loading, error }) => {
            if (loading) return <Loading />;
            if (error) {
              data = "black";
            }
            if (data) {
              textColor = HexToRgb(data) > 220 ? "black" : "white";
            }

            return (
              <div
                className="card"
              >
                <div
                  className="card-image"
                  style={{
                    boxShadow: `${data} 0px -50px 60px 15px inset`,
                    backgroundImage: `url(${image1})`,
                  }}
                >
                  <div
                    className="card-details"
                  >
                    <p className="card-title" style={{color: `${textColor}`}}>
                      Super Deluxe Room
                    </p>
                    <div className="card-description" style={{backgroundColor: `${data}`, color: `${textColor}`, boxShadow: `${data} -20px -50px 50px 30px`}}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sapiente exercitationem fugiat officiis quasi eos placeat
                      cum error! Veniam asperiores officiis tenetur excepturi
                      porro? Voluptas laudantium possimus error est blanditiis
                      quibusdam!
                    </div>
                  </div>
                </div>
                <div
                  className="card-content"
                  style={{
                    backgroundColor: `${data}`,
                    color: `${textColor}`,
                  }}
                >
                  <div className="card-footer">
                    <p>$200/night</p>
                    <button>More Details</button>
                  </div>
                </div>
              </div>
            );
          }}
        </Color>
        <Color src={image2} crossOrigin="anonymous" format="hex">
          {({ data, textColor, loading, error }) => {
            if (loading) return <Loading />;
            if (error) {
              data = "black";
            }
            if (data) {
              textColor = HexToRgb(data) > 220 ? "black" : "white";
            }

            return (
              <div
                className="card"
              >
                <div
                  className="card-image"
                  style={{
                    boxShadow: `${data} 0px -50px 60px 15px inset`,
                    backgroundImage: `url(${image2})`,
                  }}
                >
                  <div
                    className="card-details"
                  >
                    <p className="card-title" style={{color: `${textColor}`}}>
                      Super Deluxe Room
                    </p>
                    <div className="card-description" style={{backgroundColor: `${data}`, color: `${textColor}`, boxShadow: `${data} -20px -50px 50px 30px`}}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sapiente exercitationem fugiat officiis quasi eos placeat
                      cum error! Veniam asperiores officiis tenetur excepturi
                      porro? Voluptas laudantium possimus error est blanditiis
                      quibusdam!
                    </div>
                  </div>
                </div>
                <div
                  className="card-content"
                  style={{
                    backgroundColor: `${data}`,
                    color: `${textColor}`,
                  }}
                >
                  <div className="card-footer">
                    <p>$200/night</p>
                    <button>More Details</button>
                  </div>
                </div>
              </div>
            );
          }}
        </Color>
        <Color src={image3} crossOrigin="anonymous" format="hex">
          {({ data, textColor, loading, error }) => {
            if (loading) return <Loading />;
            if (error) {
              data = "black";
            }
            if (data) {
              textColor = HexToRgb(data) > 220 ? "black" : "white";
            }

            return (
              <div
                className="card"
              >
                <div
                  className="card-image"
                  style={{
                    boxShadow: `${data} 0px -50px 60px 15px inset`,
                    backgroundImage: `url(${image3})`,
                  }}
                >
                  <div
                    className="card-details"
                  >
                    <p className="card-title" style={{color: `${textColor}`}}>
                      Super Deluxe Room
                    </p>
                    <div className="card-description" style={{backgroundColor: `${data}`, color: `${textColor}`, boxShadow: `${data} -20px -50px 50px 30px`}}>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Sapiente exercitationem fugiat officiis quasi eos placeat
                      cum error! Veniam asperiores officiis tenetur excepturi
                      porro? Voluptas laudantium possimus error est blanditiis
                      quibusdam!
                    </div>
                  </div>
                </div>
                <div
                  className="card-content"
                  style={{
                    backgroundColor: `${data}`,
                    color: `${textColor}`,
                  }}
                >
                  <div className="card-footer">
                    <p>$200/night</p>
                    <button>More Details</button>
                  </div>
                </div>
              </div>
            );
          }}
        </Color>
      </div>
    </>
  );
};

export default RoomDetails;
