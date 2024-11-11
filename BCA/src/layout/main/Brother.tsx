import React from "react";

interface Props {
  name: string;
}
export default function Brother(props: Props) {
  return <div>{props.name}</div>;
}
