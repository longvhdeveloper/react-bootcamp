import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from '../components/HomePage'
import PageNotFound from '../components/PageNotFound'
import Header from '../components/Header'
import PortfolioPage from '../components/PortfolioPage'
import PortfolioDetailPage from '../components/PortfolioDetailPage'
import ContactPage from '../components/ContactPage'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact={true}></Route>
        <Route path="/portfolio" component={PortfolioPage} exact={true} />
        <Route path="/portfolio/:id" component={PortfolioDetailPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter
