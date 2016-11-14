import React from 'react';
import {connect} from 'react-redux';
import {sendMessage} from '../actions';

const MessageInputContainer = ({handleSend}) => (
  <form className='message-input-container'>
    <input
      className='message-input' />
  </form>
);


const mapDispatchToProps = (dispatch) => bindActionCreators({
  sendMessage,
});

const MessageInput = connect(
  () => ({}),
  mapDispatchToProps
)(MessageInputContainer);

export default MessageInput;
