import React from 'react'
import ReactDOM from 'react-dom'
import Index from './view/Index.jsx'
import * as serviceWorker from './serviceWorker'
import '../../node_modules/carbon-components/scss/globals/scss/styles.scss'

ReactDOM.render(<Index />, document.getElementById('root'))

serviceWorker.unregister()
