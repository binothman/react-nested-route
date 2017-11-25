/*
* NestedRoute: to run multiple components
* - use this component under react-router-dom v4
* @props: path: the url for route
* @props: component: the component will run on that url
*/
import React, { Component } from 'react'
import { Route } from 'react-router-dom'

// render children Route
function childrenRender (path, props){
  const { children } = props
  let result = []
  let childrenArr = children.length
      ? children
      : [children]

  childrenArr.map(child => {
    if(!child.props.autorender) return false
    result.push(
      <Route
        key={`nested-route-child-${Math.random()}`}
        path={`${path}${child.props.path}`}
        component={child.props.component}
      />
    )
  })

  return result
}

function getCurrentChild(props){
  const { computedMatch, children, location, path } = props
  const { isExact } = computedMatch
  const activeRoute = location.pathname.replace(path, '')

  if(isExact){
    return null
  }else if(children.length){
    const activeChild = children.filter(ch => ch.props.path === activeRoute)[0]
    if(!activeChild || activeChild.props.autorender) return null
    return activeChild
  }else{
    const isChildPath = children.props.path === activeRoute ? true : false
    if(!isChildPath || children.props.autorender) return null
    return children
  }
}

function WrapperRender (props){
  const { component, children, path } = props
  const WrapperComponent = component
  const WrapperChildren = getCurrentChild(props)

  return(
    <span>
      <WrapperComponent {...props} children={WrapperChildren} />
      {childrenRender(path, props)}
    </span>
  )
}

class NestedRoute extends Component{
  // render the main Route
  Wrapper = () => WrapperRender(this.props)

  // return the result
  render(){
    return <Route path={this.props.path} component={this.Wrapper}/>
  }
}

function SubRoute(props){
  const Component = props.component
  return <Component />
}

export {
  NestedRoute,
  SubRoute
}
