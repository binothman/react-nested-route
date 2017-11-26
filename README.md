# react-nested-route

[![Build Status](https://travis-ci.org/binothman/react-nested-route.svg?branch=master)](https://travis-ci.org/binothman/react-nested-route) [![npm (scoped)](https://img.shields.io/npm/v/@cycle/core.svg)](https://www.npmjs.com/package/react-nested-route)

Make nested route simple and easy to use.
This package helping you to create nested route in a simple way. render your sub-component directly when router URL call, just declare Parent and Childern router and will render when router open.

> Required [React Router v4.2.2][df1].

> Use this package under [`<Switch>`][df2].

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


ReactDOM.render(
  <Router>
    <Switch>
      
      <NestedRoute path="/main" component={MainContainer}> 
        <SubRoute path="/sub1" component={SubComponent1} /> 
        <SubRoute path="/sub3" component={SubComponent2} /> 
        <SubRoute path="/sub3" component={SubComponent3} /> 
      </NestedRoute>
      
    </Switch>
  </Router>,
  document.getElementById('root'))

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

// Sub components
const Settings = () => <div>User Settings Component</div>
const Profile = () => <div>User Profile Component</div>
const Messages = () => <div>User Messages Component</div>

// App main Component 
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
## Use `autorender`
If you want to render children component when Router URL call without put `props.children` in wrapper component use `autorender` property in `SubRoute` .

## Example usage
```js
import { NestedRoute, SubRoute } from 'react-nested-route'

ReactDOM.render(
  <Router>
    <Switch>
    
      <NestedRoute path="/absolute" component={AbsoluteWrapper}>
        <SubRoute path="/autorender" component={AbsoluteComp} autorender />
      </NestedRoute>
      
    </Switch>
  </Router>,
  document.getElementById('root'))
```
## Full Example of using `autorender`
```js
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom'
import { NestedRoute, SubRoute } from 'react-nested-route'

// some CSS style for absolute component
const style = {
  position: 'absolute',
  background: 'rgba(0,0,0, 0.8)',
  width: '100%',
  color: '#fff',
  textAlign: 'center',
  height: '100%',
  top: 0,
}

// example absolute component to use `autorender`
const AbsoluteWrapper = () => (
  <div>Absolute Wrapper</div>
)
const AbsoluteComp = () => (
  <div style={style}>
    <h3>Absolute Component</h3>
    <Link to="/" style={{color: '#fff'}}>Back to App</Link>
  </div>
)

// App main Component 
const App = () => (
  <div>
    <Link to="/absolute/autorender">Absolute Component</Link>
  </div>
)

ReactDOM.render(
  <Router>
    <Switch>

      <NestedRoute path="/absolute" component={AbsoluteWrapper}>
        <SubRoute path="/autorender" component={AbsoluteComp} autorender />
      </NestedRoute>

      <Route path="/" component={App} />

    </Switch>
  </Router>,
  document.getElementById('root'))
```
  [df1]: <https://github.com/ReactTraining/react-router>
  [df2]: <https://reacttraining.com/react-router/web/api/Switch>
