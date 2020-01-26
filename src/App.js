import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Aside from './components/aside/Aside';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import { Route } from 'react-router-dom';
import FriendsContainer from './components/Friends/FriendsContainer'

const App = (props) => {
  return (
      <div className='wrapper'>
        <Header />
        <Aside />
        <Route path='/Profile/:userID' render={() => <ProfileContainer/>} />
        <Route path='/Dialogs' render={() => <DialogsContainer/>} />
        <Route path='/Friends' render={() => <FriendsContainer/>} />
      </div>
  )
}

export default App;
