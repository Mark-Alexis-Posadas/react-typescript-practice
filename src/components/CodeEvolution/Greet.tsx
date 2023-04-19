import React from "react";

type GreetProps = {
  name: string;
  messageFuckingCount?: number;
  isLoggedIn: boolean;
};
export const Greet = (props: GreetProps) => {
  const { messageFuckingCount = 0 } = props;
  return (
    <div>
      <h1>
        {props.isLoggedIn
          ? `welcome ${props.name} you have ${messageFuckingCount} unread
        messages`
          : "Welcome guest"}
      </h1>
    </div>
  );
};
