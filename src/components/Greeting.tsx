import React, { useState } from "react";

interface Props {
  messages: string[];
}

const Greeting = ({ messages }: Props) => {
  console.log("inside greeting component");

  const randomMessages = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greetingMsg, setGreetingMsg] = useState(messages[0]);

  return (
    <div>
      <h3>{greetingMsg}! Thank you for visiting!</h3>
      <button
        onClick={() => setGreetingMsg(randomMessages())}
        className="p-2 bg-amber-200 border-amber-600 border-2 cursor-pointer"
      >
        New Greeting
      </button>
    </div>
  );
};

export default Greeting;
