import React, { Fragment } from 'react'
import styled from 'styled-components'

import Message from './messenge'

const Range = styled.input.attrs({
  type: 'range'
})`
  display: block;
  width: 100%;
`

//Render props
// const Index = () => {
//   return (
//     <div className={ styles.title }>
//       <span>Hello world!</span>
//     </div>
//   )
// }


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'React',
      range: 20
    }
  }

  onChange(e) {
    this.setState({ range: e.target.value })
  }

  render() {
    return (
      <Fragment>
        <Range
          type="range"
          name="range"
          min="0"
          max="100"
          value={ this.state.range }
          onChange={ this.onChange.bind(this) }
        />
        <Message
          name={ this.state.name }
          range={ this.state.range }
        />
      </Fragment>
    )
  }
}

export default App
