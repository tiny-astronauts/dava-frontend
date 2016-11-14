import messageUtils from '../utils/messageUtils';

export const sendMessage = (message) => ({
  type: 'SEND_MESSAGE',
  payload: messageUtils.sendMessage(),
})
