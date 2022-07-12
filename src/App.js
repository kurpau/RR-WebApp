import './App.css';
import { Fragment } from 'react';
import Slider from './components/Slider';
import { pullups, squats, dips, hinges, rows, pushups } from './exercises';

function App() {
  return (
    <Fragment>
      <Slider slides={pullups} />
      <Slider slides={squats} />
      <Slider slides={dips} />
      <Slider slides={hinges} />
      <Slider slides={rows} />
      <Slider slides={pushups} />
    </Fragment>
  );
}

export default App;
