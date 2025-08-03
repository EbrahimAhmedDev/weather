import "./App.css";

// MUI
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CloudIcon from "@mui/icons-material/Cloud";
import Button from "@mui/material/Button";

import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";

function App() {
  // const [temp, setTemp] = useState(null);
  // const [tempMin, setTempMin] = useState(null);
  // const [tempMax, setTempMax] = useState(null);
  const [temp, setTemp] = useState({
    number: null,
    description: null,
    min: null,
    max: null,
    icon: null,
  });
  const [dateAndTime, setDateAndTime] = useState("");
  useEffect(() => {
    const today = new Date();
    const days = [
      "الأحد",
      "الاثنين",
      "الثلاثاء",
      "الأربعاء",
      "الخميس",
      "الجمعة",
      "السبت",
    ];

    // استخراج القيم
    const dayName = days[today.getDay()];
    const day = today.getDate().toString().padStart(2, "0");
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const year = today.getFullYear();
    // الصيغة النهائية
    setDateAndTime(`${dayName} ${day}-${month}-${year}`);
    axios
      .get(
        "https://api.openweathermap.org/data/2.5/weather?lat=30.0444&lon=31.2357&units=metric&lang=ar&appid=501693104f01e393238c8c3e79cdb33e"
        // "https://api.openweathermap.org/data/2.5/weather?lat=30.0444&lon=31.2357&units=metric&appid=501693104f01e393238c8c3e79cdb33e"
      )
      .then(function (response) {
        console.log(response);
        const number = Math.round(response.data.main.temp);
        const max = response.data.main.temp_max;
        const min = response.data.main.temp_min;
        const description = response.data.weather[0].description;
        const icon = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
        setTemp((prev) => ({ ...prev, number, max, min, description, icon }));
        (
          document.querySelector("link[rel~='icon']") ||
          (() => {
            const l = document.createElement("link");
            l.rel = "icon";
            document.head.appendChild(l);
            return l;
          })()
        ).href = icon;
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Container maxWidth="sm">
        {/* Content Container */}
        <div
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {/* Card */}
          <div
            className="card"
            style={{
              background: "rgba(28 52 91 / 36%",
              color: "white",
              padding: "10px",
              borderRadius: "0px 15px",
              boxShadow: "0px 11px 5px rgba(0 0 0 / 0.05) ",
              width: "100%",
            }}
          >
            {/* content */}
            <div>
              {/* CITY & TIME */}
              <div
                style={{
                  display: "flex",
                  alignItems: "end",
                  justifyContent: "start",
                }}
                dir="rtl"
              >
                <Typography variant="h2" style={{ fontWeight: "600" }}>
                  القاهرة
                </Typography>
                <Typography variant="h5" sx={{ marginRight: "20px" }}>
                  {dateAndTime}
                  {/* الاثنين
                  {`${new Date().getFullYear()}-${
                    new Date().getMonth() + 1
                  }-${new Date().getDate()}`}
                  الاثنين 10-10-2030 */}
                </Typography>
              </div>
              {/***  CITY & TIME */}
              <hr />
              {/* CONTAINER OF DEGREE + CLOUD ICON */}
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                {/* DEGRE & DESCRIPTION */}
                <div>
                  {/* TEMP */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h1" sx={{ textAlign: "right" }}>
                      {temp.number}°C
                    </Typography>
                    <img src={temp.icon} alt="icon weather" />
                  </div>
                  {/* ** TEMP */}
                  <Typography variant="h6" sx={{ textAlign: "center" }}>
                    {temp.description}
                  </Typography>
                  {/* MIN & MAX */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <h5>الصغرى : {temp.min}</h5>
                    <h5 style={{ margin: "0px 10px" }}>|</h5>
                    <h5>الكبرى : {temp.max}</h5>
                  </div>
                </div>
                {/* ** DEGRE & DESCRIPTION */}
                <CloudIcon style={{ fontSize: " 200px", color: "white" }} />
              </div>
              {/* ** CONTAINER OF DEGREE + CLOUD ICON */}
            </div>
            {/*** content */}
          </div>
          {/* ** CARD  */}
          {/* TRANSLATION CONTAINER */}
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              width: "100%",
              marginTop: "5px",
            }}
          >
            <Button
              variant="text"
              sx={{ color: "white", textTransform: "capitalize" }}
            >
              English
            </Button>
          </div>
          {/* **TRANSLATION CONTAINER */}
        </div>
        {/* ** Content Container */}
      </Container>
    </>
  );
}

export default App;
