let initialState = {
  users: [{ id: 1, name: 'Ilya' }, { id: 2, name: 'Vanya' }, { id: 3, name: 'Roma' }],
  messages: [{ id: 1, message: 'Hey' }, { id: 2, message: 'How are you doing' }, { id: 3, message: 'im nice, and you?' }],
  currentNewMessage: 'fsdfsdfsdfsd',
}
export const dialogsPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE-MESSAGE': {
      let stateCopy = { ...state };
      stateCopy.currentNewMessage = action.value;
      return stateCopy;
    }
    case 'ADD-MESSAGE': {
      let stateCopy = {...state};
      let newMessage = {
        message: state.currentNewMessage
      }
      stateCopy.messages.push(newMessage);
      stateCopy.currentNewMessage = '';
      return stateCopy;
    }
    default: return state;
  }
}

export let UPDATE_MESSAGE_AC = (value) => ({ type: 'UPDATE-MESSAGE', value });
export let ADD_MESSAGE_AC = () => ({ type: 'ADD-MESSAGE' });
