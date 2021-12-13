import React from 'react';

import Example301 from './Lesson03Components/Example301';
import Example302 from './Lesson03Components/Example302';

import ExampleContainer from './ExampleContainer';

import { exampleList } from './ExampleList.module.css';

export default function ExampleList() {
    return (
        <div className={exampleList}>
            <ExampleContainer
                exampleID={'301'}
                exampleTitle={'3.01 - Button Info'}
                exampleLink={
                    'https://github.com/andentx/notes-complete-react-js-by-edufect-institute/blob/main/Lesson03.md#example301'
                }
            >
                <Example301 />
            </ExampleContainer>

            <ExampleContainer
                exampleID={'302'}
                exampleTitle={'3.02 - Contact Info'}
                exampleLink={
                    'https://github.com/andentx/notes-complete-react-js-by-edufect-institute/blob/main/Lesson03.md#example302'
                }
            >
                <Example302 />
            </ExampleContainer>
        </div>
    );
}
