react-cover-page
================

Customizable splash screen for React applications.

Usage
-----

```jsx
import CoverPage from 'react-cover-page'

function initialize() {
  /* do something here that takes time and return a promise */
}

/* ... */

<CoverPage promise={initialize()}
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
