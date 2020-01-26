import {dialogsPageReducer} from './dialogsPageReducer';
import {profilePageReducer} from './profilePageReducer';
let store = {
  state: {
    dialogsPage: {
      users: [{ id: 1, name: 'Ilya' }, { id: 2, name: 'Vanya' }, { id: 3, name: 'Roma' }],
      messages: [{ id: 1, message: 'Hey' }, { id: 2, message: 'How are you doing' }, { id: 3, message: 'im nice, and you?' }],
      currentNewMessage: 'fsdfsdfsdfsd',
    },
    profilePage: {
      posts: [{ message: 'Hey bro', like: 21 }, { message: 'How are you doing?', like: 48 }, { message: 'I am ok', like: 11 }, { message: 'Its wonderful!!', like: 100 }],
      currentText: 'qwe',
    },
  },
  rerender() {
    console.log('State is changed');
  },
  dispatch(action) {
    this.state.dialogsPage = dialogsPageReducer(this.state.dialogsPage, action);
    this.state.profilePage = profilePageReducer(this.state.profilePage, action);
    this.rerender(this);
  },
  subscribe(observer) {
    this.rerender = observer;
  },
};
export default store;


