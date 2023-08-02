import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import { addMessage } from './redux/actions';

const Chat = ({ dummyData }) => {
  const [message, setMessage] = useState('');
  const conversations = useSelector((state) => state.conversations);
  const dispatch = useDispatch();

  const handleSendMessage = (contactId) => {
    if (message.trim() !== '') {
      const newMessage = { text: message, sender: 'user' };
      dispatch(addMessage(contactId, newMessage));
      setMessage('');
    }
  };

  // Get the current conversation based on the first element of conversations array
  const currentConversation = conversations.length > 0 ? conversations[0] : null;

  const handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSendMessage(currentConversation.contactId);
    }
  };

  return (
    <div className="chat-container">
      <div className="left-sidebar">
        <h2>Conversations</h2>
        {conversations.map((conversation) => (
          <div
            key={conversation.contactId}
            className="conversation"
            onClick={() => console.log('Conversation clicked.')} // Replace with proper handling for opening conversation
          >
            <div className="contact-name">
              {dummyData.contacts.find((contact) => contact.id === conversation.contactId).name}
            </div>
            <div className="last-message">
              {conversation.messages.length > 0
                ? conversation.messages[conversation.messages.length - 1].text
                : 'No messages'}
            </div>
          </div>
        ))}
      </div>
      <div className="right-side-view">
        {currentConversation ? (
          <>
            <div className="chat-window">
              {currentConversation.messages.map((message, index) => (
                <div
                  key={index}
                  className={`message ${message.sender === 'user' ? 'user' : 'other'}`}
                >
                  {message.text}
                </div>
              ))}
            </div>
            <div className="input-container">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleInputKeyDown} // Handle Enter key press
                placeholder="Type your message..."
              />
              <button onClick={() => handleSendMessage(currentConversation.contactId)}>
                Send
              </button>
            </div>
          </>
        ) : (
          <div className="no-conversation-selected">No conversation selected</div>
        )}
      </div>
    </div>
  );
};

export default Chat;
