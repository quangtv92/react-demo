import React, { Component, Fragments, PropTypes  } from 'react'

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
const Message = ({
  name,
  range
}) => {
  return (
    <div>
      <div>Hello { name }</div>
      <div>Your range is { range }</div>
    </div>
  )
}

// Message.propTypes = {
//   name: PropTypes.string.isRequired
// }

export default Message

