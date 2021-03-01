import React, { useEffect } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom'
import { Router, Switch, Route } from 'react-router-dom'
import StoreProvider, { useStore, SET_USER } from './store'
import history from './history'
import agent from './agent'

import DefaultLayout from './layouts/Default'
import RegisterPage from './pages/Register'
import HomePage from './pages/Home'
import LoginPage from './pages/Login'
import AboutPage from './pages/About'
import MyAccountPage from './pages/MyAccount'

const App = () => {
  const [, dispatch] = useStore()

  useEffect(() => {
    if (localStorage.getItem('access_token')) {
      agent.Auth.me().then((user) => {
        dispatch({ type: SET_USER, payload: user })
      })
    }
  }, [])

  return (
    <Router history={history}>
      <Route>
        <DefaultLayout>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={AboutPage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/my-account" component={MyAccountPage} />
          </Switch>
        </DefaultLayout>
      </Route>
    </Router>
  )
}

ReactDOM.render(
  <ChakraProvider>
    <StoreProvider>
      <App />
    </StoreProvider>
  </ChakraProvider>,
  document.getElementById('root'),
)
