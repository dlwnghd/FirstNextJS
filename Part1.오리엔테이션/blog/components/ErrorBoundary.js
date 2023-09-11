/**
 * FileName    : ErrorBoundary.js
 * Description : 에러바운더리(에러 핸들링)
 * Copyright 2023 by LeeJuhong
 * Author      : Leejuhong
 * CreatedAt   : 2023-09-11
 */

import React from 'react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)

    this.state = { hasError: false, error: null, errorInfo: null }
  }

  //   static getDerivedStateFromError(error) {
  //     console.log(`getDerivedStateFromError: ${error}`)
  //     return { hasError: true }
  //   }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true, error, errorInfo })
    console.log(`componentDidCatch: ${(error, errorInfo)}`)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallbackComponent) {
        return this.props.fallbackComponent
      }

      return (
        <div>
          <h2>Error occured!!</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary
