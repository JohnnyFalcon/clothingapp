import { Box, Paper, InputBase, useMediaQuery, Alert } from "@mui/material";
import { ButtonContained } from "../SigningPages/styles";
import React, { useState } from "react";
import "./styles.css";
import { addNewSubscriber } from "../../utils/firebase/firebase.utils";
const Footer = () => {
  const isMobile = useMediaQuery("(max-width:900px)");
  const [input, setInput] = useState("");
  const [alert, setAlert] = useState(false);
  const handleInput = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    addNewSubscriber(input);

    setInput("");
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  };
  return (
    <>
      <Box
        className="Box-footer"
        sx={{
          display: "flex",
          justifyContent: !isMobile && "space-around",
          flexDirection: isMobile && "column",
          alignItems: "center"
        }}
      >
        <p className="news-text">SIGN UP FOR OUR NEWSLETTER!</p>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              justifyContent: "space-around",
              display: "flex",
              alignItems: "center",
              mb: isMobile && 5
            }}
          >
            {alert ? (
              <Alert
                severity="success"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: isMobile ? 200 : 300,
                  mr: 2,
                  height: "40px",
                  letterSpacing: 2
                }}
              >
                Thank you for subscribing!
              </Alert>
            ) : (
              <Paper
                elevation={2}
                sx={{
                  p: "2px 4px",
                  display: "flex",
                  alignItems: "center",
                  width: isMobile ? 200 : 300,
                  mr: 2,
                  height: "40px"
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Enter your email address"
                  type="email"
                  onChange={handleInput}
                  value={input}
                />
              </Paper>
            )}
            <ButtonContained
              type="submit"
              variant="outlined"
              sx={{ width: isMobile ? "100px" : "200px" }}
            >
              Subscribe
            </ButtonContained>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default Footer;
