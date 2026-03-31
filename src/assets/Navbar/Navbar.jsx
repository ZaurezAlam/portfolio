import React, { useState } from 'react';
import {
  AppBar, Toolbar, Typography, IconButton, Drawer, 
  Box, List, ListItem, ListItemButton, ListItemIcon, 
  ListItemText, useMediaQuery, useTheme, Button
} from '@mui/material';
import {
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  Menu as MenuIcon,
  Description as CVIcon
} from '@mui/icons-material';
import './Navbar.css';

const navLinks = [
  { text: "LinkedIn", link: "https://www.linkedin.com/in/zaurez-alam-khan-0ab9bb32a", icon: <LinkedInIcon /> },
  { text: "GitHub", link: "https://github.com/ZaurezAlam", icon: <GitHubIcon /> },
  { text: "Phone", link: "tel:+923358273980", icon: <PhoneIcon /> },
  { text: "Email", link: "mailto:zaurezalam@gmail.com", icon: <EmailIcon /> },
];

export const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  return (
    <>
      <AppBar 
        position="fixed" 
        elevation={0}
        className="navbar-glass"
      >
        <Toolbar className="navbar-container">
          {/* Logo Section */}
          <Typography
            variant="h6"
            component="a"
            href="https://zaurezportfolio.vercel.app/"
            className="logo-text"
          >
            Zaurez <span className="text-orange">Alam</span>
          </Typography>

          {/* Desktop Navigation */}
          {!isMobile ? (
            <Box className="nav-actions">
              {navLinks.map((item) => (
                <IconButton
                  key={item.text}
                  href={item.link}
                  target="_blank"
                  className="nav-icon-btn"
                  aria-label={item.text}
                >
                  {item.icon}
                </IconButton>
              ))}
              <Button
                variant="contained"
                href="/Zaurez_Alam_Khan_CV.pdf"
                target="_blank"
                className="cv-button"
              >
                View CV
              </Button>
            </Box>
          ) : (
            <IconButton 
              edge="start" 
              color="inherit" 
              onClick={toggleDrawer(true)}
            >
              <MenuIcon sx={{ fontSize: 32 }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer 
        anchor="right" 
        open={drawerOpen} 
        onClose={toggleDrawer(false)}
        PaperProps={{ className: "drawer-paper" }}
      >
        <Box sx={{ width: 280, pt: 4 }}>
          <List>
            {navLinks.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component="a" href={item.link} className="drawer-item">
                  <ListItemIcon className="drawer-icon">{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Box className="drawer-footer">
             <Button
                fullWidth
                variant="contained"
                href="/Zaurez_Alam_Khan_CV.pdf"
                className="cv-button"
                startIcon={<CVIcon />}
              >
                Download CV
              </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};