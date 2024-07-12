// src/components/ChatBot.js
import React, { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { role: 'user', text: 'Hello, I have 2 dogs in my house.' },
  ]);
  const [input, setInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSendMessage = async () => {
    if (input.trim() === '') return;

    const newMessages = [
      ...messages,
      { role: 'user', text: input }
    ];
    setMessages(newMessages);
    setInput('');

    try {
      const genAI = new GoogleGenerativeAI("");
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });

      const chat = model.startChat({
        history: newMessages.map(msg => ({
          role: msg.role,
          parts: [{ text: msg.text }]
        })),
        generationConfig: {
          maxOutputTokens: 100,
        },
      });

      const result = await chat.sendMessageStream(input);
      let combinedResponse = '';
      for await (const item of result.stream) {
        combinedResponse += item.candidates[0]?.content?.parts[0]?.text || '';
      }

      setMessages([...newMessages, { role: 'model', text: combinedResponse }]);
    } catch (error) {
      console.error('Error fetching generative AI response:', error);
    }
  };

  return (
    <div>
      <h1>AI ChatBot</h1>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            <span>{msg.text}</span>
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Type your message..."
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatBot;


