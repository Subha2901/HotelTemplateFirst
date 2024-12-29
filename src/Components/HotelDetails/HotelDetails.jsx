import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CustomImageList from "../ImageListMUI";
import "./HotelDetails.css";
import HotelDetailsTab from "../HotelDeatilsTabData/HotelDetailsTab";
import locations from "../HotelDeatilsTabData/HotelDetailsTabDataData.jsx";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="hotel-details">
      <div className="hotel-details-header">
        <div className="four">
          <h1>
            <em>Welcome to Dolphin Hotels</em>
          </h1>
        </div>
        <div className="four" style={{ textAlign: "center", padding: "0.5em" }}>
          <span>
            O
            <span
              style={{
                textTransform: "uppercase",
                fontSize: "0.8em",
                padding: "0",
              }}
            >
              ur
            </span>{" "}
            D
            <span
              style={{
                textTransform: "uppercase",
                fontSize: "0.8em",
                padding: "0",
              }}
            >
              estinations
            </span>
          </span>
        </div>
      </div>
      <div className="hotel-details-table">
        <Box sx={{ bgcolor: "background.paper", width: 500 }}>
          <AppBar position="static">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="secondary"
              textColor="inherit"
              variant="fullWidth"
              aria-label="full width tabs example"
            >
              <Tab label="Item One" {...a11yProps(0)} />
              <Tab label="Item Two" {...a11yProps(1)} />
              <Tab label="Item Three" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
          {locations.map((location, index) => (
            <>
              <TabPanel value={value} index={index} dir={theme.direction}>
                <div className="tab-overview">
                  <h2>{location.name}</h2>
                  <p
                    dangerouslySetInnerHTML={{ __html: location.description }}
                  ></p>
                </div>
                <div className="hotel-1 hotel-tab">
                  <div className="location-highlights-div">
                    <div className="tab-highlights">
                      {location.highlights.map((highlight, index) => (
                        <div key={index} className="highlight-card">
                          <h4>{highlight.title}</h4>
                          {Array.isArray(highlight.detail) ? (
                            <ul>
                              {highlight.detail.map((item, subIndex) => (
                                <li key={subIndex}>
                                  <strong>{item.detailType}</strong>:{" "}
                                  {item.detailDesc}
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
                  <div className="imageList-div">
                    <CustomImageList />
                  </div>
                </div>
              </TabPanel>
              {/* <TabPanel value={value} index={index} dir={theme.direction}>
                <div className="hotel-2 hotel-tab">
                  <div>
                    <CustomImageList />
                  </div>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus dolore alias vitae fuga! Nulla, dignissimos
                    inventore? Officia in suscipit minima, optio quos excepturi
                    rerum enim eius illo, consequuntur animi sequi!
                  </div>
                </div>
              </TabPanel> */}
              {/* <TabPanel value={value} index={index} dir={theme.direction}>
                <div className="hotel-3 hotel-tab">
                  <div>
                    <CustomImageList />
                  </div>
                  <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatibus dolore alias vitae fuga! Nulla, dignissimos
                    inventore? Officia in suscipit minima, optio quos excepturi
                    rerum enim eius illo, consequuntur animi sequi!
                  </div>
                </div>
              </TabPanel> */}
            </>
          ))}
        </Box>
      </div>
    </div>
  );
}
