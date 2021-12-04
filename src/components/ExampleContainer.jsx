import React from "react";

import {
    exampleContainer,
    title,
    link,
    example,
} from "./ExampleContainer.module.css";

export default function ExampleContainer({
    children,
    exampleID,
    exampleTitle,
    exampleLink,
}) {
    return (
        <div id={exampleID} className={exampleContainer}>
            <p className={title}>{exampleTitle}</p>
            <div className={example}>{children}</div>
            <p className={link}>
                <a href={exampleLink}>View Notes</a>
            </p>
        </div>
    );
}
