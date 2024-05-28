import React from 'react';
import './Chat.css'

const Chat: React.FC = () => {
  return (
    <div className="chat-section">
      <div className="chat-zone">
        <h1 className="chat-h1">
          Chat With Me
        </h1>
        <div className="chat-bubbles">
          Dialogue here
        </div>
        <input className="chat-input" placeholder="Your Message Here..." />
      </div>
    </div>
  )
}

export default Chat;
