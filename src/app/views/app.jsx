import React from "react";

import styles from './style.css'

import Message from './messenge'

//Render props
const Index = () => {
  return (
    <div className={ styles.title }>
      <span>Hello world!</span>
    </div>
  )
}


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'React',
      range: 0
    }
  }

  onChange(e) {
    this.setState({ range: e.target.value })
  }

  render() {

    return (
      <div >

        <input type='range' name='Fragments' onChange={ this.onChange.bind(this) } />
        <Message
          name={ this.state.name }
          range={ this.state.range }
        />
      </div>
    )
  }
}

export default App
