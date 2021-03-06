import React from 'react';

import Example201 from './Lesson02Components/Example201';
import Example202 from './Lesson02Components/Example202';
import Example203 from './Lesson02Components/Example203';
import Example204 from './Lesson02Components/Example204';
import Example205 from './Lesson02Components/Example205';
import Example206a from './Lesson02Components/Example206a';
import Example206b from './Lesson02Components/Example206b';
import Example206c from './Lesson02Components/Example206c';
import Example207a from './Lesson02Components/Example207a';
import Example207b from './Lesson02Components/Example207b';
import Example207c from './Lesson02Components/Example207c';

import ExampleContainer from './ExampleContainer';

import { exampleList } from './ExampleList.module.css';

export default function ExampleList() {
  return (
    <div className={exampleList}>
      <ExampleContainer
        exampleID={'201'}
        exampleTitle={'2.01 - Hello World'}
        exampleLink={
          'https://github.com/andentx/notes-complete-react-js-by-edufect-institute/blob/main/Lesson02.md#example201'
        }
      >
        <Example201 />
      </ExampleContainer>

      <ExampleContainer
        exampleID={'202'}
        exampleTitle={'2.02 - React Definition'}
        exampleLink={
          'https://github.com/andentx/notes-complete-react-js-by-edufect-institute/blob/main/Lesson02.md#example202'
        }
      >
        <Example202 />
      </ExampleContainer>

      <ExampleContainer
        exampleID={'203'}
        exampleTitle={'2.03 - List of Strings'}
        exampleLink={
          'https://github.com/andentx/notes-complete-react-js-by-edufect-institute/blob/main/Lesson02.md#example203'
        }
      >
        <Example203 />
      </ExampleContainer>

      <ExampleContainer
        exampleID={'204'}
        exampleTitle={'2.04 - Number Information'}
        exampleLink={
          'https://github.com/andentx/notes-complete-react-js-by-edufect-institute/blob/main/Lesson02.md#example204'
        }
      >
        <Example204 />
      </ExampleContainer>

      <ExampleContainer
        exampleID={'205'}
        exampleTitle={'2.05 - Sorted List'}
        exampleLink={
          'https://github.com/andentx/notes-complete-react-js-by-edufect-institute/blob/main/Lesson02.md#example205'
        }
      >
        <Example205 />
      </ExampleContainer>

      <ExampleContainer
        exampleID={'206a'}
        exampleTitle={'2.06a - Table of Scores'}
        exampleLink={
          'https://github.com/andentx/notes-complete-react-js-by-edufect-institute/blob/main/Lesson02.md#example206a'
        }
      >
        <Example206a />
      </ExampleContainer>

      <ExampleContainer
        exampleID={'206b'}
        exampleTitle={'2.06b - Table of Scores Styled'}
        exampleLink={
          'https://github.com/andentx/notes-complete-react-js-by-edufect-institute/blob/main/Lesson02.md#example206b'
        }
      >
        <Example206b />
      </ExampleContainer>

      <ExampleContainer
        exampleID={'206c'}
        exampleTitle={'2.06c - Table of Scores Filtered'}
        exampleLink={
          'https://github.com/andentx/notes-complete-react-js-by-edufect-institute/blob/main/Lesson02.md#example206c'
        }
      >
        <Example206c />
      </ExampleContainer>

      <ExampleContainer
        exampleID={'207a'}
        exampleTitle={'2.07a - Quiz Points'}
        exampleLink={
          'https://github.com/andentx/notes-complete-react-js-by-edufect-institute/blob/main/Lesson02.md#example207a'
        }
      >
        <Example207a />
      </ExampleContainer>

      <ExampleContainer
        exampleID={'207b'}
        exampleTitle={'2.07b - Quiz Statistics'}
        exampleLink={
          'https://github.com/andentx/notes-complete-react-js-by-edufect-institute/blob/main/Lesson02.md#example207b'
        }
      >
        <Example207b />
      </ExampleContainer>

      <ExampleContainer
        exampleID={'207c'}
        exampleTitle={'2.07c - Quiz Statistics Refactored'}
        exampleLink={
          'https://github.com/andentx/notes-complete-react-js-by-edufect-institute/blob/main/Lesson02.md#example207c'
        }
      >
        <Example207c />
      </ExampleContainer>
    </div>
  );
}
