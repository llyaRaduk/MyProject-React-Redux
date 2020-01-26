import React from 'react';
import Dialogs from './Dialogs';
import { UPDATE_MESSAGE_AC, ADD_MESSAGE_AC } from './../../Redux/dialogsPageReducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    users: state.dialogsPage.users,
    messages: state.dialogsPage.messages,
    currentNewMessage: state.dialogsPage.currentNewMessage,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateMessage: (text) => {
      dispatch(UPDATE_MESSAGE_AC(text));
    },
    addMesage: () => {
      dispatch(ADD_MESSAGE_AC());
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsContainer;

