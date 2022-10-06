import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Mail from './Mail'
import EmailList from './EmailList';
import Section from './Section'
import SendMail from './SendMail';
import { selectSendMessageIsOpen } from './features/mailSlice';
import { useSelector } from 'react-redux';


function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)


  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <div className="app__body">
          <Sidebar />

          <Routes>

            <Route path='/mail' element={<Mail />} />
            <Route path='/' element={<EmailList />} />

          </Routes>

        </div>
         {sendMessageIsOpen && <SendMail />}
      </div >

    </BrowserRouter>
  );
}

export default App;
