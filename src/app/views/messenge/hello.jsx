import React, { PropTypes, Component } from 'react'

//Stateful component

// export default class Message extends Component {
//   render() {
//     return (
//       <div>Hello { this.props.name }</div>
//     )
//   }
// }

//Stateless component

// Đoạn này Message được truyền vào 1 props. ở đây ta chỉ cần name nên sẽ lấy mình name
const Message = ({
  name
}) => {
  return (
    <div>Hello { name }</div>
  )
}

// Message.propTypes = {
//   name: PropTypes.string.isRequired
// }

export default Message

