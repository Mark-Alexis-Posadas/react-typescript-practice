import React from "react";
import { PersonProps } from "./Person.types";

export const Person = (props: PersonProps) => {
  return (
    <div>
      My name is {props.name.firstName} {props.name.lastName}
    </div>
  );
};
