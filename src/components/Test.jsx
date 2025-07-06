import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
const Test = () => {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">السلام عليكم</Button>
      <h1>السلام عليكم</h1>
    </Stack>
  );
};

export default Test;
