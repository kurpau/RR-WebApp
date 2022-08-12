import React from 'react';
import { Fragment, useState } from 'react';
import Slider from './components/Slider';
import Section from './components/Section';
import Welcome from './components/Welcome';
import Instructions from './components/Instructions';
import { antiExtensions, antiRotations, extensions, pullups, squats, dips, hinges, rows, pushups } from './exercises';
import './App.css';

function App() {
  const [instructionsAreShown, setInstructionsAreShown] = useState(false);

  const showInstructionsHandler = () => {
    setInstructionsAreShown(true);
  }

  const hideInstructionsHandler = () => {
    setInstructionsAreShown(false);
  }
  return (
    <Fragment>
      <Welcome onShowInstructions={showInstructionsHandler}/>
      {instructionsAreShown && <Instructions onClose={hideInstructionsHandler} />}
      <Section title="First pair">
        <Slider slides={pullups} snr={"3x5-8"} />
        <Slider slides={squats} snr={"3x5-8"} />
      </Section>
      <Section title="Second pair">
        <Slider slides={dips} snr={"3x5-8"} />
        <Slider slides={hinges} snr={"3x5-8"} />
      </Section>
      <Section title="Third pair">
        <Slider slides={rows} snr={"3x5-8"} />
        <Slider slides={pushups} snr={"3x5-8"} />
      </Section>
      <Section title="Core triplet">
        <Slider slides={antiExtensions} snr={"3x8-12"} />
        <Slider slides={antiRotations} snr={"3x8-12"} />
        <Slider slides={extensions} snr={"3x8-12"} />
      </Section>
    </Fragment>
  );
}

export default App;
