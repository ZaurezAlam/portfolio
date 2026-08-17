import React, { useState, useEffect } from 'react';
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
  Description as CVIcon,
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon
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

  // Theme toggle logic
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsLightMode(true);
      document.body.classList.add('light-mode');
    }
  }, []);

  const toggleTheme = () => {
    setIsLightMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
      } else {
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
      }
      return newMode;
    });
  };

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
              <IconButton
                onClick={toggleTheme}
                className="nav-icon-btn theme-toggle-btn"
                aria-label="Toggle Theme"
              >
                {isLightMode ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>
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
            <Box className="mobile-nav-actions">
              <IconButton
                onClick={toggleTheme}
                className="mobile-nav-btn"
                aria-label="Toggle Theme"
                disableRipple
              >
                {isLightMode ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>
              <IconButton 
                onClick={toggleDrawer(true)}
                disableRipple
                className="mobile-nav-btn"
              >
                <div className="hamburger">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </IconButton>
            </Box>
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
        <Box sx={{ width: 280, pt: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 3, mb: 2 }}>
             <IconButton onClick={toggleDrawer(false)} className="mobile-nav-btn" disableRipple>
                <div className="hamburger is-active">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
             </IconButton>
          </Box>
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
                className="drawer-cv-button"
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