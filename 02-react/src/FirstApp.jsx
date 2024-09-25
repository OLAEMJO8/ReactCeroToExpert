import React from "react";

const newMessage = {
  message: "Hola Mundo",
  title: "Majo",
};
const FirstApp = () => {
  return (
    <div>
      <h1>{JSON.stringify(newMessage.message)}</h1>
      <h2>{JSON.stringify(newMessage.title)}</h2>
    </div>
  );
};

export default FirstApp;
