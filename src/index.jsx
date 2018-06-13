/**
 * @file Pure functional presentation component of the splash screen.
 * This component can be used if you want to take full control over what is
 * to be shown on the splash screen. For simple use-cases, just use the one
 * from `index.js` that takes a promise.`
 */

import PropTypes from 'prop-types'
import React from 'react'

import CoverPagePresentation from './presentation'

class CoverPage extends React.Component {
  constructor (props) {
    super(props)
    this._promiseChanged = this._promiseChanged.bind(this)
    this.state = {}
  }

  componentDidMount () {
    if (this.props.promise !== undefined) {
      this._promiseChanged(undefined, this.props.promise)
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.promise !== this.props.promise) {
      this._promiseChanged(prevProps.promise, this.props.promise)
    }
  }

  componentWillUnmount () {
    if (this.props.promise !== undefined) {
      this._promiseChanged(this.props.promise, undefined)
    }
  }

  render () {
    const { loadingMessage, promise, ...rest } = this.props
    const { error, loading } = this.state
    return (
      <CoverPagePresentation {...rest}
        error={!!error}
        loading={loading}
        message={loading ? loadingMessage : (error || undefined)}
        visible={error || loading}
      />
    )
  }

  _generateErrorMessage (error) {
    const { errorMessage } = this.props
    if (errorMessage) {
      if (typeof errorMessage === 'function') {
        return errorMessage(error)
      } else {
        return errorMessage
      }
    } else {
      return error.message || 'An unknown error happened'
    }
  }

  _promiseChanged (prevPromise, promise) {
    this.setState({
      promise,
      error: false,
      loading: true
    })
    promise.then(
      () => {
        if (promise === this.state.promise) {
          this.setState({
            error: false,
            loading: false
          })
        }
      },
      error => {
        if (promise === this.state.promise) {
          this.setState({
            error: this._generateErrorMessage(error),
            loading: false
          })
        }
      }
    )
  }
}

CoverPage.propTypes = {
  errorMessage: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
  icon: PropTypes.node,
  loadingMessage: PropTypes.node,
  promise: PropTypes.shape({
    then: PropTypes.func
  }),
  style: PropTypes.object,
  title: PropTypes.node
}

export {
  CoverPage as default,
  CoverPage,
  CoverPagePresentation
}
