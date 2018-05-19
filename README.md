# react-nested-route

[![Build Status](https://travis-ci.org/binothman/react-nested-route.svg?branch=master)](https://travis-ci.org/binothman/react-nested-route) [![npm (scoped)](https://img.shields.io/npm/v/@cycle/core.svg)](https://www.npmjs.com/package/react-nested-route) 

Make nested route simple and easy to use.
This package helping you to create nested route in a simple way. render your sub-component directly when router URL call, just declare Parent and Childern router and will render when router open.

> Required [React Router v4.2.2][df1].


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
import Router from 'react-nested-route'

// make your routers
<Router path="/main_router" component={MainComponent}>
  <Route path="sub_router1" component={SubComponent1}  />
  <Route path="sub_router2" component={SubComponent2}  />
</Router>

// URLs Examples
// - http://yoursite/main_router
// - http://yoursite/main_router/sub_router1
// - http://yoursite/main_router/sub_router2

```


## Full example

```js
import React from 'react'
import { Route } from 'react-router'
import Router from 'react-nested-route'

// main component (parent component)
const MainComponent = props => (
  <div>
    <h1>Main Component</h1>
    {props.children}
  </div>
)

// sub component 1
const SubComponent1 = () => (
  <div>Sub Component 1</div>
)

// sub component 2
const SubComponent2 = () => (
  <div>Sub Component 2</div>
)

const MyRouters = props => (
  <Router path="/main_router" component={MainComponent}>
    <Route path="sub_router1" component={SubComponent1}  />
    <Route path="sub_router2" component={SubComponent2}  />
  </Router>
)

export default MyRouters

```

  [df1]: <https://github.com/ReactTraining/react-router>
  [df2]: <https://reacttraining.com/react-router/web/api/Switch>
