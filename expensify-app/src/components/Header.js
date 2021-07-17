import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <ul>
      <li>
        <NavLink activeClassName="is-active" to="/" exact={true}>
          Home page
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="is-active" to="/create">
          Create expense page
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="is-active" to="/help">
          Help page
        </NavLink>
      </li>
    </ul>
  </header>
)

export default Header
