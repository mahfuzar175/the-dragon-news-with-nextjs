"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from "@/assets/logo.png"
import Image from 'next/image';
import { IconButton, Stack } from '@mui/material';

// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from 'next/link';


const navItems = [
  {
    route: "Home",
    pathname: "/",
  },
  {
    route: "Pages",
    pathname: "/pages",
  },
  {
    route: "News",
    pathname: "/news",
  },
  {
    route: "About",
    pathname: "/about",
  },
  {
    route: "Contact",
    pathname: "/contact",
  },
  
];

function Navbar() {
  

  return (
    <AppBar position="static" className='bg-black'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
        <Image src={logo} height={100} width={100} alt="logo"></Image>
          
          <Box className="w-full text-center">
            {navItems.map((item) => (
              <Link key={item} href={item.pathname}>
                <Button className='text-white'>
                  {item.route}
                </Button>
              </Link>
            ))}
          </Box>
          <Box>
            <Stack direction="row" sx={{
              "& svg": {
                color: "white",
              },
            }}>
            <IconButton>
              <FacebookIcon></FacebookIcon>
            </IconButton>
            <IconButton>
              <FacebookIcon></FacebookIcon>
            </IconButton>
            <IconButton>
              <FacebookIcon></FacebookIcon>
            </IconButton>
            <IconButton>
              <FacebookIcon></FacebookIcon>
            </IconButton>
            </Stack>
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;