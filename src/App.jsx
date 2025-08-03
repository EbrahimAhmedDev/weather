import "./App.css";

// MUI
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CloudIcon from "@mui/icons-material/Cloud";
import Button from "@mui/material/Button";

import axios from "axios";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function App() {
  const { t, i18n } = useTranslation();

  const [temp, setTemp] = useState({
    number: null,
    description: null,
    min: null,
    max: null,
    icon: null,
  });

  const [local, setLocal] = useState("ar");
  const [dateAndTime, setDateAndTime] = useState("");

  useEffect(() => {
    i18n.changeLanguage(local);

    const today = new Date();
    const dayName = today
      .toLocaleDateString(local === "ar" ? "ar-EG" : "en-GB", {
        weekday: "long",
      })
      .toLowerCase();
    const day = today.getDate().toString().padStart(2, "0");
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const year = today.getFullYear();
    setDateAndTime(`${t(dayName)} ${day}-${month}-${year}`);

    document.body.dir = local == "ar" ? "rtl" : "ltr";

    document.body.style.transition = "all 1s";
    axios
      .get(
        local == "ar"
          ? "https://api.openweathermap.org/data/2.5/weather?lat=30.0444&lon=31.2357&units=metric&lang=ar&appid=501693104f01e393238c8c3e79cdb33e"
          : "https://api.openweathermap.org/data/2.5/weather?lat=30.0444&lon=31.2357&units=metric&lang=en&appid=501693104f01e393238c8c3e79cdb33e"
      )
      .then(function (response) {
        const number = Math.round(response.data.main.temp);
        const max = response.data.main.temp_max;
        const min = response.data.main.temp_min;
        const description = response.data.weather[0].description;
        const icon = `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;
        setTemp({ number, max, min, description, icon });

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
      .catch(console.error);
  }, [local]);

  const handleLangClick = () => {
    const newLang = local === "en" ? "ar" : "en";
    setLocal(newLang);
  };

  return (
    <Container maxWidth="sm">
      <div
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
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
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "end",
                justifyContent: "start",
              }}
            >
              <Typography
                variant="h2"
                style={{ fontWeight: "600", marginInlineEnd: "50px" }}
              >
                {t("cairo")}
              </Typography>
              <Typography variant="h5" sx={{ marginRight: "20px" }}>
                {dateAndTime}
              </Typography>
            </div>
            <hr />
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div>
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
                <Typography variant="h6" sx={{ textAlign: "center" }}>
                  {temp.description}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <h5>
                    {t("min")} : {temp.min}
                  </h5>
                  <h5 style={{ margin: "0px 0px" }}>|</h5>
                  <h5>
                    {t("max")} : {temp.max}
                  </h5>
                </div>
              </div>
              <CloudIcon style={{ fontSize: " 200px", color: "white" }} />
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
            width: "100%",
            marginTop: "5px",
            direction: "rtl",
          }}
        >
          <Button
            variant="text"
            sx={{
              color: "white",
              textTransform: "capitalize",
            }}
            onClick={handleLangClick}
          >
            {local == "en" ? "عربى" : "english"}
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default App;
