import React from "react";
type ButtonProps = {
  handClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};
export const Button = (props: ButtonProps) => {
  return <button onClick={(event) => props.handClick(event, 1)}>Click</button>;
};
