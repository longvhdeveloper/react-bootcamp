import React from 'react'
import { Link } from 'react-router-dom'

const PortfolioPage = () => (
  <div>
    <p>This portfolio page</p>
    <Link to="/portfolio/1">Item one</Link>
    <Link to="/portfolio/2">Item two</Link>
  </div>
)

export default PortfolioPage
