# react-nested-route

[![Build Status](https://travis-ci.org/binothman/react-nested-route.svg?branch=master)](https://travis-ci.org/binothman/react-nested-route) [![npm (scoped)](https://img.shields.io/npm/v/@cycle/core.svg)](https://www.npmjs.com/package/react-nested-route)

Make nested route simple and easy to use.
This package helping you to create nested route in a simple way. render your sub-component directly when router URL call, just declare Parent and Childern router and will render when router open.


## Install via NPM

```sh
$ npm install --save react-nested-route
```
## Install via Yarn

```sh
$ yarn add react-nested-route
```

## Usage
```js
import { NestedRoute, SubRoute } from 'react-nested-route'


<NestedRoute path="/main" component={MainContainer}> 
  <SubRoute path="/sub1" component={SubComponent1} /> 
  <SubRoute path="/sub3" component={SubComponent2} /> 
  <SubRoute path="/sub3" component={SubComponent3} /> 
</NestedRoute>

// URLs Examples
// - http://yoursite/main
// - http://yoursite/main/sub1
// - http://yoursite/main/sub2
// - http://yoursite/main/sub3

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
      <Link to="/user/messages">Messages</Link><br />
    </div>

    {/* child component render */}
    <div>
      <h2>Tab content</h2>
      {children}
    </div>
  </div>
)

{/* Sub components */}
const Settings = () => <div>User Settings Component</div>
const Profile = () => <div>User Profile Component</div>
const Messages = () => <div>User Messages Component</div>

{/* App main Component */}
const App = () => <div><Link to="/user">User</Link></div>

ReactDOM.render(
  <Router>
    <Switch>

      <NestedRoute path="/user" component={User}>
        <SubRoute path="/settings" component={Settings} />
        <SubRoute path="/profile" component={Profile} />
        <SubRoute path="/messages" component={Messages}  />
      </NestedRoute>

      <Route path="/" component={App} />

    </Switch>
  </Router>,
  document.getElementById('root'))
```
* Use __`norender`__ if you will render the children component on wrapper component in some part of your component, otherwise the child component will render automaticaly. if your child component like Modal, Popup ..etc or any absolute component no need to use __`norender`__.

