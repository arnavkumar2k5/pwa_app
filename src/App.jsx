import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "User", content: "Hello!" },
    { id: 2, sender: "You", content: "Hi, how are you?" }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  // Handle shared content from Web Share Target API
  useEffect(() => {
    if (window.location.pathname === "/share") {
      const params = new URLSearchParams(window.location.search);
      const sharedContent = params.get('link') || params.get('text') || 'Shared content';
      setMessages([...messages, { id: messages.length + 1, sender: "Shared", content: sharedContent }]);
    }
    console.log("simple chat pwa app")
  }, []);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setMessages([...messages, { id: messages.length + 1, sender: "You", content: inputMessage }]);
      setInputMessage("");
    }
  };

  return (
    <div className="chat-app">
      <header className="chat-header">
        <h1>Simple Chat App</h1>
      </header>
      <div className="chat-body">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.sender === "You" ? "you" : "user"}`}>
            <p>{message.content}</p>
          </div>
        ))}
      </div>
      <div className="chat-footer">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}


export default App;
