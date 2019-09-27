/**
 * @file Pure functional presentation component of the splash screen.
 * This component can be used if you want to take full control over what is
 * to be shown on the splash screen. For simple use-cases, just use the one
 * from `index.js` that takes a promise.`
 */

import PropTypes from 'prop-types'
import React from 'react'
import Transition from 'react-transition-group/Transition'

/**
 * Base style of the splash screen.
 */
const defaultBaseStyles = {
  position: 'absolute',
  top: 0,
  left: 0,
  bottom: 0,
  right: 0
}

/**
 * CSS class prefix for all tags used by this component.
 */
const cssPrefix = 'react-cover-page'

/**
 * Pure functional presentation component of the splash screen.
 * This component can be used if you want to take full control over what is
 * to be shown on the splash screen.
 */
export const CoverPagePresentation = ({
  error,
  icon,
  loading,
  loadingIndicator,
  message,
  style,
  title,
  visible,
  ...rest
}) => {
  const baseStyles = {
    ...defaultBaseStyles,
    ...style
  }

  const children = []

  if (icon) {
    children.push(<div key='icon' className={cssPrefix + '-icon'}>{icon}</div>)
  }

  if (title) {
    children.push(<h1 key='header'>{title}</h1>)
  }

  if (loadingIndicator) {
    children.push(React.cloneElement(
      loadingIndicator, { key: 'loadingIndicator' }
    ))
  } else {
    if (loading && !error) {
      children.push(
        <div key='loadingIndicator' className={cssPrefix + '-progress'}>
          <div className={cssPrefix + '-progress-line'} />
        </div>
      )
    } else if (!error) {
      children.push(
        <div key='loadingIndicator' className={cssPrefix + '-progress'}>
          <div className={cssPrefix + '-progress-done'} />
        </div>
      )
    } else {
      children.push(
        <div key='loadingIndicator' className={cssPrefix + '-progress'}>
          <div className={cssPrefix + '-progress-error'} />
        </div>
      )
    }
  }

  if (message || error) {
    children.push(
      <div key='message' className={cssPrefix + (error ? '-error' : '-message')}>
        {message || 'An error happened'}
      </div>
    )
  }

  return (
    <Transition timeout={300} in={visible}>
      {
        state => (
          <div
            className={cssPrefix}
            style={{
              ...baseStyles,
              display: (state === 'exited') ? 'none' : 'block',
              opacity: (state === 'entering' || state === 'entered') ? 1 : 0,
              transition: 'opacity 300ms ease-in-out'
            }} {...rest}
          >
            <div className={cssPrefix + '-content'}>
              {children}
            </div>
          </div>
        )
      }
    </Transition>
  )
}

CoverPagePresentation.propTypes = {
  error: PropTypes.bool,
  icon: PropTypes.node,
  loading: PropTypes.bool,
  loadingIndicator: PropTypes.node,
  message: PropTypes.node,
  style: PropTypes.object,
  title: PropTypes.node,
  visible: PropTypes.bool
}

CoverPagePresentation.defaultProps = {
  error: false,
  loading: true,
  visible: true
}

export default CoverPagePresentation
