import delay from 'delay'
import React from 'react'
import ReactDOM from 'react-dom'

import CoverPage, { CoverPagePresentation } from '../../src/index'

require('../../themes/default.css')

const makeSuccessfulPromise = () => delay(3000)
const makeFailedPromise = () => delay(3000).then(() => {
  throw new Error('Failed to load app')
})

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      promise: makeSuccessfulPromise()
    }
  }

  render () {
    const { promise } = this.state
    return (
      <div>
        <h1><code>react-cover-page</code></h1>

        <p className='lead'>Customizable splash screen for React apps</p>

        <div style={{ textAlign: 'center' }}>
          <div style={{ position: 'relative', width: 640, height: 480, margin: 'auto', border: '10px solid #90A4AE' }}>
            <CoverPage promise={promise}
              icon={<img src='icon.png' width={96} height={96} alt='Icon' />}
              title='Awesome app'
              loadingMessage='Please wait, loading...'
            />

            {/* We are abusing SplashScreenPresentation here, but imagine that this is the real app */}
            <CoverPagePresentation
              loading={false}
              icon={<img src='success.png' width={96} height={96} alt='Successful' />}
              message='App loaded successfully'
              style={{ zIndex: -1000 }}
            />
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button onClick={() => this.setState({ promise: makeSuccessfulPromise() })}>Start loading</button>
          <button onClick={() => this.setState({ promise: makeFailedPromise() })}>Start loading with failure</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
