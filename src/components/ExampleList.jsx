import React from "react";

import Example201 from "./Lesson02/Example201";
import Example202 from "./Lesson02/Example202";
import Example203 from "./Lesson02/Example203";
import Example204 from "./Lesson02/Example204";

import ExampleContainer from "./ExampleContainer";

import { exampleList } from "./ExampleList.module.css";

export default function ExampleList() {
    return (
        <div className={exampleList}>
            <ExampleContainer
                exampleID={"201"}
                exampleTitle={"2.01 - Hello World"}
                exampleLink={
                    "https://github.com/andentx/notes-introduction-to-react-by-edufect-institute/blob/main/Lesson02.md#example201"
                }
            >
                <Example201 />
            </ExampleContainer>

            <ExampleContainer
                exampleID={"202"}
                exampleTitle={"2.02 - React Definition"}
                exampleLink={
                    "https://github.com/andentx/notes-introduction-to-react-by-edufect-institute/blob/main/Lesson02.md#example202"
                }
            >
                <Example202 />
            </ExampleContainer>

            <ExampleContainer
                exampleID={"203"}
                exampleTitle={"2.03 - List of Strings"}
                exampleLink={
                    "https://github.com/andentx/notes-introduction-to-react-by-edufect-institute/blob/main/Lesson02.md#example203"
                }
            >
                <Example203 />
            </ExampleContainer>

            <ExampleContainer
                exampleID={"204"}
                exampleTitle={"2.04 - Number Information"}
                exampleLink={
                    "https://github.com/andentx/notes-introduction-to-react-by-edufect-institute/blob/main/Lesson02.md#example204"
                }
            >
                <Example204 />
            </ExampleContainer>
        </div>
    );
}
