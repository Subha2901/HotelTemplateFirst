import React, { useState } from "react";
import "./HotelDetails.css";

const HotelDeatilsTab = ({ locations }) => {
  return (
    <div className="hotel-tabs">
      <div className="tab-content">
        <div className="tab-overview">
          <h2>{locations.name}</h2>
          <p dangerouslySetInnerHTML={{ __html: locations.description }}></p>
        </div>

        <div className="tab-highlights">
          {locations.highlights.map((highlight, index) => (
            <div key={index} className="highlight-card">
              <h4>{highlight.title}</h4>
              {Array.isArray(highlight.detail) ? (
                <ul>
                  {highlight.detail.map((item, subIndex) => (
                    <li key={subIndex}>
                      <strong>{item.detailType}</strong>: {item.detailDesc}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>{highlight.detail}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelDeatilsTab;
