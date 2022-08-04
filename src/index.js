import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Page2 from './views/page-2'

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Home} path="/" />
        <Route exact component={Page2} path="/page-2" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
