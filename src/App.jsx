import "./App.css";

// MUI
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import CloudIcon from "@mui/icons-material/Cloud";
import Button from "@mui/material/Button";

function App() {
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
                  الاثنين 10-10-2030
                </Typography>
              </div>
              {/***  CITY & TIME */}
              <hr />
              {/* CONTAINER OF DEGREE + CLOUD ICON */}
              <div style={{ display: "flex", justifyContent: "space-around" }}>
                {/* DEGRE & DESCRIPTION */}
                <div>
                  {/* TEMP */}
                  <div>
                    <Typography variant="h1" sx={{ textAlign: "right" }}>
                      38
                    </Typography>
                    {/* TODO :: Image  */}
                  </div>
                  {/* ** TEMP */}
                  <Typography variant="h6">broken clouds</Typography>
                  {/* MIN & MAX */}
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <h5>الصغرى : 25</h5>
                    <h5 style={{ margin: "0px 10px" }}>|</h5>
                    <h5>الكبرى : 25</h5>
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
            <Button variant="text" sx={{ color: "white" }}>
              انجليزى
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
