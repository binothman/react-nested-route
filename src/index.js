/*
* NestedRoute: to handle sub route with React Router v2
* - use this component insted of Route if will pass childers with Route
* @props: _Object_, pass all props that you can pass with Route from react-router-dom
* @props, path: router path
* @props, component: router component
*/

import React from 'react'
import { Route } from 'react-router-dom'

const NestedRoute = props => {
  /*
  *  Handle rendering component and their childrend
  *  @p: _Object_, props of parent Component
  *  return: Route, with Component according to router path.
  */
  const parentComponent = p => {
    const Component = props.component
    const pathArr = p.location.pathname.split('/')
    const child = getChildren(props.children, pathArr)

    return (
        <Route
          key={Math.floor(Math.random() * 10000)}
          exact={props.exact}
          path={props.path}
          render={rp =>
            <Component {...rp}>
              {renderChildren(child, props, rp)}
            </Component>
          } />
      )
  }

  return <Route path={props.path} component={parentComponent} />
}

const renderChildren = (child, parent) => {
  if(!child) return
  const Ch = child.props.component
  if(child.props.children){
    return <NestedRoute
              {...child.props}
              path={`${parent.path}/${child.props.path}`}
              component={Ch} />
  }else{
    return <Route
              {...child.props}
              path={`${parent.path}/${child.props.path}`}
              component={Ch} />
  }
}

/*
* Handle childer of Component
* @ch: _Object_, React Element
* @pathArr: _Array_, list of path routers
* return: React Element, accourding to current router or false
*/
const getChildren = (ch, pathArr) => {
  if(!ch) return false
  if(ch.length) return ch.filter(i => pathArr.includes(i.props.path)).slice(-1)[0]
  if(pathArr.includes(ch.props.path)) return ch
  return false
}

export default NestedRoute
