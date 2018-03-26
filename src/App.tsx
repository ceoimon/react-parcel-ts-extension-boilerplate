import * as React from 'react'

import logo from './logo.svg'

import * as classes from './App.css'

class App extends React.Component {
  public render() {
    return (
      <div className={classes.container}>
        <img src={logo} className={classes.logo} alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className={classes.link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    )
  }
}

export default App
