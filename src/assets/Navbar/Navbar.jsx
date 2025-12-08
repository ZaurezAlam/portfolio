import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';



export const Navbar = () => {
  return (
    <>
    <AppBar position="fixed" class="bg-deep-blue">
  <Toolbar className="flex justify-center items-center">
    {/* Group container: text + icons */}
    <div className="flex items-center gap-18">
      {/* Text */}
      <a href='#'><Typography
        variant="h5"
        className="text-white font-bold hover:text-orange-500"
      >
        <h1 className="text-white font-bold text-3xl font-serif hover:text-orange-500">
  Zaurez Alam
</h1>
      </Typography></a>

      {/* Icons close together */}
      <div className="flex items-center gap-3">
        <a href='https://www.linkedin.com/in/zaurez-alam-khan-0ab9bb32a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0nbT9lOyQ06K1RI5UB9aVg%3D%3D'><LinkedInIcon className="text-white hover:text-orange-500" /></a>
        <a href='https://github.com/ZaurezAlam'><GitHubIcon className="text-white hover:text-orange-500" /></a>
       

        
      </div>
    </div>
  </Toolbar>
</AppBar>


    
</>

  )
}
