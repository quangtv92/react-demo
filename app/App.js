import React from "react";

import styles from './style.css'

//Render props
const Index = () => {
  return (
    <div className={ styles.title }>
      <span>Hello world!</span>
    </div>
  )
}


class App extends React.Component {
  render() {
    let props = this.props;

    return (
      <div className={ styles.title } {...props}>
        <span>Hello world</span>
      </div>
    )
  }
}

export default App
