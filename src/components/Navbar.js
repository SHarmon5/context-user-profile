import React from 'react'
import { NavLink, } from  'react-router-dom'
import { Menu, } from 'semantic-ui-react'
import { UserConsumer } from '../providers/UserProvider'
import { FriendConsumer } from '../providers/FriendProvider'

const Navbar = () => (
  <UserConsumer>
    { value => (
      <Menu>
        <NavLink to="/">
          <Menu.Item>
            Home
          </Menu.Item>
        </NavLink>
        <NavLink to="/user/profile">
          <Menu.Item>
            { value.firstname } { value.lastname}
          </Menu.Item>
        </NavLink>
        <NavLink to="/user/friends">
          <Menu.Item>
            My friends
          </Menu.Item>
        </NavLink>
      </Menu> 
    )}
  </UserConsumer>
)

export default Navbar
