import React from 'react';
import style from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
const Dialogs = (props) => {

  let Users = props.users.map((el) => {
    return <Dialog id={el.id} name={el.name} />
  })
  let MessageElements = props.messages.map((el) => {
    return <Message message={el.message} />
  })

  let onUpdateMessage = (e)=>{
    props.updateMessage(e.target.value)
  }
  let onAddMesage = ()=>{
    props.addMesage();
  }

  return (
    <div className={style.DialogsPage}>
      <div className={style.Dialogs}>
        {Users}
      </div>
      <div className={style.Messages}>
        <div>{MessageElements}</div>
        <div>
          <textarea onChange={onUpdateMessage} value={props.currentNewMessage}></textarea>
          <button onClick={onAddMesage}>Send</button>
        </div>
      </div>
    </div>
  )
}
export default Dialogs;
