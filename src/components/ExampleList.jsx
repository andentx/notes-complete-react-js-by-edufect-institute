import React from "react";
import Example201 from "./Example201";
import Example202 from "./Example202";
import Example203 from "./Example203";
import ExampleContainer from "./ExampleContainer";

import { exampleList } from "./ExampleList.module.css";

export default function ExampleList() {
  return (
    <div className={exampleList}>
      <ExampleContainer exampleTitle={"2.01 - Hello World"}>
        <Example201 />
      </ExampleContainer>

      <ExampleContainer exampleTitle={"2.02 - React Definition"}>
        <Example202 />
      </ExampleContainer>

      <ExampleContainer exampleTitle={"2.03 - Three Strings"}>
        <Example203 />
      </ExampleContainer>
    </div>
  );
}
