import React from "react";
import { Box, Typography, Link, Avatar } from '@mui/material';
import Profilephoto from "../Images/Profilephoto.jpg";

export default function Header() {
  return (
    <Box component="header" sx={headerStyle}>
      <Box sx={headerContentStyle}>
        <Box sx={textContentStyle}>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 550 }}>
            Narahari Pradeep Kumar Reddy
          </Typography>
          <Typography variant="subtitle1" sx={{ fontSize: "18px" }}>
            React.js Developer
          </Typography>
          <Link href="mailto:pradeepnarahari294@gamil.com" sx={linkStyle}>
           npradeepkumar890@gmail.com
          </Link>
        </Box>
        <Avatar src={Profilephoto} alt="Profile" sx={avatarStyle} />
      </Box>
    </Box>
  );
}

const headerStyle = {
  backgroundColor: "#4CAF50",
  color: "#ffffff",
  padding: "40px 0",
  marginBottom: "20px",
  textAlign: "center",
};

const headerContentStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  maxWidth: "800px",
  margin: "0 auto",
};

const textContentStyle = {
  flex: "1",
};

const linkStyle = {
  color: "#ffffff",
  textDecoration: "none",
  marginTop: "8px",
};

const avatarStyle = {
  width: "100px",
  height: "100px",
  marginLeft: "20px",
};
