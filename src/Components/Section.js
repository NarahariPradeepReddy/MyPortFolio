import React from 'react';
import { Box, Typography } from '@mui/material';

export default function Section({ title, children }) {
  return (
    <Box component="section" sx={sectionStyle}>
      <Typography variant="h5" component="h2" sx={{ fontWeight: 600, marginBottom: "20px", color: "#333" }}>
        {title}
      </Typography>
      {children}
    </Box>
  );
}

const sectionStyle = {
  backgroundColor: "#ffffff",
  padding: "30px",
  borderRadius: "8px",
  boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
  margin: "20px 0",
  maxWidth: "800px",
  marginLeft: "auto",
  marginRight: "auto",
};
