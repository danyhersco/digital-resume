import React, { useState } from "react";
import "./Chat.css";
import { ReactComponent as Arrow } from '../../images/arrow_right.svg';

const Chat: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const [query, setQuery] = useState<string | null>(null);

  const handleSubmit = () => {
    setQuery(input);
    setInput('');
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit();
  };

  return (
    <div className="chat-section">
      <div className="chat-zone">
        <h1 className="chat-h1">Chat With Me</h1>
        <div className="chat-bubbles">{query}</div>
        <form onSubmit={handleFormSubmit} className="chat-form">
          <input
            className="chat-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Your Message Here..."
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSubmit();
              }
            }}
          />
          <button type='submit' className="chat-submit">
            <Arrow className="submit-arrow"/>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
