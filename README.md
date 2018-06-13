react-splashscreen
==================

Customizable splash screen for React applications.

Usage
-----

```jsx
import SplashScreen from 'react-splashscreen'

function initialize() {
  /* do something here that takes time and return a promise */
}

/* ... */

<SplashScreen promise={initialize()}
  icon={<img src='icon.png' width={96} height={96} alt='Icon' />}
  title='Awesome app'
/>
```

Props
-----

The component supports the following props:

TODO

Presentational component
------------------------

TODO
