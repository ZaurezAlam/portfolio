import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useMediaQuery, useTheme } from '@mui/material';

export const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'), { noSsr: true });

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawerLinks = [
    { 
      text: "LinkedIn", 
      link: "https://www.linkedin.com/in/zaurez-alam-khan-0ab9bb32a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0nbT9lOyQ06K1RI5UB9aVg%3D%3D",
      icon: <LinkedInIcon />
    },
    { 
      text: "GitHub", 
      link: "https://github.com/ZaurezAlam",
      icon: <GitHubIcon />
    },
    { 
      text: "Phone", 
      link: "tel:+923358273980", // Replace with your phone number
      icon: <PhoneIcon />
    },
    { 
      text: "Email", 
      link: "mailto:your.zaurezalam@gmail.com", // Replace with your email
      icon: <EmailIcon />
    },
  ];

  return (
    <>
      <AppBar position="fixed"sx={{backgroundColor: 'oklch(15.3% 0.066 243.157)',}}>
       <Toolbar
  sx={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: { xs: 56, sm: 64 }, // mobile friendly
  }}
>
          {/* Logo/Name */}
          <a href='https://zaurezportfolio.vercel.app/'>
            <Typography variant="h5">
              <h1 className="text-white font-bold text-2xl md:text-3xl font-serif hover:text-orange-500 transition-colors">
                Zaurez Alam
              </h1>
            </Typography>
          </a>

          {/* Desktop Icons */}
          {!isMobile && (
            <div className="flex items-center gap-4 md:gap-5">
              <a 
                href='https://www.linkedin.com/in/zaurez-alam-khan-0ab9bb32a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0nbT9lOyQ06K1RI5UB9aVg%3D%3D'
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon 
                  className="text-white hover:text-orange-500 transition-colors cursor-pointer" 
                  sx={{ fontSize: { xs: 28, sm: 32, md: 40 } }}
                />
              </a>
              <a 
                href='https://github.com/ZaurezAlam'
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <GitHubIcon 
                  className="text-white hover:text-orange-500 transition-colors cursor-pointer" 
                  sx={{ fontSize: 40 }}
                />
              </a>
              <a 
                href='tel:+1234567890' // Replace with your phone number
                aria-label="Phone"
              >
                <PhoneIcon 
                  className="text-white hover:text-orange-500 transition-colors cursor-pointer" 
                  sx={{ fontSize: 40 }}
                />
              </a>
              <a 
                href='mailto:your.email@example.com' // Replace with your email
                aria-label="Email"
              >
                <EmailIcon 
                  className="text-white hover:text-orange-500 transition-colors cursor-pointer" 
                  sx={{ fontSize: 40 }}
                />
              </a>
              <a
  href="/Zaurez_Alam_Khan_CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
>
  View CV
</a>
            </div>
          )}

          {/* Mobile Menu Icon */}
          {isMobile && (
            <IconButton 
              color='inherit' 
              onClick={toggleDrawer(true)}
              aria-label="Open menu"
            >
              <MenuIcon className="text-white" sx={{ fontSize: 32 }} />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer 
        anchor="right" 
        open={drawerOpen} 
        onClose={toggleDrawer(false)}
      >
        <Box sx={{width: 250,height: '100%',backgroundColor: 'oklch(15.3% 0.066 243.157)',}}>
          <List>
            {drawerLinks.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  component="a"
                  href={item.link}
                  target={item.text === "LinkedIn" || item.text === "GitHub" ? "_blank" : undefined}
                  rel={item.text === "LinkedIn" || item.text === "GitHub" ? "noopener noreferrer" : undefined}
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(255, 165, 0, 0.1)',
                    }
                  }}
                >
                  <ListItemIcon sx={{ color: 'white', minWidth: 40 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText 
                    primary={item.text} 
                    sx={{ 
                      color: 'white',
                      '& .MuiTypography-root': {
                        fontWeight: 500
                      }
                    }} 
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <a
  href="/Zaurez_Alam_Khan_CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className=" flex justify-center  bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors w-40 mx-12"
>
  View CV
</a>
        </Box>
      </Drawer>
    </>
  );
};