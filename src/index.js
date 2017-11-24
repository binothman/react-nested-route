/*
* NestedRoute: to run multiple components
* - use this component under react-router-dom v4
* @props: path: the url for route
* @props: component: the component will run on that url
*/
import React, { Component } from 'react'
import { Route } from 'react-router-dom'

class NestedRoute extends Component{

  // render children Route
  ChildrenRender = (path, childrens) => {
    let result = []
    let tempChildren = childrens.length
        ? childrens
        : [childrens]

    tempChildren.map(child =>
      result.push(
        <Route
          key={`nested-route-child-${Math.random()}`}
          path={`${path}${child.props.path}`}
          component={child.props.component}
        />
      )
    )

    return result
  }

  getCurrentChild = () => {
    const { computedMatch, children, location, path } = this.props
    const { isExact } = computedMatch
    if(isExact){
      return null
    }else if(children.length){
      const activeRoute = location.pathname.replace(path, '')
      const activeChild = children.filter(ch => ch.props.path === activeRoute)[0]
      if(activeChild.props.norender) return null
      return activeChild
    }else{
      if(children.props.render) return null
      return children
    }
  }

  // render the main Route
  WrapperRender = () => {
    const { component, children, path } = this.props
    const WrapperComponent = component
    const WrapperChildren = this.getCurrentChild()
    return(
      <div>
        <WrapperComponent {...this.props} children={WrapperChildren} />
        {this.ChildrenRender(path, children)}
      </div>
    )
  }

  // return the result
  render(){
    return <Route path={this.props.path} component={this.WrapperRender}/>
  }

}

const SubRoute = props => {
  const Component = props.component
  return <Component />
}

export {
  NestedRoute,
  SubRoute
}
