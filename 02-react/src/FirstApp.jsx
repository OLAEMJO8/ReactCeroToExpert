import React from "react";

/*const newMessage = {
  message: "Hola Mundo",
  title: "Majo",
};*/
export const FirstApp = ({ title }) => {
  return (
    <div>
      {/*<h1>{JSON.stringify(newMessage)}</h1>*/}
      <h2>{title}</h2>
    </div>
  );
};

export default FirstApp;
