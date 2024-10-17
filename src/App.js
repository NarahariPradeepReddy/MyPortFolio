import './App.css';
import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Section from './Components/Section';
import { Typography, Box, Card, CardContent, Grid2, Divider } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Header />

      <Section title="About Me">
        <Typography variant="body1" sx={{ margin: "20px", textAlign: "justify", color: "#555" }}>
          I am Narahari Pradeep Kumar Reddy, a React.js Developer with 5 years of IT experience, including 2 years focused on React.js development. I specialize in building responsive UIs using React Hooks, HTML5, CSS3, and JavaScript. I'm passionate about creating seamless user experiences and constantly learning new technologies to stay on top of trends.
        </Typography>
      </Section>

      <Section title="Skills">
        <Grid2 container spacing={2} justifyContent="center">
          {['HTML5', 'CSS3', 'JavaScript', 'React.js', 'React Hooks', 'React Redux', 'GitHub', 'Jira'].map((skill, index) => (
            <Grid2 item xs={6} sm={4} md={3} key={index}>
              <Card sx={cardStyle}>
                <CardContent>
                  <Typography variant="h6" align="center" sx={{ fontWeight: 500 }}>
                    {skill}
                  </Typography>
                </CardContent>
              </Card>
            </Grid2>
          ))}
        </Grid2>
      </Section>

      <Section title="Projects">
        <Grid2 container spacing={2} sx={{ margin: "20px" }}>
          <Grid2 item xs={12} md={6}>
            <Card sx={projectCardStyle}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  JaldiLab
                </Typography>
                <Typography variant="body2" sx={{ marginTop: "10px", color: "#666" }}>
                  Developed legal information platform with React Components. Translated FIGMA designs into responsive UI and handled version control via GitHub.
                </Typography>
              </CardContent>
            </Card>
          </Grid2>

          <Grid2 item xs={12} md={6}>
            <Card sx={projectCardStyle}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Sourceasy
                </Typography>
                <Typography variant="body2" sx={{ marginTop: "10px", color: "#666" }}>
                  Built login, signup, and password reset components using React Context API. Improved user experience with optimized navigation and smooth state management.
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        </Grid2>
      </Section>

      <Section title="Work Experience">
        <Divider sx={{ marginBottom: "10px" }} />
        <Box sx={{ margin: "20px" }}>
          <Typography variant="body1">
            <strong>Sr. Software Engineer - ProtonsHub Technologies:</strong> May 2023 - June 2024
          </Typography>
          <Typography variant="body1">
            <strong>Sr. Representative - Concentrix:</strong> April 2018 - Feb 2022
          </Typography>
        </Box>
      </Section>

      <Section title="Education">
        <Box sx={{ margin: "20px" }}>
          <Typography variant="body1">
            Bachelor of Technology (B.Tech) in Mechanical Engineering from Sri Venkateswara Institute of Technology (2017)
          </Typography>
        </Box>
      </Section>

      <Footer />
    </div>
  );
}

export default App;

const cardStyle = {
  padding: "10px",
  boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#f5f5f5",
  borderRadius: "8px",
  textAlign: "center"
};

const projectCardStyle = {
  padding: "20px",
  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  backgroundColor: "#ffffff",
  borderRadius: "8px",
};
