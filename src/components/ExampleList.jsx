import React from "react";

import Example201 from "./Lesson02/Example201";
import Example202 from "./Lesson02/Example202";
import Example203 from "./Lesson02/Example203";
import Example204 from "./Lesson02/Example204";
import Example205 from "./Lesson02/Example205";
import Example206a from "./Lesson02/Example206a";
import Example206b from "./Lesson02/Example206b";
import Example206c from "./Lesson02/Example206c";

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

            <ExampleContainer
                exampleID={"205"}
                exampleTitle={"2.05 - Sorted List"}
                exampleLink={
                    "https://github.com/andentx/notes-introduction-to-react-by-edufect-institute/blob/main/Lesson02.md#example205"
                }
            >
                <Example205 />
            </ExampleContainer>

            <ExampleContainer
                exampleID={"206a"}
                exampleTitle={"2.06a - Table of Scores"}
                exampleLink={
                    "https://github.com/andentx/notes-introduction-to-react-by-edufect-institute/blob/main/Lesson02.md#example206a"
                }
            >
                <Example206a />
            </ExampleContainer>

            <ExampleContainer
                exampleID={"206b"}
                exampleTitle={"2.06b - Table of Scores Styled"}
                exampleLink={
                    "https://github.com/andentx/notes-introduction-to-react-by-edufect-institute/blob/main/Lesson02.md#example206b"
                }
            >
                <Example206b />
            </ExampleContainer>

            <ExampleContainer
                exampleID={"206c"}
                exampleTitle={"2.06c - Table of Scores Filtered"}
                exampleLink={
                    "https://github.com/andentx/notes-introduction-to-react-by-edufect-institute/blob/main/Lesson02.md#example206c"
                }
            >
                <Example206c />
            </ExampleContainer>
        </div>
    );
}
