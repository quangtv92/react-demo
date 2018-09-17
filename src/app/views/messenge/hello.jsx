import React, { Component, Fragments, PropTypes } from 'react'
import styled from 'styled-components'

//Stateful component

// export default class Message extends Component {
//   render() {
//     return (
//       <div>Hello { this.props.name }</div>
//     )
//   }
// }

//Stateless component

// props are input variable, we need destruct the name on props

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: aquamarine;
`

const Slider = styled.div`
  width: ${
    ({ range }) => `${ range }%`
  }
  border: 1px solid red;
  height: 1px;

`

const Message = ({
  name,
  range
}) => {
  return (
    <Wrapper>
      <Slider
        range={ range }
        initialValues ={ range }
      />
      <span>Hello { name }</span>
      <span>Your range is { range }</span>
    </Wrapper>
  )
}

// Message.propTypes = {
//   name: PropTypes.string.isRequired
// }

export default Message

