import React from 'react';
import { Fragment, useState } from 'react';
import Slider from './components/Slider';
import Section from './components/Section';
import Welcome from './components/Welcome';
import Instructions from './components/Instructions';
import Text from './components/Text';
import { antiExtensions, antiRotations, extensions, pullups, squats, dips, hinges, rows, pushups } from './exercises';
import './App.css';

function App() {
  const [instructionsAreShown, setInstructionsAreShown] = useState(false);

  const showInstructionsHandler = () => {
    document.body.style.overflow = 'hidden'; // prevent scrolling when modal is shown
    setInstructionsAreShown(true);
  }

  const hideInstructionsHandler = () => {
    document.body.style.overflow = 'unset';
    setInstructionsAreShown(false);
  }
  return (
    <Fragment>
      <Welcome onShowInstructions={showInstructionsHandler}/>
      {instructionsAreShown && <Instructions onClose={hideInstructionsHandler} />}
      <Text>
        IMPORTANT! Always warm up before workout. Go for a short run
        or do a <a href="https://www.reddit.com/r/bodyweightfitness/wiki/kb/recommended_routine/#wiki_warm-up.3A_dynamic_stretches_.285-10min.29">warmup routine</a>
      </Text>
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
