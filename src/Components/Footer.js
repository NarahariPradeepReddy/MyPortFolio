import React from 'react';
import { Box, Divider, Typography, Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn'; 

export default function Footer() {
  return (
    <Box component="footer" sx={{ textAlign: "center", marginTop: "40px", padding: "20px", backgroundColor: "#f5f5f5" }}>
      <Divider sx={{ borderColor: "#4CAF50", marginBottom: "10px" }} />
      <Typography variant="body1" sx={{ fontWeight: 500, marginBottom: "10px" }}>
        Connect with me on{' '}
        <Link href="www.linkedin.com/in/pradeep-kumar-reddy-n091095" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon sx={{ verticalAlign: 'middle', marginRight: '5px' }} />
          LinkedIn
        </Link>
      </Typography>
    </Box>
  );
}
