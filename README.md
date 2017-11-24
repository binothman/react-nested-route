# react-nested-route

[![Build Status](https://travis-ci.org/binothman/react-nested-route.svg?branch=master)](https://travis-ci.org/binothman/react-nested-route)

Make nested route simple and reusable.

## Install

```sh
$ npm install --save react-nested-route
```

## Full example

```js
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import { NestedRoute, SubRoute } from 'react-nested-route'

const User = ({children}) => (
  <div>
    <h1>User Container Component</h1>
    {/* tabs links */}
    <div>
      <Link to="/user/profile">Profile</Link><br />
      <Link to="/user/settings">Settings</Link><br />
      <Link to="/user/messages">Messages</Link>
    </div>

    {/* child component render */}
    <div>{children}</div>
  </div>
)

{/* Some of Sub component */}
const Profile = () => <div>User Profile Component</div>
const Settings = () => <div>User Settings Component</div>
const Messages = () => <div>User Messages Component</div>

{/* Other Component */}
const App = () => <div>App Component</div>

ReactDOM.render(
  <Router>
    <Switch>

      <NestedRoute path="/user" component={User}>
        <SubRoute path="/settings" component={Settings} norender />
        <SubRoute path="/profile" component={Profile} norender />
        <SubRoute path="/messages" component={Messages} norender />
      </NestedRoute>

      <Route path="/" component={App} />

    </Switch>
  </Router>,
  document.getElementById('root'))
```
* Use `norender` if you will render the children component on wrapper component in some part of your component, otherwise the child component will render automaticaly. if your child component like Modal, Popup ..etc or any absolute component no need to use `norender`.

