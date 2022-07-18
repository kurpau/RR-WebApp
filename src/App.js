import React from 'react';
import './App.css';
import { Fragment } from 'react';
import Slider from './components/Slider';
import Section from './components/Section';
import { pullups, squats, dips, hinges, rows, pushups } from './exercises';

function App() {
  return (
    <Fragment>
      <Section title="First pair">
        <Slider slides={pullups} />
        <Slider slides={squats} />
      </Section>
      <Section title="Second pair">
        <Slider slides={dips} />
        <Slider slides={hinges} />
      </Section>
      <Section title="Third pair">
        <Slider slides={rows} />
        <Slider slides={pushups} />
      </Section>
    </Fragment>
  );
}

export default App;
