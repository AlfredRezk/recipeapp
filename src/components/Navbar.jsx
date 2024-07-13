import React, { useState } from 'react'
import { Logo, Menu, MenuIcon, MenuLink, Nav } from '../styles/Navbar.styles'
import { Container, Stack } from '../styles/UI.styles'
import { Link } from 'react-router-dom';
import { MdMenu } from 'react-icons/md'
import { useAuth } from '../context/Auth';

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const {isAuth, logout } = useAuth()
  return (
<Nav>
  <Container>
    <Stack direction="row" align="center" justify="space-between">
      <Link to="/"> <Logo/></Link>

    <MenuIcon>
      <MdMenu onClick={()=> setOpen(!open)}/>
    </MenuIcon>
    <Menu show={open}>
      <MenuLink to="/about">About </MenuLink>
      <MenuLink to="https://github.com/" target='_blank' >Github </MenuLink>
      {!isAuth&&<MenuLink to="/login">Login </MenuLink>}
      {isAuth&&<MenuLink to="/login" onClick={logout}>Logout </MenuLink>}
    </Menu>
    </Stack>
  </Container>
</Nav>
  )
}
