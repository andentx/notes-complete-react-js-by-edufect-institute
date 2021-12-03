import React from "react";

import {
  exampleContainer,
  exampleLabel,
  example,
} from "./ExampleContainer.module.css";

export default function ExampleContainer({ children, exampleTitle }) {
  return (
    <div className={exampleContainer}>
      <p className={exampleLabel}>{exampleTitle}</p>
      <div className={example}>{children}</div>
    </div>
  );
}
