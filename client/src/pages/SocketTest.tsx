import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import socketIOClient from "socket.io-client";

interface Message { 
  name: string, 
  message: string 
}

const SocketTest: React.FC = () => {

  const [messageList, setMessageList] = useState<Message[]>([]);
  const [data, setData] = useState({
    name: '',
    message: ''
  })
  console.log(messageList)

  const socket = socketIOClient('localhost:4040');

  const submit = (e: FormEvent<HTMLFormElement>) => {

    e.preventDefault();
    socket.emit('send message', { name: data.name, message: data.message });

  };

  useEffect(() => {

    socket.on('receive message', (message: { name: string, message: string }) => {
      setMessageList(messageList => [...messageList, message]);
    })
    
  }, []);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setData({
      ...data,
      [e.currentTarget.name] : e.target.value,
    })
  }

  return (
    <div className="App">
      
      <section className="chat-list">
        {messageList.map((item: Message, i: number) =>
          <div key={i} className="message">
            <p className="username">{item.name.toUpperCase()}</p>
            <p className="message-text">{item.message}</p>
          </div>
        )}
      </section>

      <form className="chat-form"
        onSubmit={(e: FormEvent<HTMLFormElement>) => submit(e)}>
        <div className="chat-inputs">
          <input
            type="text"
            autoComplete="off"
            onChange={handleOnChange}
            name="name"
            placeholder="유저이름"
          />
          <input
            type="text"
            autoComplete="off"
            onChange={handleOnChange}
            name="message"
            placeholder="메세지입력하기"
          />
        </div>
        <button type="submit">입력하기</button>
      </form>
    </div>
  );
}

export default SocketTest;