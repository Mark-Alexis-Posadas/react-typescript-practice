import React, { useRef, useState } from "react";

interface Person {
  firstName: string;
  lastName: string;
}

interface PropsName extends React.InputHTMLAttributes<HTMLInputElement> {
  text: string;
  ok?: boolean;
  i: number;
  person: Person;
  handleChange: React.ChangeEventHandler<HTMLInputElement>;
}

interface TextNode {
  text: string;
}

export const TextField: React.FC<PropsName> = ({ handleChange, text }) => {
  //UseState
  const [count, setCount] = useState<number | null | undefined | string>(5); //can be an number or null or undefiend or string
  const [countTwo, setCountTwo] = useState<TextNode>({ text: "Hello" });
  setCount(undefined);
  setCountTwo({ text });

  //UseRef
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={divRef}>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  );
};
