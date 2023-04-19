import React from "react";
type ContainerProps = {
  styles: React.CSSProperties;
};
export const Container = (props: ContainerProps) => {
  return (
    <div>
      <h1 style={props.styles}>hello</h1>
    </div>
  );
};
