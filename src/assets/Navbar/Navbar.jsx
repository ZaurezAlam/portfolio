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
  Description as CVIcon,
  LightMode as LightModeIcon,
  DarkMode as DarkModeIcon
} from '@mui/icons-material';
import './Navbar.css';

const navLinks = [
  { text: "LinkedIn", link: "https://www.linkedin.com/in/zaurez-alam-khan-0ab9bb32a", icon: <LinkedInIcon /> },
  { text: "GitHub",   link: "https://github.com/ZaurezAlam",                         icon: <GitHubIcon /> },
  { text: "Phone",    link: "tel:+923358273980",                                      icon: <PhoneIcon /> },
  { text: "Email",    link: "mailto:zaurezalam@gmail.com",                            icon: <EmailIcon /> },
];

export const Navbar = () => {
  const [drawerOpen, setDrawerOpen]   = useState(false);
  const [scrolled,   setScrolled]     = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  const theme    = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  /* ── Scroll-aware navbar ────────────────────────────────────────────────── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── Theme init from localStorage ──────────────────────────────────────── */
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
      setIsLightMode(true);
      document.body.classList.add('light-mode');
    }
  }, []);

  const toggleTheme = () => {
    setIsLightMode(prev => {
      const next = !prev;
      document.body.classList.toggle('light-mode', next);
      localStorage.setItem('theme', next ? 'light' : 'dark');
      return next;
    });
  };

  const toggleDrawer = (open) => () => setDrawerOpen(open);

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        className={`navbar-glass ${scrolled ? 'navbar-glass--scrolled' : ''}`}
      >
        <Toolbar className="navbar-container">

          {/* ── Logo ── */}
          <Typography
            variant="h6"
            component="a"
            href="https://zaurezportfolio.vercel.app/"
            className="logo-text"
          >
            <span className="logo-first">Zaurez</span>{' '}
            <span className="logo-accent">Alam</span>
          </Typography>

          {/* ── Desktop nav ── */}
          {!isMobile ? (
            <Box className="nav-actions">
              {navLinks.map((item, i) => (
                <IconButton
                  key={item.text}
                  href={item.link}
                  target="_blank"
                  className="nav-icon-btn"
                  aria-label={item.text}
                  style={{ animationDelay: `${i * 80}ms` }}
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
            /* ── Mobile action cluster ── */
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
                aria-label="Open menu"
              >
                <div className="hamburger">
                  <span /><span /><span />
                </div>
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      {/* ── Mobile Drawer ── */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          className: 'drawer-paper',
          sx: {
            width: { xs: '84vw', sm: 380 },
            maxWidth: '100vw',
          },
        }}
      >
        <Box className="drawer-inner">
          {/* Header */}
          <Box className="drawer-header">
            <span className="drawer-brand">
              Zaurez <span className="logo-accent">Alam</span>
            </span>
            <IconButton onClick={toggleDrawer(false)} className="mobile-nav-btn" disableRipple aria-label="Close menu">
              <div className="hamburger is-active"><span /><span /><span /></div>
            </IconButton>
          </Box>

          {/* Links */}
          <List className="drawer-list">
            {navLinks.map((item, i) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  component="a"
                  href={item.link}
                  className="drawer-item"
                  style={{ animationDelay: `${i * 60 + 100}ms` }}
                >
                  <ListItemIcon className="drawer-icon">{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} className="drawer-item-text" />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          {/* Footer CTA */}
          <Box className="drawer-footer">
            <Button
              fullWidth
              href="/Zaurez_Alam_Khan_CV.pdf"
              target="_blank"
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