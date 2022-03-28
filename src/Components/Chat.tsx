import React, { useState } from "react";
import "../App.css";
import data from "../data.json";
import ChatCard from "./ChatCard";
import Input from "./userInput";
import Name from "./Name";

import Button from "./button";

const Chat: React.FC = () => {

  const[author, setAuthor] = useState<string>('');
  const[message, setMessage] = useState<string>('');
  const[messages, setMessages] = useState<Array<object>>([]);

  const submitMessages = () => {
    setMessages([...messages, { username: author, message: message }]);
    setMessage('');
}
  return (
    <div className="chat">
      <h3>VOCO</h3>

      <div className="chat__container">
        {data.map((cardItem) => {
          return (
            <ChatCard
              key={cardItem.id}
              username={cardItem.username}
              message={cardItem.message}
              date={cardItem.date}
            />
          );
        })}
      </div>
      <div className="d-flex justify-content-center">
        <div className="row" style={{ width: "600px" }}>
          <div className="col-2 d-flex align-items-center justify-content-center bg-white" style={{marginBottom:"25px",  borderBottomLeftRadius:"5px" }}>
            <Name setAuthor={setAuthor}/>
          </div>
          <div className="col-10 p-0">
            <Input setMessage={setMessage} message={message} />
          </div>
        </div>
      </div>
     
      <div className="d-flex justify-content-center">
      <div className="d-flex justify-content-end" style={{width:"600px"}}>
      <Button submitHandler={submitMessages}/>
      </div>
      </div>
    </div>
  );
};

export default Chat;
