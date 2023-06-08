import React from "react";
import "./Button.css";

export default function Button(props) {
  const { label, operation, double, triple, click } = props;

  const classes = [
    "button",
    operation && "operation",
    double && "double",
    triple && "triple",
  ].join(" ");
  

  return (
    <button className={classes} onClick={(e) => click && click(label)}>
      {label}
    </button>
  );
}